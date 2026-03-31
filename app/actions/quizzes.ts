"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const DifficultyEnum = z.enum(["EASY", "MEDIUM", "HARD", "EXPERT"]);

const OptionSchema = z.object({
  text: z.string().min(1, "Option text is required"),
  isCorrect: z.boolean(),
});

const QuestionSchema = z.object({
  text: z.string().min(1, "Question text is required"),
  image: z.string().optional(),
  explanation: z.string().optional(),
  marks: z.number().min(1).default(1),
  options: z.array(OptionSchema).min(2, "At least 2 options are required"),
});

const QuizSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  image: z.string().optional(),
  duration: z.number().min(1).default(15),
  difficulty: DifficultyEnum.default("EASY"),
  categoryId: z.string().min(1, "Category is required"),
  isPublished: z.boolean().default(false),
  questions: z.array(QuestionSchema).optional(),
});

export type QuizInput = z.infer<typeof QuizSchema>;

export async function getQuizzes() {
  try {
    const quizzes = await prisma.quiz.findMany({
      include: {
        category: { select: { name: true } },
        _count: { select: { questions: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: JSON.parse(JSON.stringify(quizzes)) };
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    return { success: false, error: "Database rejection." };
  }
}

export async function getQuizById(id: string) {
  try {
    console.log("Searching for Quiz Profile ID:", id);
    const quiz = await prisma.quiz.findUnique({
      where: { id },
      include: {
        category: true,
        questions: {
          include: {
            options: true,
          },
        },
      },
    });
    if (!quiz) {
       console.warn(`CRITICAL: ID ${id} not found in database.`);
       return { success: false, error: "Unit not found in current sector." };
    }
    return { success: true, data: JSON.parse(JSON.stringify(quiz)) };
  } catch (error) {
    console.error("Error fetching quiz:", error);
    return { success: false, error: "Quiz not found." };
  }
}

export async function createQuiz(rawData: QuizInput) {
  try {
    const validatedData = QuizSchema.parse(rawData);
    const { questions, ...quizData } = validatedData;

    const quiz = await prisma.quiz.create({
      data: {
        ...quizData,
        questions: questions ? {
          create: questions.map((q) => ({
            text: q.text,
            image: q.image,
            explanation: q.explanation,
            marks: q.marks,
            options: {
              create: q.options,
            },
          })),
        } : undefined,
      },
    });

    revalidatePath("/admin/quizzes");
    return { success: true, data: JSON.parse(JSON.stringify(quiz)) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0]?.message || "Validation failed" };
    }
    console.error("Error creating quiz:", error);
    return { success: false, error: "Internal architecture failure." };
  }
}

export async function updateQuiz(id: string, rawData: any) {
  try {
    // 1. Validate incoming protocol structure
    const validatedData = QuizSchema.parse(rawData);
    const { questions, ...quizData } = validatedData;
    
    // 2. Execute deep structural mutation in transaction
    const quiz = await prisma.$transaction(async (tx) => {
      // Clear previous question units (Cascade deletes options automatically)
      await tx.question.deleteMany({ where: { quizId: id } });

      // Re-populate with updated architecture
      return await tx.quiz.update({
        where: { id },
        data: {
          ...quizData,
          questions: questions ? {
            create: questions.map((q) => ({
              text: q.text,
              image: q.image,
              explanation: q.explanation,
              marks: q.marks,
              options: {
                create: q.options.map(o => ({
                  text: o.text,
                  isCorrect: o.isCorrect
                })),
              },
            })),
          } : undefined,
        },
      });
    });

    // 3. Purge cache and synchronize sectors
    revalidatePath("/admin/quizzes");
    revalidatePath(`/admin/quizzes/${id}`);
    revalidatePath(`/admin/quizzes/${id}/edit`);
    
    return { success: true, data: JSON.parse(JSON.stringify(quiz)) };
  } catch (error) {
    console.error("Critical Update Failure:", error);
    return { success: false, error: "System rejected the architectural modification." };
  }
}

export async function deleteQuiz(id: string) {
  try {
    await prisma.quiz.delete({
      where: { id },
    });
    revalidatePath("/admin/quizzes");
    return { success: true };
  } catch (error) {
    console.error("Error deleting quiz:", error);
    return { success: false, error: "Deletion sequence failed." };
  }
}

export async function getAllQuestions() {
  try {
    const questions = await prisma.question.findMany({
      include: {
        quiz: {
          select: {
            title: true,
            difficulty: true,
            category: { select: { name: true } }
          }
        },
        options: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: JSON.parse(JSON.stringify(questions)) };
  } catch (error) {
    console.error("Error fetching all questions:", error);
    return { success: false, error: "Database inquiry failed." };
  }
}

export async function deleteQuestion(id: string) {
  try {
    await prisma.question.delete({
      where: { id },
    });
    revalidatePath("/admin/questions");
    revalidatePath("/admin/quizzes");
    return { success: true };
  } catch (error) {
    console.error("Error deleting question:", error);
    return { success: false, error: "Action rejected." };
  }
}

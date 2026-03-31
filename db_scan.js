const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const categories = await prisma.category.findMany({ select: { id: true, name: true } });
    console.log("Categories in Sector:", JSON.stringify(categories, null, 2));

    const quizzes = await prisma.quiz.findMany({
      select: { id: true, title: true, _count: { select: { questions: true } } }
    });
    console.log("Registered Quizzes:", JSON.stringify(quizzes, null, 2));
  } catch (err) {
    console.error("Diagnostic failure:", err.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();

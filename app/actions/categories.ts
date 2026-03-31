"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CategorySchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(50),
  image: z.string().min(1, "Banner image is required"),
  description: z.string().min(10, "Description must be at least 10 characters").max(500),
});

export type CategoryInput = z.infer<typeof CategorySchema>;

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: JSON.parse(JSON.stringify(categories)) };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { success: false, error: "System failed to retrieve categories. Check database connection." };
  }
}

export async function createCategory(rawData: CategoryInput) {
  try {
    const validatedData = CategorySchema.parse(rawData);
    const category = await prisma.category.create({
      data: validatedData,
    });
    revalidatePath("/admin/categories");
    return { success: true, data: JSON.parse(JSON.stringify(category)) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0]?.message || "Validation failed" };
    }
    console.error("Error creating category:", error);
    return { success: false, error: error instanceof Error ? error.message : "Database rejection." };
  }
}

export async function updateCategory(id: string, rawData: Partial<CategoryInput>) {
  try {
    const validatedData = CategorySchema.partial().parse(rawData);
    const category = await prisma.category.update({
      where: { id },
      data: validatedData,
    });
    revalidatePath("/admin/categories");
    return { success: true, data: JSON.parse(JSON.stringify(category)) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0]?.message || "Validation failed" };
    }
    console.error("Error updating category:", error);
    return { success: false, error: error instanceof Error ? error.message : "Database updated failed." };
  }
}

export async function deleteCategory(id: string) {
  try {
    await prisma.category.delete({
      where: { id },
    });
    revalidatePath("/admin/categories");
    return { success: true };
  } catch (error) {
    console.error("Error deleting category:", error);
    return { success: false, error: error instanceof Error ? error.message : "Delete operation rejected." };
  }
}

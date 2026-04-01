"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const AnnouncementSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  type: z.enum(["info", "warning", "success", "danger"]).default("info"),
  isActive: z.boolean().default(true),
});

export type AnnouncementInput = z.infer<typeof AnnouncementSchema>;

export async function getAnnouncements() {
  try {
    const announcements = await prisma.announcement.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: JSON.parse(JSON.stringify(announcements)) };
  } catch (error) {
    console.error("Error fetching announcements:", error);
    return { success: false, error: "Access denied by protocol." };
  }
}

export async function createAnnouncement(rawData: AnnouncementInput) {
  try {
    const validatedData = AnnouncementSchema.parse(rawData);
    const announcement = await prisma.announcement.create({
      data: validatedData,
    });

    revalidatePath("/admin/announcements");
    return { success: true, data: JSON.parse(JSON.stringify(announcement)) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0]?.message };
    }
    console.error("Error creating announcement:", error);
    return { success: false, error: "Deployment failed." };
  }
}

export async function updateAnnouncement(id: string, rawData: Partial<AnnouncementInput>) {
  try {
    const validatedData = AnnouncementSchema.partial().parse(rawData);
    const announcement = await prisma.announcement.update({
      where: { id },
      data: validatedData,
    });

    revalidatePath("/admin/announcements");
    return { success: true, data: JSON.parse(JSON.stringify(announcement)) };
  } catch (error) {
    console.error("Error updating announcement:", error);
    return { success: false, error: "Update rejected." };
  }
}

export async function deleteAnnouncement(id: string) {
  try {
    await prisma.announcement.delete({
      where: { id },
    });
    revalidatePath("/admin/announcements");
    return { success: true };
  } catch (error) {
    console.error("Error deleting announcement:", error);
    return { success: false, error: "Dissolution failed." };
  }
}

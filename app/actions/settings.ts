"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getSettings(keys: string[]) {
  try {
    const settings = await prisma.systemSetting.findMany({
      where: { key: { in: keys } },
    });
    
    // Map them into an object for easier use
    const result: Record<string, string> = {};
    settings.forEach(s => {
        result[s.key] = s.value;
    });
    return { success: true, data: result };
  } catch (error) {
    console.error("Error fetching settings:", error);
    return { success: false, error: "Settings access denied." };
  }
}

export async function updateSettings(settings: Record<string, string>) {
  try {
    const operations = Object.entries(settings).map(([key, value]) => {
      return prisma.systemSetting.upsert({
        where: { key },
        update: { value },
        create: { key, value },
      });
    });

    await prisma.$transaction(operations);
    revalidatePath("/admin/settings");
    return { success: true };
  } catch (error) {
    console.error("Error updating settings:", error);
    return { success: false, error: "Settings update rejected." };
  }
}

"use server";

import { redirect } from "next/navigation";

import { requireUser } from "@/hooks/requireUser";
import { prisma } from "@/utils/prisma";
import { onboardingSchema } from "@/utils/schemas";
import { parseWithZod } from "@conform-to/zod";

export const getUser = async (userId: string) => {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstName: true,
      email: true,
      lastName: true,
      address: true,
    },
  });

  if (!data?.firstName || !data.lastName || !data.address) {
    redirect("/onboarding");
  }

  return data;
};

export async function onboardUser(prevState: any, formData: FormData) {
  const session = await requireUser();

  const submission = parseWithZod(formData, {
    schema: onboardingSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      firstName: submission.value.firstName,
      lastName: submission.value.lastName,
      address: submission.value.address,
    },
  });

  return redirect("/dashboard");
}

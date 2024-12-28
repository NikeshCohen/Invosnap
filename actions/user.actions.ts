"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/utils/prisma";

export const getUser = async (userId: string) => {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstName: true,
      lastName: true,
      address: true,
    },
  });

  //   if (!data?.firstName || !data.lastName || !data.address) {
  //     redirect("/onboarding");
  //   }
};

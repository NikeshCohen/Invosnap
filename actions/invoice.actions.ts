"use server";

import { prisma } from "@/utils/prisma";

export const getInvoiceData = async (userId: string) => {
  console.log(userId);

  const data = await prisma.invoice.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      clientName: true,
      total: true,
      createdAt: true,
      status: true,
      invoiceNumber: true,
      currency: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
};

import { NextResponse } from "next/server";

import { requireUser } from "@/hooks/requireUser";
import { emailClient } from "@/utils/mailTrap";
import { prisma } from "@/utils/prisma";

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ invoiceId: string }>;
  },
) {
  try {
    const session = await requireUser();

    const { invoiceId } = await params;

    const invoiceData = await prisma.invoice.findUnique({
      where: {
        id: invoiceId,
        userId: session.user?.id,
      },
    });

    if (!invoiceData) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    const sender = {
      email: "hello@demomailtrap.com",
      name: invoiceData.fromName,
    };

    emailClient.send({
      from: sender,
      to: [{ email: invoiceData.clientEmail }],
      template_uuid: "e41d3b7f-48e9-42f3-a9e8-a515a49766bd",
      template_variables: {
        first_name: invoiceData.clientName,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send Email reminder" },
      { status: 500 },
    );
  }
}

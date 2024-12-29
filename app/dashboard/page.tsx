import { Suspense } from "react";

import { requireUser } from "@/hooks/requireUser";
import { prisma } from "@/utils/prisma";

import { Skeleton } from "@/components/ui/skeleton";

import { DashboardBlocks } from "./_components/Dashboardblocks";
import { EmptyState } from "./_components/EmptyState";
import { InvoiceGraph } from "./_components/InvoiceGraph";
import { RecentInvoices } from "./_components/RecentInvoices";

async function getData(userId: string) {
  const data = await prisma.invoice.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
    },
  });

  return data;
}

export default async function DashboardRoute() {
  const session = await requireUser();
  const data = await getData(session.user?.id as string);
  return (
    <>
      {data.length < 1 ? (
        <EmptyState
          title="No invoices found"
          description="Create an invoice to see it right here"
          buttontext="Create Invoice"
          href="/dashboard/invoices/create"
        />
      ) : (
        <Suspense fallback={<Skeleton className="h-full w-full flex-1" />}>
          <DashboardBlocks />
          <div className="grid gap-4 md:gap-8 lg:grid-cols-3">
            <InvoiceGraph />
            <RecentInvoices />
          </div>
        </Suspense>
      )}
    </>
  );
}

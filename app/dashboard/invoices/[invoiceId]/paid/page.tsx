import Image from "next/image";
import Link from "next/link";

import { markAsPaidAction } from "@/actions/invoice.actions";
import { authorize } from "@/actions/user.actions";
import { SubmitButton } from "@/app/login/_components/SubmitBtn";
import { requireUser } from "@/hooks/requireUser";
import PaidGif from "@/public/paid-gif.gif";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Params = Promise<{ invoiceId: string }>;

export default async function MarkAsPaid({ params }: { params: Params }) {
  const { invoiceId } = await params;
  const session = await requireUser();
  await authorize(invoiceId, session.user?.id as string);
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="max-w-[500px]">
        <CardHeader>
          <CardTitle>Mark as Paid?</CardTitle>
          <CardDescription>
            Are you sure you want to mark this invoice as paid?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={PaidGif} alt="Paid Gif" className="rounded-lg" />
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/dashboard/invoices"
          >
            Cancel
          </Link>
          <form
            action={async () => {
              "use server";
              await markAsPaidAction(invoiceId);
            }}
          >
            <SubmitButton text="Mark ad Paid!" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

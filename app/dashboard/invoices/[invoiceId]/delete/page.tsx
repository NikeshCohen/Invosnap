import Image from "next/image";
import Link from "next/link";

import { deleteInvoice } from "@/actions/invoice.actions";
import { authorize } from "@/actions/user.actions";
import { SubmitButton } from "@/app/login/_components/SubmitBtn";
import { requireUser } from "@/hooks/requireUser";
import WarningGif from "@/public/warning-gif.gif";

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

async function Page({ params }: { params: Params }) {
  const session = await requireUser();
  const { invoiceId } = await params;
  await authorize(invoiceId, session.user?.id as string);
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="max-w-[500px]">
        <CardHeader>
          <CardTitle>Delete Invoice</CardTitle>
          <CardDescription>
            Are you sure that you want to delete this invoice?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={WarningGif} alt="Warning Gif" className="rounded-lg" />
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
              await deleteInvoice(invoiceId);
            }}
          >
            <SubmitButton text="Delete Invoice" variant={"destructive"} />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
export default Page;

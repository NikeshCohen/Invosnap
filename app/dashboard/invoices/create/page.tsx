import { getUser } from "@/actions/user.actions";
import { requireUser } from "@/hooks/requireUser";

import { CreateInvoice } from "./_components/CreateInvoice";

export default async function InvoiceCreationRoute() {
  const session = await requireUser();
  const data = await getUser(session.user?.id as string);
  return (
    <CreateInvoice
      lastName={data?.lastName as string}
      address={data?.address as string}
      email={data?.email as string}
      firstName={data?.firstName as string}
    />
  );
}

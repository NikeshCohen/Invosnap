import { getInvoice } from "@/actions/invoice.actions";
import { requireUser } from "@/hooks/requireUser";

import { EditInvoice } from "../_components/EditInvoice";

type Params = Promise<{ invoiceId: string }>;

export default async function EditInvoiceRoute({ params }: { params: Params }) {
  const { invoiceId } = await params;
  const session = await requireUser();
  const data = await getInvoice(invoiceId, session.user?.id as string);

  return <EditInvoice data={data} />;
}

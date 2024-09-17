import { useInvoiceContext } from "@/context/InvoiceContext";

export default function SummaryStep() {
  const { getValues } = useInvoiceContext();
  const values = getValues();

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">Summary</h2>
      <div>
        <h3 className="font-semibold">Payer & Payee</h3>
        <p>Payer: {values.payerName}</p>
        <p>Payee: {values.payeeName}</p>
      </div>
      <div>
        <h3 className="font-semibold">Invoice Details</h3>
        <p>Invoice Number: {values.invoiceNumber}</p>
        <p>Invoice Date: {values.invoiceDate}</p>
      </div>
      <div>
        <h3 className="font-semibold">Line Items</h3>
        <ul>
          {values.lineItems.map((item, index) => (
            <li key={index}>
              {item.description}: ${item.amount}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Payment Info</h3>
        <p>Payment Method: {values.paymentMethod}</p>
        <p>Payment Due Date: {values.paymentDueDate}</p>
      </div>
    </div>
  );
}

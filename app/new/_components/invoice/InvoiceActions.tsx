"use client";

import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import { useInvoiceContext } from "@/context/InvoiceContext";

function InvoiceActions() {
  const { handleSubmit } = useInvoiceContext();

  const exportPdf = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex justify-end mt-4">
      <Button
        className="flex justify-center items-center gap-2"
        onClick={exportPdf}
      >
        <span>Export Invoice</span>
        <ExitIcon />
      </Button>
    </div>
  );
}

export default InvoiceActions;

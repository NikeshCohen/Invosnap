import { InvoiceWrapper } from "@/context/InvoiceContext";
import Invoice from "./_components/Invoice";
import Steps from "./_components/Steps";

function page() {
  return (
    <section className="layout">
      <div className="flex lg:flex-row flex-col gap-4">
        <InvoiceWrapper>
          <Steps />
          <Invoice />
        </InvoiceWrapper>
      </div>
    </section>
  );
}

export default page;

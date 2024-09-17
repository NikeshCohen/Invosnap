import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InvoiceActions from "./invoice/InvoiceActions";

function Invoice() {
  return (
    <Card className="lg:w-1/2">
      <CardHeader>
        <CardTitle>Live Preview</CardTitle>
        <CardDescription>
          View a real-time preview of your invoice as you fill out the details.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <div className="dark:border-neutral-800 light:border-neutral-200 bg-white border rounded-md min-h-[60rem] r"></div>

        <InvoiceActions />
      </CardContent>
    </Card>
  );
}

export default Invoice;

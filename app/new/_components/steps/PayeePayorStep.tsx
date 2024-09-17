import { useInvoiceContext } from "@/context/InvoiceContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Field } from "@/types";

export default function PayeePayor() {
  const { register } = useInvoiceContext();

  const payorFields: Field[] = [
    { id: "payorName", label: "Payor Name" },
    { id: "payorAddress", label: "Payor Address" },
    { id: "payorZip", label: "Payor Zip" },
    { id: "payorCity", label: "Payor City" },
    { id: "payorCountry", label: "Payor Country" },
    { id: "payorEmail", label: "Payor Email" },
    { id: "payorPhone", label: "Payor Phone" },
  ];

  const payeeFields: Field[] = [
    { id: "payeeName", label: "Payee Name" },
    { id: "payeeAddress", label: "Payee Address" },
    { id: "payeeZip", label: "Payee Zip" },
    { id: "payeeCity", label: "Payee City" },
    { id: "payeeCountry", label: "Payee Country" },
    { id: "payeeEmail", label: "Payee Email" },
    { id: "payeePhone", label: "Payee Phone" },
  ];

  return (
    <Tabs defaultValue="payee">
      <TabsList>
        <TabsTrigger value="payee">Payee</TabsTrigger>
        <TabsTrigger value="payer">Payor</TabsTrigger>
      </TabsList>
      <TabsContent value="payee" className="py-2">
        <div className="gap-4 grid grid-cols-2">
          {payeeFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <Label htmlFor={field.id}>{field.label}</Label>
              <Input id={field.id} {...register(field.id)} />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="payer" className="py-2">
        <div className="gap-4 grid grid-cols-2">
          {payorFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <Label htmlFor={field.id}>{field.label}</Label>
              <Input id={field.id} {...register(field.id)} />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

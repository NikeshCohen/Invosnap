import { useInvoiceContext } from "@/context/InvoiceContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useFieldArray } from "react-hook-form";

export default function LineItemsStep() {
  const { control, register } = useInvoiceContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "lineItems",
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex space-x-2">
          <div className="flex-1">
            <Label htmlFor={`lineItems.${index}.description`}>
              Description
            </Label>
            <Input
              id={`lineItems.${index}.description`}
              {...register(`lineItems.${index}.description`)}
            />
          </div>
          <div className="w-32">
            <Label htmlFor={`lineItems.${index}.amount`}>Amount</Label>
            <Input
              id={`lineItems.${index}.amount`}
              type="number"
              step="0.01"
              {...register(`lineItems.${index}.amount`, {
                valueAsNumber: true,
              })}
            />
          </div>
          <Button
            type="button"
            variant="destructive"
            onClick={() => remove(index)}
          >
            Remove
          </Button>
        </div>
      ))}
      <Button
        type="button"
        onClick={() => append({ description: "", amount: 0 })}
      >
        Add Line Item
      </Button>
    </div>
  );
}

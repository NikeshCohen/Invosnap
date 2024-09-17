import { useInvoiceContext } from "@/context/InvoiceContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useController } from "react-hook-form";

export default function PaymentInfoStep() {
  const { register, control } = useInvoiceContext();
  const { field: paymentMethodField } = useController({
    name: "paymentMethod",
    control,
  });

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="paymentMethod">Payment Method</Label>
        <Select
          onValueChange={paymentMethodField.onChange}
          value={paymentMethodField.value}
        >
          <SelectTrigger id="paymentMethod">
            <SelectValue placeholder="Select payment method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="credit_card">Credit Card</SelectItem>
            <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
            <SelectItem value="cash">Cash</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="paymentDueDate">Payment Due Date</Label>
        <Input
          id="paymentDueDate"
          type="date"
          {...register("paymentDueDate")}
        />
      </div>
    </div>
  );
}

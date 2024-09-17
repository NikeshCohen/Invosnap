import { useInvoiceContext } from "@/context/InvoiceContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import { currencies } from "@/constants/currencies";

export default function InvoiceDetailsStep() {
  const { register } = useInvoiceContext();

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="invoiceNumber">Invoice Number</Label>
        <Input
          id="invoiceNumber"
          {...register("invoiceNumber")}
          className="lg:w-3/4"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="issueDate">Issue Date</Label>
        <IssueDate />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="dueDate">Due Date</Label>
        <DueDate />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="currency">Currency</Label>
        <Currency />
      </div>
    </div>
  );
}

function IssueDate() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "lg:w-3/4 justify-start text-left font-normal bg-card",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 w-4 h-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-auto" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

function DueDate() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "lg:w-3/4 justify-start text-left font-normal bg-card",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 w-4 h-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="flex flex-col space-y-2 p-2 w-auto"
        align="start"
      >
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger className="bg-card">
            <SelectValue placeholder="Due Date" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
            <SelectItem value="30">In a month</SelectItem>
          </SelectContent>
        </Select>

        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}

function Currency() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            `${!value && "text-muted-foreground"}`,
            "justify-between bg-card lg:w-3/4"
          )}
        >
          {value
            ? currencies.find((currency) => currency.description === value)
                ?.description
            : "Select currency..."}
          <ChevronDown className="opacity-50 ml-2 w-4 h-4 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[330px]" align="start">
        <Command className="text-muted-foreground">
          <CommandInput placeholder="Search currency..." />
          <CommandList>
            <CommandEmpty>No currency found</CommandEmpty>
            <CommandGroup>
              {currencies.map((currency) => (
                <CommandItem
                  key={currency.code}
                  value={currency.description}
                  onSelect={(currentValue: string) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === currency.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {currency.description}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

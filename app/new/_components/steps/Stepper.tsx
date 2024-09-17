"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PayeePayorStep from "./PayeePayorStep";
import InvoiceDetailsStep from "./InvoiceDetails";
import LineItemsStep from "./LineItems";
import PaymentInfoStep from "./PaymentInfoStep";
import SummaryStep from "./SummaryPage";

const tabs = [
  { value: "1", label: "Payee & Payor", component: PayeePayorStep },
  { value: "2", label: "Invoice Details", component: InvoiceDetailsStep },
  { value: "3", label: "Line Items", component: LineItemsStep },
  { value: "4", label: "Payment Info", component: PaymentInfoStep },
  { value: "5", label: "Summary", component: SummaryStep },
];

export default function Stepper() {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handlePrevious = () => {
    const currentIndex = tabs.findIndex((tab) => tab.value === activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].value);
    }
  };

  const handleNext = () => {
    const currentIndex = tabs.findIndex((tab) => tab.value === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].value);
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <div className="flex justify-between items-center mb-4">
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={handlePrevious}
          disabled={activeTab === "1"}
          className="md:hidden"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <TabsList className="md:flex hidden">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex-1 md:hidden text-center">
          {tabs.find((tab) => tab.value === activeTab)?.label}
        </div>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={handleNext}
          disabled={activeTab === "5"}
          className="md:hidden"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <tab.component />
        </TabsContent>
      ))}
    </Tabs>
  );
}

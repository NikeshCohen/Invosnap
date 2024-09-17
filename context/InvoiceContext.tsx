"use client";

import { createContext, ReactNode, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoiceSchema } from "@/schema/invoice.schema";
import * as z from "zod";

export type InvoiceData = z.infer<typeof invoiceSchema>;

type Context = UseFormReturn<InvoiceData>;

const InvoiceContext = createContext<Context | null>(null);

export function InvoiceWrapper({ children }: { children: ReactNode }) {
  const methods = useForm<InvoiceData>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      lineItems: [{ description: "", amount: 0 }],
    },
  });

  return (
    <InvoiceContext.Provider value={methods}>
      {children}
    </InvoiceContext.Provider>
  );
}

export function useInvoiceContext() {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error("useInvoiceContext must be used within an InvoiceWrapper");
  }
  return context;
}

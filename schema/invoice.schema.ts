import * as z from "zod";

export const invoiceSchema = z.object({
  payeeName: z.string().optional(),
  payeeAddress: z.string().optional(),
  payeeZip: z.string().optional(),
  payeeCity: z.string().optional(),
  payeeCountry: z.string().optional(),
  payeeEmail: z.string().optional(),
  payeePhone: z.string().optional(),
  payorName: z.string().optional(),
  payorAddress: z.string().optional(),
  payorZip: z.string().optional(),
  payorCity: z.string().optional(),
  payorCountry: z.string().optional(),
  payorEmail: z.string().optional(),
  payorPhone: z.string().optional(),
  invoiceNumber: z.string().optional(),
  issueDate: z.date().optional(),
  dueDate: z.date().optional(),
  currency: z.string().optional(),
  lineItems: z
    .array(
      z.object({
        description: z.string().optional(),
        amount: z.number().optional(),
      })
    )
    .optional(),
  paymentMethod: z.enum(["credit_card", "bank_transfer", "cash"]).optional(),
  paymentDueDate: z.string().optional(),
});

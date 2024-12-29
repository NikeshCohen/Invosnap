"use client";

import Link from "next/link";

import {
  CheckCircle,
  DownloadCloudIcon,
  Mail,
  MoreHorizontal,
  Pencil,
  Trash,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface iAppProps {
  id: string;
  status: string;
}
export function InvoiceActions({ id, status }: iAppProps) {
  const handleSendReminder = () => {};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="secondary">
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/invoices/${id}`}>
            <Pencil className="mr-2 size-4" /> Edit Invoice
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/api/invoice/${id}`} target="_blank">
            <DownloadCloudIcon className="mr-2 size-4" /> Download Invoice
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSendReminder}>
          <Mail className="mr-2 size-4" /> Reminder Email
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/invoices/${id}/delete`}>
            <Trash className="mr-2 size-4" /> Delete Invoice
          </Link>
        </DropdownMenuItem>
        {status !== "PAID" && (
          <DropdownMenuItem asChild>
            <Link href={`/dashboard/invoices/${id}/paid`}>
              <CheckCircle className="mr-2 size-4" /> Mark as Paid
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

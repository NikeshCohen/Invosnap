"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
};

export function SubmitButton({ text, variant }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-full" variant={variant}>
          <Loader2 className="mr-2 size-4 animate-spin" /> Please wait...
        </Button>
      ) : (
        <Button type="submit" className="w-full" variant={variant}>
          {text}
        </Button>
      )}
    </>
  );
}

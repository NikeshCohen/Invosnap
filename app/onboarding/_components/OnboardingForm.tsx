"use client";

import { useActionState } from "react";

import { onboardUser } from "@/actions/user.actions";
import { SubmitButton } from "@/app/login/_components/SubmitBtn";
import { onboardingSchema } from "@/utils/schemas";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function OnboardingForm() {
  const [lastResult, action] = useActionState(onboardUser, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: onboardingSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form
      className="grid gap-4"
      action={action}
      id={form.id}
      onSubmit={form.onSubmit}
      noValidate
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label>First Name</Label>
          <Input
            name={fields.firstName.name}
            key={fields.firstName.key}
            defaultValue={fields.firstName.initialValue}
            placeholder="John"
          />
          <p className="text-sm text-red-500">{fields.firstName.errors}</p>
        </div>
        <div className="grid gap-2">
          <Label>Last Name</Label>
          <Input
            name={fields.lastName.name}
            key={fields.lastName.key}
            defaultValue={fields.lastName.initialValue}
            placeholder="Doe"
          />
          <p className="text-sm text-red-500">{fields.lastName.errors}</p>
        </div>
      </div>

      <div className="grid gap-2">
        <Label>Address</Label>
        <Input
          name={fields.address.name}
          key={fields.address.key}
          defaultValue={fields.address.initialValue}
          placeholder="Chad street 123"
        />
        <p className="text-sm text-red-500">{fields.address.errors}</p>
      </div>

      <SubmitButton text="Finish onboarding" />
    </form>
  );
}

export default OnboardingForm;

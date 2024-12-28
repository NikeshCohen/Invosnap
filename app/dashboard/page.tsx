import React from "react";

import { requireUser } from "@/hooks/requireUser";
import { signOut } from "@/utils/auth";

import { Button } from "@/components/ui/button";

async function page() {
  const session = await requireUser();

  return <div>dashboard</div>;
}

export default page;

"use client";

import { useFormStatus } from "react-dom";
import Button from "./Button";

export default function SubmitButton({ children, pendingLabel, btnStyle }) {
  const { pending } = useFormStatus();

  return (
    <Button btnStyle={btnStyle} disabled={pending}>
      {pending ? pendingLabel : children}
    </Button>
  );
}

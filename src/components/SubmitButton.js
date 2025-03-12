"use client";

import { useFormStatus } from "react-dom";
import Button from "./Button";

const btnStyle =
  "bg-primary-400 px-8 py-4 text-primary-50 font-semibold hover:bg-accent-950 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300";

export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <Button btnStyle={btnStyle} disabled={pending}>
      {pending ? pendingLabel : children}
    </Button>
  );
}

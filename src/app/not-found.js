import Link from "next/link";
import { HelpCircle } from "lucide-react";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center py-20 font-body">
      <HelpCircle className="w-16 h-16 text-accent mb-6 animate-pulse" />
      <h1 className="font-head font-extrabold text-3xl text-primary mb-3">
        Page Not Found
      </h1>
      <p className="text-slate-500 max-w-xs mb-8 text-sm leading-relaxed">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Button href="/" variant="primary" size="md">
        Back to Home
      </Button>
    </div>
  );
}

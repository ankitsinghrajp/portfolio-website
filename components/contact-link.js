"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";

export const ContactLink = () => {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <Link href="#contact" className="flex items-center gap-1">
      <Mail className="h-4 w-4" />
      Contact
    </Link>
  );
};

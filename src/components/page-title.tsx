import type React from "react";
import { HandDrawnUnderline } from "@/components/hand-drawn-elements";

interface PageTitleProps {
  children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="font-display text-3xl md:text-4xl text-brown text-center relative inline-block">
      {children}
      <HandDrawnUnderline className="absolute -bottom-3 left-0 w-full h-3 text-teal-light" />
    </h1>
  );
}

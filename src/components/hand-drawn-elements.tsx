import { cn } from "@/lib/utils";

interface HandDrawnElementProps {
  className?: string;
}

export function HandDrawnUnderline({ className }: HandDrawnElementProps) {
  return (
    <svg
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      className={cn("fill-current", className)}
    >
      <path d="M0,5 C20,0 40,10 60,5 C80,0 100,5 100,5" />
    </svg>
  );
}

export function HandDrawnArrow({ className }: HandDrawnElementProps) {
  return (
    <svg viewBox="0 0 50 50" className={cn("fill-current", className)}>
      <path d="M10,25 C20,15 30,35 45,10 C40,20 45,30 50,40 C40,35 30,40 25,45 C30,30 15,30 10,25 Z" />
    </svg>
  );
}

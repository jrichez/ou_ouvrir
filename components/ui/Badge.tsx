import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-600",
        className
      )}
    >
      {children}
    </span>
  );
}
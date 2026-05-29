import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbProps = {
  currentPage: string;
  parent?: {
    label: string;
    href: string;
  };
};

export function Breadcrumb({ currentPage, parent }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-xs font-medium text-slate-600">
      <Link href="/">Accueil</Link>

      {parent ? (
        <>
          <ChevronRight size={14} />
          <Link href={parent.href}>{parent.label}</Link>
        </>
      ) : null}

      <ChevronRight size={14} />
      <span className="text-slate-950">{currentPage}</span>
    </nav>
  );
}
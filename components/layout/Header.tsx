import Link from "next/link";
import { ChevronDown, Utensils } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid h-24 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Utensils size={28} />
          </div>

          <div className="text-xl font-extrabold leading-5 text-slate-950">
            Ouvrir un
            <br />
            Restaurant
          </div>
        </Link>

        <nav className="hidden items-center justify-center gap-14 text-sm font-bold text-slate-950 md:flex">
  <Link href="/villes" className="flex items-center gap-1">
  Villes <ChevronDown size={16} />
</Link>

  <Link href="/methodologie">Méthodologie</Link>
</nav>


      </div>
    </header>
  );
}
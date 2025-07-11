import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { LogoIcon } from './logo';

export function SiteHeader() {
  return (
    <header className="py-3 px-6 bg-card border-b sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <LogoIcon />
          <h1 className="text-2xl font-bold text-foreground font-headline tracking-tight">
            Camly
          </h1>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}

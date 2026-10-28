import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-[min(1440px,calc(100%-48px))] flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Wordmark />
          <p className="mt-4 font-mono text-[11px] tracking-[0.08em] text-secondary uppercase">
            Built with precision.
          </p>
        </div>
        <div className="flex items-center gap-6 font-mono text-[11px] tracking-[0.08em] text-secondary">
          <p>© 2026</p>
          <p aria-hidden>v0.1</p>
        </div>
      </div>
    </footer>
  );
}

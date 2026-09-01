import { useEffect, useId, useRef } from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";
import type { Locale } from "@/types/locale";
import { LOCALES } from "@/constants/locales";

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18" />
    </svg>
  );
}

type LocaleSwitcherProps = {
  locale: Locale;
  onSelect: (id: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** The hero instance names the language; the nav shows the short code. */
  variant: "hero" | "nav";
  className?: string;
};

export function LocaleSwitcher({
  locale,
  onSelect,
  open,
  onOpenChange,
  variant,
  className,
}: LocaleSwitcherProps) {
  const { t } = useTranslation();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) onOpenChange(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  const isHero = variant === "hero";

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={t("common.selectLanguage")}
        onClick={() => onOpenChange(!open)}
        className={cn(
          "border-paper/30 text-paper hover:border-banana hover:text-banana flex cursor-pointer items-center gap-2 rounded-[2px] border font-mono text-[11px] tracking-[0.1em] uppercase transition-colors duration-200",
          isHero
            ? "bg-ink/35 px-[13px] py-[9px] backdrop-blur-[6px]"
            : "bg-transparent px-[11px] py-[7px]",
        )}
      >
        <GlobeIcon className={isHero ? "size-3.5" : "size-[13px]"} />
        {isHero ? t(`languageNames.${locale.id}`, locale.name) : locale.code}
        <span aria-hidden="true" className="text-[8px] opacity-70">
          ▼
        </span>
      </button>

      {open && (
        <div
          id={listId}
          role="listbox"
          aria-label={t("common.language")}
          className={cn(
            "bg-ink border-banana/35 absolute top-[calc(100%+8px)] right-0 z-10 rounded-[3px] border p-[5px] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)]",
            isHero ? "min-w-[200px]" : "min-w-[190px]",
          )}
        >
          {LOCALES.map((option) => {
            const active = option.id === locale.id;
            return (
              <button
                key={option.id}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  onSelect(option.id);
                  onOpenChange(false);
                }}
                className={cn(
                  "hover:bg-banana/14 flex w-full cursor-pointer items-center justify-between gap-3.5 rounded-[2px] border-0 text-left font-mono text-[11px] tracking-[0.08em] uppercase",
                  isHero ? "p-2.5" : "px-2.5 py-[9px]",
                  active ? "bg-banana/16 text-banana" : "text-paper/80",
                )}
              >
                <span>{t(`languageNames.${option.id}`, option.name)}</span>
                <span className="opacity-55">{option.code}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

import { MARQUEE_ITEMS } from "@/constants/marquee-items";
import { Fragment } from "react";

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="text-paper/62 flex items-center gap-11 px-[22px] py-3.5 font-mono text-[11.5px] tracking-[0.16em] whitespace-nowrap uppercase"
    >
      {MARQUEE_ITEMS.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <span aria-hidden="true" className="text-banana">
            ◆
          </span>
        </Fragment>
      ))}
    </div>
  );
}

/** Duplicated track scrolling half its own width, so the loop is seamless. */
export function CredentialsMarquee() {
  return (
    <div className="bg-ink text-paper border-banana/20 overflow-hidden border-b">
      <div className="animate-sr-marquee flex w-max motion-reduce:animate-none">
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  );
}

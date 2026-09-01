type SpecRowProps = {
  label: string
  value: string
}

/** A key/value line joined by a dotted leader, like a printed cargo manifest. */
export function SpecRow({ label, value }: SpecRowProps) {
  return (
    <div className="hover:bg-banana/7 flex items-baseline justify-between gap-2 rounded-[2px] py-[7px] font-mono text-[12.5px] transition-colors duration-150">
      <span className="text-paper/55 whitespace-nowrap">{label}</span>
      <span
        aria-hidden="true"
        className="border-paper/28 mx-1.5 -translate-y-[3px] flex-1 border-b border-dotted"
      />
      <span className="text-banana whitespace-nowrap">{value}</span>
    </div>
  )
}

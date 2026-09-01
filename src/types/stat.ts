export type Stat = {
  label: string;
  /** Present when the value counts up on reveal; otherwise `text` is static. */
  count?: { to: number; decimals?: number; prefix?: string; suffix?: string };
  text: string;
  accent?: boolean;
};

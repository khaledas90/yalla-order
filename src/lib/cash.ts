import { cache as ReactCache } from "react";
import { unstable_cache as NextCache } from "next/cache";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type callback = (...args: any[]) => Promise<any>;
export function cash<T extends callback>(
  fn: T,
  keyPort: string[],
  options: {
    tags: string[];
    revalidate?: number | false;
  }
) {
  return NextCache(ReactCache(fn), keyPort, options);
}

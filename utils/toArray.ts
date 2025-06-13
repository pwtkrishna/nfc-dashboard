// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toArray(val: any) {
  if (val == null) return [];
  return Array.isArray(val) ? val : [val];
}

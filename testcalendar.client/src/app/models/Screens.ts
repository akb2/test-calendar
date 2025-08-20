export type BreakPointName =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "middle"
  | "large"
  | "xlarge";

export type BreakPointsObject<T extends any> = { default: T } & Partial<
  Record<BreakPointName, T>
>;
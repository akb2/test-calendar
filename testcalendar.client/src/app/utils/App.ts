import type { Nullable } from "../models/App";

export function AnyToArray<T>(value: T | T[]): [T, ...T[]];

export function AnyToArray<T extends Nullable<any>>(value: T | T[]): T[];

export function AnyToArray<T>(value: T | T[]): T[] | [T, ...T[]] {
  return !!value ? (Array.isArray(value) ? value : [value]) : ([] as T[]);
}

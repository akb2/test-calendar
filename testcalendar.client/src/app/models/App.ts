import { css } from "styled-components";

export type TypeOrArray<T> = T | T[];

export type CSSChunk = ReturnType<typeof css>;

export type Nullable<T> = T | null | undefined;

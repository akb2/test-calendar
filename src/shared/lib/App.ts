import { css } from "styled-components";

export type TypeOrArray<T> = T | T[];

export type CSSChunk = ReturnType<typeof css>;
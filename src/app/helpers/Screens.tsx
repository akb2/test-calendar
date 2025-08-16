import { CSSChunk } from "#models/App";
import { BreakPointName, BreakPointsObject } from "#models/Screens";
import { css } from "styled-components";

const BreakPoints: Record<BreakPointName, number> = {
  xxsmall: 400,
  xsmall: 600,
  small: 900,
  middle: 1200,
  large: 1800,
  xlarge: 100000,
};

export const MaxResolution = (screen: BreakPointName) =>
  BreakPoints[screen] ?? 0;

export const MinResolution = (screen: BreakPointName) => {
  const breakPoint = BreakPoints[screen];

  if (breakPoint) {
    const result = Object.values(BreakPoints)
      .filter((point) => point < breakPoint)
      .reduce((point, result) => Math.max(point, result), 0);

    return result + 1;
  }

  return 1;
};

export const Adaptive = (
  minScreen: BreakPointName | "auto",
  maxScreen: BreakPointName | "auto",
  content: CSSChunk,
): CSSChunk => {
  if (minScreen !== "auto" || maxScreen !== "auto") {
    const styles = [
      minScreen !== "auto"
        ? `min-width: ${MinResolution(minScreen as BreakPointName)}px`
        : "",
      maxScreen !== "auto"
        ? `max-width: ${MaxResolution(maxScreen as BreakPointName)}px`
        : "",
    ].filter(Boolean);

    return css`
      @media (${styles.join(") and (")}) {
        ${content}
      }
    `;
  }

  return content;
};

export const AdaptiveFor =
  <T extends unknown>(...maps: BreakPointsObject<T>[]) =>
  (render: (...map: T[]) => CSSChunk): CSSChunk => {
    const screens = Object.keys(BreakPoints) as BreakPointName[];

    return css`
      ${screens.map((screen) =>
        Adaptive(
          screen,
          screen,
          render(...maps.map((value) => value[screen] ?? value.default)),
        ),
      )}
    `;
  };

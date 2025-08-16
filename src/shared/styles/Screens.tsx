import { css, Interpolation } from 'styled-components';

type BreakPointName =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'middle'
  | 'large'
  | 'xlarge';

const BreakPoints: Record<BreakPointName, number> = {
  xxsmall: 400,
  xsmall: 600,
  small: 900,
  middle: 1200,
  large: 1800,
  xlarge: 100000,
};

export type BreakPointsObject<T extends any> = { default: T } & Partial<
  Record<BreakPointName, T>
>;

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

export const Adaptive =
  (minScreen: BreakPointName | 'auto', maxScreen: BreakPointName | 'auto') =>
  (strings: TemplateStringsArray, ...expr: Interpolation<object>[]) => {
    const content = css(strings, ...expr);

    if (minScreen !== 'auto' || maxScreen !== 'auto') {
      const minResolution = MinResolution(minScreen as BreakPointName);
      const maxResolution = MaxResolution(maxScreen as BreakPointName);
      const styles = [
        minScreen !== 'auto' ? `@media (min-width: ${minResolution}px)` : '',
        maxScreen !== 'auto' ? `@media (max-width: ${maxResolution}px)` : '',
      ]
        .filter(Boolean)
        .join(' and ');

      return css`
        @media (${styles}) {
          ${content}
        }
      `;
    }

    return content;
  };

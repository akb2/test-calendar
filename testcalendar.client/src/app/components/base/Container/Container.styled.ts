import styled, { css } from "styled-components";
import { ContainerPaddingX, containersPaddingsY } from "../../../data/Theme";
import { AdaptiveFor } from "../../../utils/Screens";
import { widths } from "./Container.const";
import type { ContainerProps } from "./Container.types";

const PaddingStyles = (paddingY: number, noPadding = false) =>
  !noPadding &&
  css`
    padding-top: ${paddingY}px;
    padding-bottom: ${paddingY}px;
  `;

const ContainerRootAdaptive = ({ $noPadding }: ContainerProps) =>
  AdaptiveFor(
    widths,
    containersPaddingsY,
  )(
    (width, paddingY) => css`
      width: ${width}px;

      ${PaddingStyles(paddingY, $noPadding)}
    `,
  );

export const ContainerRoot = styled.div<ContainerProps>`
  ${ContainerRootAdaptive}

  ${({ $noPaddingLeft, $noPaddingRight }) => css`
    padding-left: ${$noPaddingLeft ? 0 : ContainerPaddingX};
    padding-right: ${$noPaddingRight ? 0 : ContainerPaddingX};
  `}

  max-width: 100%;
  margin: 0 auto;
`;

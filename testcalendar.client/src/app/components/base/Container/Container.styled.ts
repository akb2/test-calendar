import styled, { css } from "styled-components";
import { paddingsY, widths } from "./Container.const";
import { AdaptiveFor } from "../../../utils/Screens";
import { ContainerPaddingX } from "../../../data/layout";
import type { ContainerProps } from "./Container.types";

const PaddingStyles = (paddingY: number, noPadding = false) =>
  noPadding
    ? ""
    : css`
        padding-top: ${paddingY}px;
        padding-bottom: ${paddingY}px;
      `;

const ContainerRootAdaptive = ({
  $noPadding,
  $noPaddingLeft,
}: Pick<ContainerProps, "$noPadding" | "$noPaddingLeft">) =>
  AdaptiveFor(
    widths,
    paddingsY,
  )(
    (width, paddingY) => css`
      width: ${width}px;
      padding-left: ${$noPaddingLeft ? 0 : ContainerPaddingX};
      padding-right: ${ContainerPaddingX};

      ${PaddingStyles(paddingY, $noPadding)}
    `,
  );

export const ContainerRoot = styled.div<
  Pick<ContainerProps, "$noPadding" | "$noPaddingLeft">
>`
  ${ContainerRootAdaptive}

  max-width: 100%;
  margin: 0 auto;
`;

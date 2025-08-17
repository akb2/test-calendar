import { AdaptiveFor } from "#utils/Screens";
import styled, { css } from "styled-components";
import { paddingsY, widths } from "./Container.const";
import { ContainerProps } from "./Container.types";

const PaddingStyles = (paddingY: number, noPadding = false) => noPadding
  ? ""
  : css`
    padding-top: ${paddingY}px;
    padding-bottom: ${paddingY}px;
  `;

const ContainerRootAdaptive = ({ $noPadding }: Pick<ContainerProps, "$noPadding">) => AdaptiveFor(widths, paddingsY)(
  (width, paddingY) => css`
    width: ${width}px;
    padding-left: 15px;
    padding-right: 15px;

    ${PaddingStyles(paddingY, $noPadding)}
  `,
);

export const ContainerRoot = styled.div<Pick<ContainerProps, "$noPadding">>`
  ${ContainerRootAdaptive}

  max-width: 100%;
  margin: 0 auto;
`;
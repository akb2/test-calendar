import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
`;

export const Container = ({ children }: PropsWithChildren) => (
  <Root>{children}</Root>
);

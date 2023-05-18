import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  padding: ${p => p.theme.space[3]}px;
`;

export const Header = styled.header`
  padding: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
`;

export const Link = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    color: ${p => p.theme.colors.accent};
  }
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;

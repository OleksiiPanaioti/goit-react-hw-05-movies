import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  margin: ${p => p.theme.space[0]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;

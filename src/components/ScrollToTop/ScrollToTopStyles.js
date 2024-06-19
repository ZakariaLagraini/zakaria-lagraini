// ScrollToTopStyles.js

import styled from 'styled-components';

export const ScrollToTopWrapper = styled.div`
  position: fixed;
  bottom: 3rem; /* Move this higher if needed */
  right: 5rem;  /* Adjust to ensure it's not behind the chatbot */

  @media ${(props) => props.theme.breakpoints.sm} {
    bottom: 1.5rem; /* Adjust to ensure it's visible on smaller screens */
    right: 3.5rem; /* Adjust to ensure it's visible on smaller screens */
  }
`;

export const ScrollToTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: ${props => props.theme.colors.bodyBgColor};
  cursor: pointer;
  transition: background-color 300ms ease;
  
  &:hover {
    background-color: #fff;
  }
`;

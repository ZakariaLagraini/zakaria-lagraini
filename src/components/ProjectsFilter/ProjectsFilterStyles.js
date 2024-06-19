import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;

  @media ${(props) => props.theme.breakpoints.xs} {
    gap: 1rem;
  }
`;

export const FilterHeading = styled.h3`
  margin: 2rem 0;
  text-align: left;
  color: #1f2937; /* Text color */
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 200px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #1d4ed8; /* Blue 700 */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #1e40af; /* Blue 800 */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); /* Blue 300 shadow */
  }

  .icon {
    margin-right: 8px;
  }
`;

export const DropdownIcon = styled.svg`
  width: 10px;
  height: 10px;
  fill: currentColor;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

export const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: 400px; /* Set a reasonable maximum height */
  overflow-y: auto; /* Enable scrolling if content overflows */

  @media ${(props) => props.theme.breakpoints.xs} {
    max-height: 300px; /* Adjust for smaller screens */
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: #1f2937; /* Gray 800 */
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f3f4f6; /* Gray 100 */
    color: #1e40af; /* Blue 800 */
  }

  .icon {
    margin-right: 8px;
  }
`;

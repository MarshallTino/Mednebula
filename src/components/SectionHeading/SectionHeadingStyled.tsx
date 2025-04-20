import styled from "styled-components";

interface SectionHeadingProps {
  $align?: "left" | "center" | "right";
  $hasUnderline?: boolean;
}

export const SectionHeadingStyled = styled.div<SectionHeadingProps>`
  margin-bottom: 40px; // Consistent bottom spacing for all section headings
  width: 100%;
  text-align: ${props => props.$align || "center"};
  
  h2 {
    font-size: 2rem;
    color: ${props => props.theme.colors.gray800};
    margin-bottom: ${props => props.$hasUnderline ? "15px" : "0"};
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 600;
    line-height: 1.3;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  
  ${props => props.$hasUnderline && `
    position: relative;
    
    &::after {
      content: "";
      display: block;
      width: ${props.$align === "center" ? "120px" : "80px"};
      height: 3px;
      background: linear-gradient(to right, ${props.theme.colors.base}, ${props.theme.colors.accent});
      margin: ${props.$align === "center" ? "15px auto 0" : "15px 0 0"};
      border-radius: 2px;
    }
  `}
  
  p {
    color: ${props => props.theme.colors.gray600};
    font-size: 1.1rem;
    margin-top: 15px;
    max-width: 800px;
    line-height: 1.6;
    margin-left: ${props => props.$align === "center" ? "auto" : "0"};
    margin-right: ${props => props.$align === "center" ? "auto" : "0"};
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

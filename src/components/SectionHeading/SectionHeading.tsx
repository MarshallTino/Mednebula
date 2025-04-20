import React from 'react';
import { SectionHeadingStyled } from './SectionHeadingStyled';

interface SectionHeadingProps {
  title: string;
  subtitle?: string; // Make subtitle optional
  align?: 'left' | 'center' | 'right'; // Use align prop consistent with styled component
  hasUnderline?: boolean; // Use hasUnderline prop consistent with styled component
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center', hasUnderline = true }) => {
  return (
    // Pass correct props ($align, $hasUnderline)
    <SectionHeadingStyled $align={align} $hasUnderline={hasUnderline}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </SectionHeadingStyled>
  );
};

export default SectionHeading;

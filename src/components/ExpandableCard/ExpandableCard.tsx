// src/components/ExpandableCard/ExpandableCard.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  id?: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ 
  title, 
  children, 
  defaultExpanded = false, 
  isExpanded: externalIsExpanded, 
  onToggle,
  id 
}) => {
  const [internalIsExpanded, setInternalIsExpanded] = useState(defaultExpanded);
  
  // Use either controlled or uncontrolled state
  const isExpanded = externalIsExpanded !== undefined ? externalIsExpanded : internalIsExpanded;

  const toggleExpand = () => {
    if (onToggle) {
      onToggle(); // Call external handler if provided
    } else {
      setInternalIsExpanded(!internalIsExpanded); // Use internal state otherwise
    }
  };

  return (
    <CardContainer id={id} $isExpanded={isExpanded}>
      <CardHeader onClick={toggleExpand} $isExpanded={isExpanded}>
        <CardTitle>{title}</CardTitle>
        <ExpandButton>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </ExpandButton>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          {children}
        </CardContent>
      )}
    </CardContainer>
  );
};

// Styled Components
interface CardHeaderProps {
  $isExpanded: boolean;
}

interface CardContainerProps {
  $isExpanded: boolean;
}

const CardContainer = styled.div<CardContainerProps>`
  background-color: ${props => props.theme.colors.mainLight};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  overflow: hidden;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.gray200};
  height: ${props => props.$isExpanded ? 'fit-content' : 'auto'};
  transition: box-shadow 0.3s ease, height 0.3s ease;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const CardHeader = styled.div<CardHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  background: ${props => props.$isExpanded 
    ? `linear-gradient(to right, ${props.theme.colors.gray300}, ${props.theme.colors.gray200})` 
    : `linear-gradient(to right, ${props.theme.colors.gray100}, ${props.theme.colors.mainLight})`};
  transition: ${props => props.theme.animations.transition};
  border-bottom: ${props => props.$isExpanded ? `1px solid ${props.theme.colors.gray300}` : 'none'};
  
  &:hover {
    background: linear-gradient(to right, ${props => props.theme.colors.gray200}, ${props => props.theme.colors.gray100});
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.gray800};
  margin: 0;
  font-family: ${props => props.theme.fonts.primary};
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 1.5rem;
    background-color: ${props => props.theme.colors.base};
    margin-right: 12px;
    border-radius: 2px;
  }
`;

const ExpandButton = styled.div`
  color: ${props => props.theme.colors.base};
  font-size: 1.2rem;
  transition: transform 0.3s ease, color 0.3s ease;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.03);
  
  &:hover {
    transform: scale(1.1);
    color: ${props => props.theme.colors.base};
    background-color: rgba(0, 0, 0, 0.07);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.mainLight};
  
  ul {
    padding-left: 5px;
    margin-bottom: 20px;
    list-style-type: none;
  }
  
  li {
    margin: 12px 0;
    color: ${props => props.theme.colors.gray700};
    line-height: 1.5;
    padding-left: 25px;
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      background-color: ${props => props.theme.colors.base};
      border-radius: 50%;
    }
  }
`;

export default ExpandableCard;

import styled from "styled-components";

interface BannerStyledProps {
    backgroundImage: string;
    buttonPosition: 'left' | 'right';
}

const BannerStyled = styled.div<BannerStyledProps>`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: 
    linear-gradient(#0071BC, #0071BC80, #0071BCC4, #0071BC),
    url(${(props) => props.backgroundImage});
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-direction: ${props => props.buttonPosition === 'left' ? 'row-reverse' : 'row'};
  padding-left: 20%;
  padding-right: 20%;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    //height: auto;
    padding: 20px;

  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      margin-left: ${props => props.buttonPosition === 'left' ? 'auto' : '0'};
      margin-right: ${props => props.buttonPosition === 'right' ? 'auto' : '0'};
    }
  }

  .banner__title {
    font-family: ${(props) => props.theme.fonts.primary};
    @media (min-width: 768px) {
      margin-left: ${props => props.buttonPosition === 'right' ? 'auto' : '0'};
      margin-right: ${props => props.buttonPosition === 'left' ? 'auto' : '0'};
    }
    max-width: 200px;
    font-size: 30px;
    color: #fff;
  }
`;
export default BannerStyled;


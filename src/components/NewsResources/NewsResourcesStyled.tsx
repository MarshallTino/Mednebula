import styled from "styled-components";

const NewsResourcesStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.gray100};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin: 30px 0;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  .news-content {
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media (min-width: 768px) {
      padding: 40px;
    }
  }
  
  .news-image {
    flex: 1;
    min-height: 350px;
    background-image: url('/news-resources-image.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    transition: transform 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3));
    }
    
    @media (max-width: 767px) {
      min-height: 280px;
    }
  }
  
  .news-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.mainDark};
    margin-bottom: 20px;
    text-align: left;
  }
  
  .news-description {
    font-size: 1rem;
    line-height: 1.6;
    color: ${props => props.theme.colors.gray700};
    margin-bottom: 20px;
    text-align: left;
  }
`;

export default NewsResourcesStyled;

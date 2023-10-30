import styled from 'styled-components';

export const FooterContainer = styled.footer`
    
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 65px;
`;

export const LogoContainer = styled.div`
    flex: 1;
    .logo__text {
        color: ${(props) => props.theme.colors.base};
    }
`;

export const LinksContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        margin: 0 10px;
        color: ${(props) => props.theme.colors.mainDark};
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
    }
`;

export const SocialContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
        margin-left: 10px;
        color: ${(props) => props.theme.colors.mainDark};
        font-size: 30px;
    }
`;

export const Copyright = styled.div`
    background: linear-gradient(${(props) => props.theme.colors.base}, #00558D);
    color: ${(props) => props.theme.colors.mainLight};
    font-size: 12px;
    text-align: center;
    padding: 20px;
`;
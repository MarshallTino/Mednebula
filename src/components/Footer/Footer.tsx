import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { FooterContainer,  ContentContainer, LogoContainer, LinksContainer, SocialContainer, Copyright }
    from './FooterStyled';

const Footer = (): JSX.Element => {
    return (
        <FooterContainer>
            <ContentContainer>
                <LogoContainer>
                    <h1 className="logo__text">MedNebula</h1>
                </LogoContainer>
                <LinksContainer>
                    <a href="/contacto">Contacto</a>
                    <a href="/politica-de-privacidad">Política de privacidad</a>
                </LinksContainer>
                <SocialContainer>
                    <a href="https://www.instagram.com" aria-label='Instagram'><FaInstagram/></a>
                    <a href="https://www.youtube.com" aria-label='Youtube'><TfiYoutube/></a>
                    <a href="https://www.tiktok.com" aria-label='TikTok'><FaTiktok/></a>
                </SocialContainer>
            </ContentContainer>
            <Copyright>
                © 2023 Mednebula. Todos los derechos reservados.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
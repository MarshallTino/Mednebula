import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { FooterContainer, ContentContainer, LogoContainer, LinksContainer, SocialContainer, Copyright } from './FooterStyled';


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
              
            </ContentContainer>
            <Copyright>
                © 2025 Mednebula. Todos los derechos reservados.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;

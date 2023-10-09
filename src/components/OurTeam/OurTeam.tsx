import OurTeamStyled from "./OurTeamStyled";

export const OurTeam = () => {
    return (
        <OurTeamStyled className="ourteam">
            <div className="ourteam_title">
                <h1>Nuestro Equipo</h1>
            </div>
            <div className="ourteam_container">
                <div className="ourteam_card">
                    <img src="https://alexander99.com/img/image.jpg" alt="Foto de perfil de Nombre Apellido" />
                    <h2>Nombre Apellido</h2>
                    <h3>Cargo</h3>
                </div>
                <div className="ourteam_card">
                    <img src="https://alexander99.com/img/image.jpg" alt="Foto de perfil de Nombre Apellido" />
                    <h2>Nombre Apellido</h2>
                    <h3>Cargo</h3>
                </div>
                <div className="ourteam_card">
                    <img src="https://alexander99.com/img/image.jpg" alt="Foto de perfil de Nombre Apellido" />
                    <h2>Nombre Apellido</h2>
                    <h3>Cargo</h3>
                </div>
                <div className="ourteam_card">
                    <img src="https://alexander99.com/img/image.jpg" alt="Foto de perfil de Nombre Apellido" />
                    <h2>Nombre Apellido</h2>
                    <h3>Cargo</h3>
                </div>
                <div className="ourteam_card">
                    <img src="https://alexander99.com/img/image.jpg" alt="Foto de perfil de Nombre Apellido" />
                    <h2>Nombre Apellido</h2>
                    <h3>Cargo</h3>
                </div>
                <div className="ourteam_quote">
                <p>“Ut faucibus, tellus a imperdiet fringilla, lectus elit maximus augue, id convallis quam libero non lacus. Suspendisse porttitor ipsum tristique elit mollis interdum. Phasellus ex justo, suscipit sit amet pretium ut, cursus a tortor. Maecenas venenatis eleifend consequat..”</p>
                </div>
            </div>
        </OurTeamStyled>
    );
};
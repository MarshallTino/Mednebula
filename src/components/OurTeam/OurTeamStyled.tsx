import { styled } from "styled-components";
const OurTeamStyled = styled.div`

    max-width: 1384px;
    max-height: 402px;
    margin-left: auto;
    margin-right: auto;

    .ourteam_title {
        text-align: center;
        margin-top : 2em;
    }

    .ourteam_title h1 {
        color: #00253D;
        font-family: Oxanium;
        font-size: 50px;
        font-style: normal;
        font-weight: 233;
        line-height: 37.982%; /* 56.973px */
    }

    .ourteam_container {
        margin-top : 0.5em;
        margin-left : auto;
        margin-right : auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2px;
    }

    .ourteam_card {
        margin: 10px;
        padding: 10px;
        text-align: center;
    }

    .ourteam_card img {
        width: 160px;
        height: 193px;
    }
    .ourteam_card h2 {
        color: #002F54;
        text-align: center;
        font-family: Oxanium;
        font-size: 18px;
        font-style: normal;
        font-weight: 133;
        line-height: normal;
    }
    .ourteam_card h3 {
        color: #009245;
        font-family: Oxanium;
        font-size: 12px;
        font-style: normal;
        font-weight: 133px;
        line-height: normal;
    }

    .ourteam_quote {
        margin: 10px;
        padding: 10px;
        color: #002F54;
        text-align: center;
        font-family: Oxanium;
        font-size: 12px;
        font-style: normal;
        font-weight: 133;
        line-height: normal;
    }

`;
export default OurTeamStyled;
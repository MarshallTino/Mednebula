import Button from "../Button/Button";
import { StyledLink } from "../Button/ButtonStyled";
import LandingStyled from "./LandingStyled";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <LandingStyled className="landingpage">
      <div className="landingpage__title">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="597.000000pt"
          height="490.000000pt"
          viewBox="0 0 597.000000 490.000000"
          preserveAspectRatio="xMidYMid meet"
          className="title__svg"
        >
          <g
            transform="translate(0.000000,490.000000) scale(0.100000,-0.100000)"
            fill="#ffffff"
            stroke="none"
          >
            <path
              d="M2760 4874 c-217 -57 -399 -241 -455 -459 -8 -32 -15 -102 -15 -155
0 -183 56 -317 185 -446 65 -65 98 -90 168 -124 58 -27 87 -47 87 -58 0 -10
14 -150 30 -312 35 -346 34 -320 15 -320 -32 0 -140 -64 -192 -112 -29 -28
-65 -70 -80 -94 -26 -41 -31 -44 -73 -44 -25 0 -272 14 -550 30 -278 16 -512
30 -520 30 -11 0 -20 24 -31 85 -23 117 -76 219 -161 310 -130 139 -265 203
-449 212 -133 7 -227 -12 -342 -70 -116 -58 -228 -170 -286 -287 -95 -194 -95
-406 0 -599 59 -120 171 -232 289 -290 125 -60 191 -74 330 -69 90 4 131 10
188 31 180 63 328 202 397 373 19 48 29 60 49 62 25 3 860 -42 1003 -54 l71
-6 7 -51 c10 -67 40 -153 70 -198 l24 -37 -239 -279 -240 -280 -72 25 c-100
35 -251 36 -353 5 -197 -62 -357 -231 -405 -428 -16 -69 -14 -218 5 -289 53
-202 219 -367 425 -421 73 -19 217 -19 294 1 286 74 476 355 436 647 -14 101
-41 171 -95 252 l-43 64 235 274 234 273 67 -23 c155 -52 359 -15 476 87 l35
31 528 -372 c290 -204 531 -374 535 -378 3 -3 0 -35 -8 -71 -29 -137 -9 -282
58 -420 58 -120 178 -240 298 -298 194 -94 394 -94 590 0 68 33 101 57 171
127 70 71 94 102 127 171 53 112 66 173 66 300 0 188 -60 329 -198 465 -136
135 -274 190 -471 188 -180 -1 -312 -54 -444 -178 -38 -36 -71 -65 -75 -65 -3
0 -240 165 -527 367 l-521 366 8 31 c4 17 8 78 9 134 l1 104 434 193 434 194
33 -30 c72 -63 198 -109 298 -109 171 0 344 110 415 262 108 232 14 501 -214
614 -64 31 -87 37 -164 42 -105 6 -173 -8 -255 -51 -163 -85 -258 -271 -237
-462 6 -51 4 -58 -14 -65 -12 -4 -203 -89 -425 -189 -223 -100 -409 -181 -414
-181 -6 0 -32 20 -58 45 -48 45 -177 115 -211 115 -10 0 -18 4 -18 8 0 4 -13
131 -30 282 -37 336 -37 330 -7 330 43 0 142 30 212 65 128 63 221 157 285
290 21 44 43 104 49 133 16 76 14 228 -4 297 -56 221 -239 404 -460 460 -75
19 -241 19 -315 -1z"
            />
          </g>
        </svg>
        <h1 className="title__text">MedNebula</h1>
      </div>
      <span className="landingpage__texts-container">
        <h2 className="landingpage__subtitle">
          CONECTARSE PARA TRATAR DISCAPACIDADES
        </h2>
        <h3 className="landingpage__lema">
          Deseamos darte el apoyo que necesitas cuando lo necesitas
        </h3>
      </span>
      <div className="landingpage__button-container">
        <Button
          className="landingpage__button"
          text="Accede a nuestro foro"
          disabled={false}
          action={() => navigate("/foro")}
        />
        <StyledLink
          to="solutionListSection"
          smooth={true}
          duration={500}
          className="landingpage__button"
        >
          Acceda a nuestra plataforma
        </StyledLink>
      </div>
    </LandingStyled>
  );
};

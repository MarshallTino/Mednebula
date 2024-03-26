import RelevantInfoStyled from "./RelevantInfoStyled";

const RelevantInfo = (): JSX.Element => {
  return (
    <RelevantInfoStyled>
      <div className="info__container">
        <div className="info__block">
          <h1>Guiar a las familias</h1>
          <div className="info__text">
            Mednebula nace con el objetivo de ser un centro de información
            especializado, ofrecer apoyo y <b>seguimiento a largo plazo</b>, a
            familias y pacientes con <b>movilidad reducida</b>.
          </div>
          <div className="info__green">2.4 millones</div>
          <div className="info__text"> de Casos en ESPAÑA</div>
        </div>
        <div className="info__block border__left">
          <video
            className="info__video"
            controls
            autoPlay={true}
            muted={true}
            loop={true}
            src="https://cdn.mednebula.com/static/landing/GHlNJCEyymLGYaOvghoC0OZUEmxbiro6foA5TbNAQIKRtwMXM4LIPeanUv8c9AL1/RuPkiBkhvh1ST6yEE3XkQjshEE2HxKCS8TN2esvB7GYAGJU8DLTgrOJ1hPaS4jfS.mp4"
          />
          <div className="info__subtext">
            “El fundador de Mednebula, nació con una parálisis cerebral
            espástica”
          </div>
        </div>
      </div>
    </RelevantInfoStyled>
  );
};

export default RelevantInfo;

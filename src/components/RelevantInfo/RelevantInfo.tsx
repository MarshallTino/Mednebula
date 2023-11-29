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

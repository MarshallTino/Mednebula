import { Landing } from "../components/Landing/Landing";
import ServiceList from "../components/ServiceList/ServiceList";

const LandingPage = (): JSX.Element => {
  return (
    <>
      <Landing />
      <ServiceList />
    </>
  );
};

export default LandingPage;

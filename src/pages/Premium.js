import { Fragment } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";

function Premium() {
  return (
    <>
      <Header premium={true} />
      <Banner bannerPremium={true}>
        <h1>Aproveite 1 mês grátis de Premium</h1>
        <p>Depois, apenas R$ 16,90/mês. Cancele quando quiser.</p>
        <button>Ver planos</button>
      </Banner>
    </>
  );
}

export default Premium;

import Header from "../components/Header";
import Banner from "../components/Banner";

function Home() {
  return (
    <div>
      <Header premium={false} />
      <Banner bannerPremium={false}>
        <h1>Escutar muda tudo</h1>
        <h4>
          Milhões de músicas e podcasts para explorar. E nem precisa de cartão
          de crédito.
        </h4>
        <button>Obtenha o spotify free</button>
      </Banner>
    </div>
  );
}

export default Home;

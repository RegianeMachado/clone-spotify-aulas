import "./style.css";

function Banner(props) {
  return (
    <section className={props.bannerPremium ? "banner-premium" : ""}>
      {props.children}
    </section>
  );
}

export default Banner;

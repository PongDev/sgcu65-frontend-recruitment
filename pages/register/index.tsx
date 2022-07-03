import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../../components/navbar";
import Popup from "../../components/popup";
import RegisterForm from "../../components/register/register_form";
import SocialLogo from "../../components/register/social_logo";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ISD SGCU 65 Frontend Recuitment</title>
        <meta name="description" content="Built By NextJS" />
        <link rel="icon" href="/assets/sgcu-logo.svg" />
      </Head>

      <div>
        <NavBar />
        <picture className="kite">
          <source srcSet="/assets/kite.png" type="png" />
          <img src="/assets/kite.png" alt="Kite" />
        </picture>
        <div className="wrap-container">
          <RegisterForm />
          <SocialLogo />
        </div>
      </div>
      <Popup />
    </div>
  );
};

export default Home;

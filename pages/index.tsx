import type { NextPage } from "next";
import Head from "next/head";
import HeaderContainer from "../components/name-list/header-container";
import NameListContainer from "../components/name-list/name-list-container";
import NavBar from "../components/navbar";
import Popup from "../components/popup";

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
        <div>
          <HeaderContainer />
          <NameListContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const InitArea = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;

  p {
    font-family: "Caveat", cursive;
    font-size: 3em;
    margin-bottom: 20px;
    color: #555;
    text-align: center;
    line-height: 1em;
    a {
      text-decoration: underline;
      color: #3d5c91;
    }
    &.visit-link {
      margin-top: 10px;
      font-size: 2em;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AMG Tech</title>
        <meta name="description" content="Website for AMG Tech" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <InitArea>
        <h1>
          <Image
            priority
            src="/images/logo/logo-amgtech.svg"
            height={300}
            width={500}
            alt="Logo"
            className="logo-main"
          />
        </h1>
        <p>Página em construção</p>
        <p className="visit-link">
          Visite meu perfil no{" "}
          <a href="https://www.linkedin.com/in/adrianomaringolo/">Linkedin</a>
        </p>
      </InitArea>

      <footer></footer>
    </>
  );
};

export default Home;

import React from "react";
import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritosContext } from "contextos/Favoritos";

export default function Favoritos() {
  const { favorito } = useFavoritosContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

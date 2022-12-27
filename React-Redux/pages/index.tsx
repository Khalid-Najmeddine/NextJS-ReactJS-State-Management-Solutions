/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getStore, {getPokemon,selectFilteredPokemon,selectSearch,setSearch} from "../src/reactReduxStore";

import styles from "../styles/Home.module.css";

function Home() {
  const dispatch = useDispatch();

  const pokemon = useSelector(selectFilteredPokemon);
  const search = useSelector(selectSearch);

  return (
    <div className={styles.main}>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => {dispatch(setSearch(event.target.value))}}
          className={styles.search}
        />
      </div>
      <div className={styles.container}>
        {pokemon.slice(0, 20).map((mapPokemon:any) => (
          <div key={mapPokemon.id} className={styles.image}>
            <img
              alt={mapPokemon.name}
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${mapPokemon.image}`}
            />
            <h2>{mapPokemon.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const store = getStore();
  await store.dispatch(getPokemon());
  return {
    props: {
      initialState: store.getState(),
    },
  };
}

export default Home;
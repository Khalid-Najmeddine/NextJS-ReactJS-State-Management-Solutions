import React, {createContext, useContext} from "react"

interface Pokemon {
  id: number
  name: string
  image: string
}

// interface PokemonProvider {
//   pokemon: Pokemon[]
//   children: string
// }

export async function getServerSideProps() {
  const response = await fetch (
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  )
  return {
    props: {
      pokemon: await response.json()
    }
  }
}

const usePokemonController = (pokemon: Pokemon[]) => {
  const [filter, setFilter] = React.useState("")
  const filteredPokemon = React.useMemo(() => 
    pokemon.filter((filterPokemon) => 
      filterPokemon.name.toLowerCase().includes(filter.toLowerCase())
    ), [filter, pokemon]
  )
  return {
    filter, 
    setFilter,
    pokemon: filteredPokemon,
  }
}

const PokemonContext = createContext<ReturnType<typeof usePokemonController>>({
  filter: "",
  setFilter: () => {},
  pokemon: []
})

// export const PokemonProvider = ({pokemon, children}: PokemonProvider) => (
export const PokemonProvider = ({pokemon, children}: any) => (
  <PokemonContext.Provider value={usePokemonController(pokemon)}>
    {children}
  </PokemonContext.Provider>
)

export const usePokemon = () => useContext(PokemonContext)
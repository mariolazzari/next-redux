import { store } from "@/store";

import PokemonTable from "./PokemonTable";

function SSRPokemonTable() {
  return (
    <>
      <PokemonTable pokemons={store.getState().search.startupPokemon} />
    </>
  );
}

export default SSRPokemonTable;

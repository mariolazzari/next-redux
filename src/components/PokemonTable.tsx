import { Pokemon } from "@/types";

type PokemonTableProps = {
  pokemons: Pokemon[];
};

const PokemonTable = ({ pokemons }: PokemonTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map(pokemon => (
          <tr key={pokemon.name}>
            <td>{pokemon.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;

import { Pokemon } from "@/types";
import PokemonTable from "@/components/PokemonTable";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/search?name=mar");
  if (!res.ok) {
    return console.error(res.statusText);
  }
  const data: Pokemon[] = await res.json();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <PokemonTable pokemons={data} />
    </main>
  );
}

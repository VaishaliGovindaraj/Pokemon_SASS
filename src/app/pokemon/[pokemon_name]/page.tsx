'use client'

import { useRouter } from "next/navigation";
import DisplayPokemon from "@/components/DisplayPokemon";
import { PokemonType } from "@/utils/types";
import { JSX, useEffect, useState } from "react";

// Make sure you're using the correct type for PageProps
interface PageProps {
  params: {
    pokemon_name: string;
  };
}

export default function PokemonDetail({ params }: PageProps): JSX.Element {
  const { pokemon_name } = params;
  const router = useRouter();

  const [caughtPokemon, setCaughtPokemon] = useState<PokemonType | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const API_URL: string = "https://pokeapi.co/api/v2";
        const response = await fetch(`${API_URL}/pokemon/${pokemon_name}/`);
        const data = await response.json();

        const pokemonData: PokemonType = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map((item: { type: { name: string } }) => item.type.name),
        };

        setCaughtPokemon(pokemonData);
      } catch (error) {
        console.log(`Something went wrong: ${error}`);
      }
    };

    fetchPokemon();
  }, [pokemon_name]);

  const handleClick = () => {
    setCaughtPokemon(null);
    router.push('/types');
  };

  return (
    <div className="pokemon_container">
      {caughtPokemon && <DisplayPokemon {...caughtPokemon} />}
      <button onClick={handleClick} className="pokemon_button">Close</button>
    </div>
  );
}

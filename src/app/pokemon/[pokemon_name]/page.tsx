
'use client'
// import Types from "@/app/types/page";
import { use } from "react";
import { useRouter } from "next/navigation";
import DisplayPokemon from "@/components/DisplayPokemon";
import { PokemonType } from "@/utils/types";
import { useEffect, useState } from "react";

// interface PageProps {
//   params: {
//     pokemon_name: string;
//   };
// }

type PageProps = Promise<{pokemon_name: string;}>;//1st way , assigning params to be PageProps

// const PokemonDetail =  ({params} : PageProps) => {

export default function PokemonDetail ({params} : {params :PageProps}){ //2nd way: declaring Promse type directly here
    const {pokemon_name} =  use(params);
    const router = useRouter();

    const [caughtPokemon, setCaughtPokemon] = useState<PokemonType | null>(null)
    // const [TypePage,setTypePage] = useState<boolean>(false);

    const fetchPokemon = async (): Promise<void> => {
        try {
            const API_URL: string = "https://pokeapi.co/api/v2"
            const response = await fetch(`${API_URL}/pokemon/${pokemon_name}/`)
            const data = await response.json();

            const pokemonData: PokemonType = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                types: data.types.map((item: { type: { name: string; }; }) => item.type.name)
            }

            setCaughtPokemon(pokemonData)


        } catch (error) {
            console.log(`Something went wrong: ${error}`)
        }
    }

    const handleClick = () => {
        setCaughtPokemon(null);
         router.push('/types');
        // setTypePage(true);
    }

    useEffect( () => {
        fetchPokemon();
    },[])
    
    return (
        <div className="pokemon_container">
            {caughtPokemon && <DisplayPokemon {...caughtPokemon}/>}
            { <button onClick={handleClick} className="pokemon_button"> Close</button>  }
            
        </div>
    )
}


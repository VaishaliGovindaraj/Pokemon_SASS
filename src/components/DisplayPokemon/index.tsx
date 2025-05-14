import { PokemonType } from "@/utils/types"
import Image from "next/image"

const DisplayPokemon = ({id, name, image, types}:PokemonType) => {
    return(
        <div className="pokemon_content">
            <div className="pokemon_content--name">{name}</div>
            <div className="pokemon_content--id">ID : {id}</div>
            <div className="pokemon_content--image">
                <Image src={image} alt={name} height={300} width={300} />
            </div>
            <div className="pokemon_content--types">
                {types.map((item:string,index:number) => <span className={`pokemon__content--${item}`} key={index}>{item}</span>)}
            </div>
        </div>
    )
}

export default DisplayPokemon;
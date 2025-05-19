import '../types.scss';

interface PokemonType {
    pokemon: {
        name: string,
        url: string
    }
}
let data: PokemonType[];
let API_ENDPOINT: string;
const TypePage = async ({ params }: { params: { type: string } }) => {
    const { type } = await params;

    try {
        API_ENDPOINT = "https://pokeapi.co/api/v2/"
        const response = await fetch(`${API_ENDPOINT}/type/${type}`);
        const jsonData = await response.json();
        
        data = jsonData.pokemon;
        console.log(data);

    } catch (error) {
        console.log(error);
    }

    return (
        <div >
        <h2> {type}</h2>
        <div className="pokemon__names_div">
        {data.map((item,index) =>  
        <div key={index} className={`pokemon__names_${type}`}>
            <a href={`/pokemon/${item.pokemon.name}/`} >{item.pokemon.name}</a>
        </div >)}
        </div>
        </div >
    )
}

export default TypePage;
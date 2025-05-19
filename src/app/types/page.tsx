
let allTypes: string[];
import  './types.scss';

const Types = () => {

    const fetchTypes = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/type/");
            const data = await response.json();
            console.log(data);
            allTypes = data.results.map((item:{name: any;}) => item.name);
            console.log(allTypes);
        } catch (error) {
            console.log(error);
        }
    }    
    fetchTypes();

    return (
        <div className="pokemon__types">
            {allTypes && allTypes.filter((item,index) => index < 18).map((item:string ,index:number) => <a href={`/types/${item}`} key ={index} className={`pokemon__content--${item}`}>{item}</a>)}
        </div>
    )
}

export default Types;
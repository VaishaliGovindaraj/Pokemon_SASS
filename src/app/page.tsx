import HomeGrid from "@/components/Home_grid";
import { HomeGridProps } from "@/utils/types";

const pokemonGrid: HomeGridProps[] = [
  { title: "meowth", image: "/imageCheck.jpg", bgColor: "minsk", position: "reverse" },
  { title: "mew", image: "/imageCheck.jpg", bgColor: "red", position: "" },
  { title: "shinx", image: "/imageCheck.jpg", bgColor: "bright_sun", position: "reverse" },
  { title: "pikachu", image: "/imageCheck.jpg", bgColor: "bright_sun", position: "" },
  { title: "snorlax", image: "/imageCheck.jpg", bgColor: "red", position: "" },
  { title: "umbreon", image: "/imageCheck.jpg", bgColor: "minsk", position: "reverse" }
]

export default function Home() {

  return (
    <div className="container">
      <div className="pokemon_grid">
        {pokemonGrid.map((item: HomeGridProps, index: number) => <HomeGrid key={index}  {...item}/>)}
        {/* use Spread Operator instead  title={item.title} image={item.image} bgColor={item.bgColor} position={item.position} */}
      </div>
    </div>
  );
}

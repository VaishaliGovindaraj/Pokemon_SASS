
import Image from "next/image";
import { HomeGridProps } from "@/utils/types";


const HomeGrid = ({title, image, position, bgColor}:HomeGridProps) => {

    return(
        <div className={`pokemon_grid_${position} ${title === "pikachu" ? "pokemon_grid_featured" :""} grid_container`}>
            <Image className="grid_container_image" src={image} alt={title} width={`${title === "pikachu" ? 500 : 250}`} height={`${title === "pikachu" ? 450 : 200}`} />
            <h4 className={`pokemon_name grid_container_${bgColor} grid_container_title`}>{title.toUpperCase()}</h4>
        </div>
    )
}

export default HomeGrid;
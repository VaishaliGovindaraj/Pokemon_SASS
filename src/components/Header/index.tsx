import Image from "next/image"
import Logo from '../../../public/pokemon-logo-updated.png'
import pokeball from '../../../public/pokeball.png'


const Header = () => {
    return (
        <header className="header">
            <div className="header__icon">
                <Image src={pokeball} alt="Pokeball" />
            </div>
            <div className="header__logo">
                <Image src={Logo} alt="Logo" />
            </div>
            <div className="header__avatar">
                <Image src={pokeball} alt="Pokeball" />
            </div>
        </header>
    )
}

export default Header;
import Styles from './styles.module.scss';
import { EfectText } from "./EfectText";








const NavBar = () => {
    
    const letters = ['<','/','>']
    
    return(
        <nav className={Styles.navbar}>
            <div className={Styles.navbar__container_Logo}>
                <h3>
                    {letters.map((letter, index) => {
                        return <EfectText 
                            key={index} 
                            letter={letter} 
                            index={index}
                        />
                    })}
                    CIOG
                </h3>
            </div>
            <div className={Styles.navbar__container_links}>
                <a className={Styles.link} href="#">Experiencia</a>
                <a className={Styles.link} href="#">Portafolio</a>
                <a className={Styles.link} href="#">Contacto</a>
            </div>
        </nav>
    )
}

export default NavBar;





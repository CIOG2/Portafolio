import Styles from './styles.module.scss';
import { useState, useEffect } from 'react'

const NavBar = () => {

    const [sizeWindow, setSizeWindow] = useState(false);
    
    
    useEffect(() => {

        const windowsSize = () => {
            setSizeWindow(() => {
                if (window.innerWidth >= 700) {
                    return true;
                }
                return false;
            });
        }
        windowsSize();

        window.addEventListener("resize", () => {
            windowsSize();
        });

    },[]);

    

    return(
        <nav className={Styles.navbar}>
            <div className={Styles.navbar__container_logo}>
                <h3 className={Styles.logo__text}>
                    <span className={Styles.logo}>
                        {'</>'}
                    </span>
                    CIOG
                </h3>
            </div>
            {sizeWindow && (
                <div className={Styles.navbar__container_links}>
                    <a className={Styles.link} href="#">Experiencia</a>
                    <a className={Styles.link} href="#">Portafolio</a>
                    <a className={Styles.link} href="#">Contacto</a>
                </div>
            )}
        </nav>
    )
}

export default NavBar;
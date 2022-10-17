import Styles from './styles.module.scss';
import { useState, useEffect, useRef, FC } from 'react'

interface Props {
    hamburguerActive: boolean;
    setHamburguerActive: any;
}

const NavBar: FC<Props> = ({hamburguerActive, setHamburguerActive}) => {

    const line1 = useRef<HTMLDivElement>(null);
    const line2 = useRef<HTMLDivElement>(null);
    const line3 = useRef<HTMLDivElement>(null);
    const nav = useRef<HTMLElement>(null);
    const [hamburguer, setHamburguer] = useState(true);
    
    const menuHamburguer = () =>{
        const L1 = line1.current;
        const L2 = line2.current;
        const L3 = line3.current;
        const navbar = nav.current;

        if (L1 !== null && L2 !== null && L3 !== null && navbar !== null) {
            if (hamburguer) {
                L1.style.transform = "rotate(40deg)";
                L2.style.opacity = "0";
                L3.style.transform = "rotate(-40deg)";
                navbar.style.boxShadow = "0px 1px 5px 0px white";
            }else{
                L1.style.transform = "rotate(0deg)";
                L2.style.opacity = "1";
                L3.style.transform = "rotate(0deg)";
                navbar.style.boxShadow = "none";
            }
            setHamburguer(!hamburguer);
            setHamburguerActive(!hamburguerActive);
        }      
    }
    
    useEffect(() => {
        const windowsSize = () => {
            if (window.innerWidth >= 700 && !hamburguer){
                setHamburguer(false);              
                setHamburguerActive(false);
                menuHamburguer();
            }
        }
        
        window.addEventListener("resize", () => windowsSize());
    });



    return(
        <nav className={Styles["navbar"]} ref={nav}>
            <div className={Styles["navbar__container_logo"]}>
                <h3 className={Styles["logo__text"]}>
                    <span className={Styles["logo"]}>
                        {'</>'}
                    </span>
                    CIOG
                </h3>
            </div>
            <div className={Styles["navbar__container_links"]}>
                <a className={Styles["link"]} href="#">Sobre Mi</a>
                <a className={Styles["link"]} href="#">Experiencia</a>
                <a className={Styles["link"]} href="#">Contacto</a>
            </div>
            <div 
                className={Styles["navbar__hamburguer--button"]}
                onClick = {() => menuHamburguer()}
            >
                <div ref={line1} className = {Styles["hamburguer--line"]}></div>
                <div ref={line2} className = {Styles["hamburguer--line"]}></div>
                <div ref={line3} className = {Styles["hamburguer--line"]}></div>
            </div>
        </nav>
    )
}

export default NavBar;
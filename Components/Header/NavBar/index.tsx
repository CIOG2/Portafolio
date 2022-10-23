import Styles from './styles.module.scss';
import { useState, useEffect, useRef, FC } from 'react'

interface Props {
    hamburguerActive: boolean;
    setHamburguerActive: any;
    shadow: string;
}

const NavBar: FC<Props> = ({hamburguerActive, setHamburguerActive, shadow}) => {

    const buttonHamburguer = useRef<HTMLButtonElement>(null);
    const [hamburguer, setHamburguer] = useState(true);
    
    const menuHamburguer = () =>{
        const button = buttonHamburguer.current;
        
        if (button !== null && button.parentElement !== null) {
            if (hamburguer) {
                button.classList.add(Styles['button-active']);
                button.parentElement.style.boxShadow = '0px 1px 5px 0px white';
            }else{
                button.parentElement.style.boxShadow = 'none';
                button.classList.remove(Styles['button-active']);
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
    
        window.addEventListener('resize', windowsSize);
    });


    return(
        <section
            style = {{boxShadow: shadow}}
            className = {Styles['section__navbar']}
        >
            <nav className = {Styles['navbar']}>
                <div className = {Styles['navbar__container_logo']}>
                    <h3 className = {Styles['logo__text']}>
                        <span className = {Styles['logo']}>
                            {'</>'}
                        </span>
                        CIOG
                    </h3>
                </div>
                <div className = {Styles['navbar__container_links']}>
                    <a className = {Styles['link']} href='#'>Sobre Mi</a>
                    <a className = {Styles['link']} href='#'>Experiencia</a>
                    <a className = {Styles['link']} href='#'>Contacto</a>
                </div>
                <button 
                    aria-label = 'Menu desplegable'
                    className = {Styles['navbar__hamburguer--button']}
                    onClick = {() => menuHamburguer()}
                    ref={buttonHamburguer}
                >
                    <div className = {Styles['hamburguer--line']}></div>
                    <div className = {Styles['hamburguer--line']}></div>
                    <div className = {Styles['hamburguer--line']}></div>
                </button>
            </nav>
        </section>
    )
}

export default NavBar;
import Styles from './styles.module.scss';
import { useRef, FC } from 'react'

const MenuHamburguer = (hamburguerEfect: any) => {

    const container = useRef<HTMLDivElement>(null); 
    const nombresLink = ["Sobre Mi", "Experiencia", "Contacto"]

    setTimeout(() => {
        if(container.current !== null)
            container.current.style.right = "0%"        
    }, 10);

    return(
        <div 
            ref={container} 
            className={Styles["hamburguer__menu"]}
        >
            {nombresLink.map((name, index) =>(
                <a 
                    key = {index}
                    href = "#"
                    className = {Styles["link"]}
                >
                    {name}
                </a>
            ))}
        </div>
    )
}

export default MenuHamburguer;
import Styles from './styles.module.scss';
import { useRef } from 'react'

const MenuHamburguer = () => {

    const nombresLink = [
        {
            value: 'Sobre Mi',
            url: '#sobre-mi',
        },
        {
            value: 'Experiencia',
            url: '',
        },
        {
            value: 'Contacto',
            url: '',
        },
    ]
    const container = useRef<HTMLDivElement>(null); 

    setTimeout(() => {
        if(container.current !== null)
            container.current.style.right = '0%'        
    }, 10);

    return(
        <div 
            ref = {container} 
            className = {Styles['hamburguer__menu']}
        >
            {nombresLink.map((item, index) =>(
                <a 
                    key = {index}
                    href = {item.url}
                    className = {Styles['link']}
                >
                    {item.value}
                </a>
            ))}
        </div>
    )
}

export default MenuHamburguer;
import Styles from './styles.module.scss';
import NavBar from './NavBar';
import Title from './Title';
import MenuHamburguer from './MenuHamburguer';
import { useState } from 'react';

const Header = () => {

    const [hamburguerActive, setHamburguerActive] = useState(false);

    return(
        <header className={Styles['header']}>
            <NavBar
                hamburguerActive = {hamburguerActive}
                setHamburguerActive = {setHamburguerActive}
            />
            {hamburguerActive && (
                <MenuHamburguer/>
            )}
            <section className={Styles['header__section']}>
                <Title/>
                <div className={Styles['section__container']}>
                    <p className={Styles['section__container--description']}>
                        Hola soy Ivan un desarrollador web especializado en el front-end
                    </p>
                </div>
                <div className={Styles['section__container']}>
                    <a 
                        className={Styles['section__container--button']}
                        rel="noopener noreferrer"
                        target = "_blank"
                        href="https://drive.google.com/file/d/1KKdpfGbNIeLbHcgbchKrMalt7wD0JFvM/view?usp=sharing"
                        >
                        Curriculum Vitae
                    </a>
                </div>
            </section>
        </header>
        )
    }

export default Header;
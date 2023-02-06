import Styles from './styles.module.scss';
import NavBar from './NavBar';
import Title from './Title';
import MenuHamburguer from './MenuHamburguer';
import { useEffect, useState, useRef } from 'react';

const Header = () => {

    const [hamburguerActive, setHamburguerActive] = useState(false);
    const [styelesNav, setStyelesNav] = useState({});
    const articleRef = useRef() as React.MutableRefObject<HTMLElement>;


    useEffect(() => {
        const scrollPage = () => {
            const article = articleRef.current;
                
            if (article !== null) {        
                const { y } = article.getBoundingClientRect();
                
                (y < 0) 
                  ?setStyelesNav({
                    boxShadow:'0px .15px 2px 0px white',
                    backgroundColor: '#07090b',
                    }) 
                  :setStyelesNav({});
            }
        } 

        window.addEventListener('scroll', scrollPage);
    }, []);


    return(
        <header 
            className = {Styles['header']}
            ref = {articleRef}
        >
            <NavBar
                hamburguerActive = {hamburguerActive}
                setHamburguerActive = {setHamburguerActive}
                styelesNav = {styelesNav}
            />
            
            {hamburguerActive && (
                <MenuHamburguer/>
            )}
        
            <section className = {Styles['header__section']}>
                <Title/>
                <div className = {Styles['section__container']}>
                    <p className = {Styles['section__container--description']}>
                        Hola soy Ivan un desarrollador web especializado en el front-end
                    </p>
                </div>
                <div className={Styles['section__container']}>
                    <a 
                        className = {Styles['section__container--button']}
                        rel = 'noopener noreferrer'
                        target = '_blank'
                        href = 'https://drive.google.com/file/d/1D7Kvarlvl1g41khAhFjjV4i8uNmfXuM0/view?usp=sharing'
                        >
                        Curriculum Vitae
                    </a>
                </div>
            </section>
        </header>
        )
    }

export default Header;
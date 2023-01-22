import MainFooter from './MainFooter';
import Styles from './styles.module.scss';


const Footer = () => {
        
    return (
        <footer className = {Styles['footer']} >
            <section className = {Styles['footer__section']}>
                <div className = {Styles['']}>
                    {/* <h4>Contacto</h4>
                        <ul>
                            <li>Culiacan</li>
                            <li></li>
                            <li></li>
                        </ul> */}
                </div>

                <MainFooter/>
                
                <div className = {Styles['']}>
                    
                </div>
            </section>
            <h3 className = {Styles['footer__footer--text']}>
                © 2021 Creado y mas o menos diseñado por CIOG
            </h3>
        </footer>
    );
}

export default Footer;
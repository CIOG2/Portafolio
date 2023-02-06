import MainFooter from './MainFooter';
import Styles from './styles.module.scss';
import List from './List';

const contact = [
    {
        value: 'Culiacán Sinaloa, México.',
        url: 'https://www.google.com/search?q=culiacan+sinaloa%2C+mexico&rlz=1C1ONGR_esMX1033MX1033&oq=culiacan&aqs=chrome.1.69i60j69i59j69i57j46i20i263i433i512j69i59j69i60l3.7400j0j7&sourceid=chrome&ie=UTF-8',
        icon: "/assets/location-50.png",
        target: true,
    },
    {
        value: '+52-667-430-3492',
        url: 'tel:+526674303492',
        icon: "/assets/phone-50.png",
        target: false,
    },
    {
        value: 'Carlos.ivan10043@gmail.com',
        url: 'mailto:carlos.ivan10043@gmail.com',
        icon: "/assets/mail-50.png",
        target: false,
    },
];

const Footer = () => {
        
    return (
        <footer className = {Styles['footer']} >
            <section className = {Styles['footer__section']}>
                <div className = {Styles['footer__section--div']}>
                    <h4 className = {Styles['footer__section--title']} >CONTACTO</h4>
                    <ul className = {Styles['footer__section--ul']}>
                        {contact.map((item, index) => 
                            <List
                            key = {index}
                            value = {item.value} 
                            url = {item.url} 
                            icon = {item.icon}
                            target = {item.target}
                            />
                            )}
                    </ul>
                </div>

                <MainFooter/>
                
                <div className = {Styles['footer__section--another']}>
                    <h4 className = {Styles['footer__section--title']} >NEWSLETTER</h4>
                    <div className = {Styles['footer__section--ul']}>
                        <p className = {Styles['footer__section--parrafo']}>
                            Suscríbete al newsletter para que te llegue una notificación cuando agregue nuevo contenido
                        </p>
                        <input 
                            type='email'
                            placeholder='Agrega tu email'
                            className = {Styles['footer__section--input']}    
                        />            
                        <button
                            className = {Styles['footer__section--button']}    
                        >
                            SUSCRIBIRSE
                        </button>
                    </div>
                </div>
            </section>
            <h3 className = {Styles['footer__footer--text']}>
                © 2021 Creado y mas o menos diseñado por CIOG
            </h3>
        </footer>
    );
}

export default Footer;
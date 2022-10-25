import Styles from './styles.module.scss';

const AboutMe = () => {
    
    return (
        <section className = {Styles['section']} >
            <h2 className = {Styles['section__title']}>
                Sobre Mi
            </h2>
            <p className = {Styles['section__text']}>
                Hola soy Ivan un desarrollador web especializado en el front-end
            </p>
        </section>
    );
}

export default AboutMe;
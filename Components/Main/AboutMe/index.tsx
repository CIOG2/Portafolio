import Styles from './styles.module.scss';

const AboutMe = () => {
    
    return (
        <section className = {Styles['section']} >
            <h2  className = {Styles['section__title']}>
                Sobre Mi
            </h2>
            {/* <p className = {Styles['section__text']}>
                Hola soy Ivan un desarrollador web especializado en el front-end
            </p> */}


    
            <p className = {Styles['section__text']}>
                Siempre me he considerado una persona curiosa, ya que cada vez que me surgen preguntas que considero interesantes tengo la necesidad por obtener 
                una su respuesta, debido a que la intriga me rebasa y me obliga a buscarla, aunque a veces sepa que la pregunta no tiene una sola respuesta.
            </p>

            <p className = {Styles['section__text']}>
                Pero, <b>¿Por qué te estoy diciendo esto?</b>...
                <br />
                Bueno, pues... porque en esta ocasión trataré de responder a una pregunta que posiblemente no se encuentre en Google y esa pregunta es <b>¿Quién soy?</b>, 
                pude haber tomado el camino corto y decir 
                <b className = {Styles['section__text--bold']}>
                    {` "`}Hola soy Carlos Iván un joven de Culiacán Sinaloa, México que le fascina la programación y está enfocado 
                    en el desarrollo web, específicamente en área del Front-end, autodidacta, enfocado, con objetivos claros y con un deseo de siempre seguir aprendiendo.{`"`} 
                </b> 
                , aunque lo anterior es cierto, considero que no responde la pregunta.
            </p>
            {/* <p className = {Styles['section__text']}>
            </p> */}

        </section>
    );
}

export default AboutMe;
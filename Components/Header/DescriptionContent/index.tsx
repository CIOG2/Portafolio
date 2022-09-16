import Styles from './styles.module.scss';

const DescriptionContent = () => {
    return(
        <section className={Styles['section']}>
            <div className={Styles['section__container']}>
                <p className={Styles['section__container--description']}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad deserunt accusamus suscipit 
                    reiciendis. Eos non soluta id quisquam, aspernatur rerum nemo voluptas quaerat ratione 
                    sapiente modi necessitatibus, iste expedita nam? 
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
        )
    }

export default DescriptionContent;
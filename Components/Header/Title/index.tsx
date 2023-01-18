import Styles from './styles.module.scss';

const Title = () => {
    
    return(
        <div className = {Styles['section__container']}>
            <h1 className = {Styles['title']}>
                <span className = {Styles['title__text--1']}>
                    Front-end 
                </span>
                    <br />
                <span className = {Styles['title__text--2']}>
                    Developer Jr.
                </span>
            </h1>
        </div>
    )
}

export default Title;
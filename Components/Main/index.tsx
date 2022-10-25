import AboutMe from './AboutMe';
import Styles from './styles.module.scss';

const Main = () => {
        
    return (
        <main className = {Styles['main']} >
            <AboutMe/>
        </main>
    );
}

export default Main;
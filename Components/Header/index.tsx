import Styles from './styles.module.scss';
import NavBar from './NavBar';
import Title from './Title';
import DescriptionContent from './DescriptionContent';

const Header = () => {
    return(
        <header className={Styles['header']}>
            <NavBar/>
            <section className={Styles['header__section']}>
                <Title/>
                <DescriptionContent/>
            </section>
        </header>
        )
    }

export default Header;
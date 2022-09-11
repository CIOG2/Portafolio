import Styles from './styles.module.scss';
import NavBar from './NavBar';
import Title from './Title';

const Header = () => {
    return(
        <header className={Styles.header}>
            <NavBar/>
            <Title/>
        </header>
    )
}

export default Header;
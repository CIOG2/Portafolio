import Styles from './styles.module.scss';
import NavBar from './NavBar';

const Header = () => {
    return(
        <header className={Styles.header}>
            <NavBar/>
        </header>
    )
}

export default Header;
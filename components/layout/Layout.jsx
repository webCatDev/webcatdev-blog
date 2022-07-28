
import DarkModeButton from "../top-navigation/DarkModeButton";
import SocialMediaLinks from "../top-navigation/SocialMediaLinks";
import { useSelector } from "react-redux";

import classes from './layout.module.scss'

const Layout = ({ children }) => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
 const darkModeClass = isDarkMode ? classes.darkMode : "";
 const containerClasses = `${classes.container} ${darkModeClass}`;
 const headerClasses = `${classes.header} ${darkModeClass}`;
    return (
        <div className={containerClasses}>
            <header className={headerClasses}>
                <SocialMediaLinks />
                <DarkModeButton/>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;
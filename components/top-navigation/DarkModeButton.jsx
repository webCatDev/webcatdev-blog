import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import classes from "./dark-mode-button.module.scss";
import {useDispatch, useSelector} from 'react-redux'
import { darkModeActions } from "../../store/darkModeSlice";


const DarkModeButton = () => {
    const isDarkMode = useSelector(state => state.darkMode.isDarkMode)
    const dispatch = useDispatch()

  const handleClick = () => dispatch(darkModeActions.toggleDarkMode());

const darkModeClass = isDarkMode ? classes.darkMode : ""
  const darkModeButtonClass = `${classes.darkModeButton} ${
    darkModeClass
        }`;
    
  return (
    <button
      className={darkModeButtonClass}
      aria-label="temayı değiştir"
      onClick={handleClick}
    >
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};

export default DarkModeButton;

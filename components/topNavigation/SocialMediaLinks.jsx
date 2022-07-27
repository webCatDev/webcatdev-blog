import classes from "./social-media-links.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {useSelector} from 'react-redux'

const SocialMediaLinks = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const darkModeClass = isDarkMode ? classes.darkMode : "";
  const navbarClasses = `${classes.socialMediaNavbar} ${darkModeClass}`;
  return (
    <nav className={navbarClasses}>
      <ul className={classes.socialMediaNavbar__Links}>
        <li>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon />
          </a>
        </li>

        <li>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <InstagramIcon />
          </a>
        </li>

        <li>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon />
          </a>
        </li>

        <li>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMediaLinks;

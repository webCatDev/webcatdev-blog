import classes from "./hero.module.scss";
import Image from "next/image";
import {useSelector} from 'react-redux'

const Hero = () => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

     const darkModeClass = isDarkMode ? classes.darkMode : "";
     const heroClasses = `${classes.hero} ${darkModeClass}`;
  return (
    <section className={heroClasses}>
          <Image
        src="/images/hero.jpg"
        alt="çalışma alanı"
        width={600}
        height={300}
        layout="responsive"
      />
      <h1 className={classes.hero__Main_Heading}>
        Merhaba,
        <br /> ben Hamza
      </h1>
      <p>
        <em className={classes.hero__Job}>Jr. Fullstack Web Developer</em>
      </p>
      <p>HTML, JavaScript ve CSS hakkında yazılar yazıyorum.</p>
    </section>
  );
};

export default Hero;

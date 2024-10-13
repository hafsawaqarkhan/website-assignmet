import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h2>Welcome to the Hero Section</h2>
      < p className = {styles.para}> My name is Hafsa Khan . I am 18 years old.<br></br>
        I have currently started my developer journey.
      </p>
    </section>
  );
};
export default Hero;

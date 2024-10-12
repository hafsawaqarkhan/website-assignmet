import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Next.js Website</h1>
      <div>
      <nav>
        <ul>
          <li>
            <a href = "/" className = {styles.header}>Home </a>
          </li>
          <li>
         <a  href = "#about" className = {styles.header}>About
        </a>
          </li>
          <li>
            <a href = "#contact" className = {styles.header}>Contact</a>
          </li>
        </ul>
      </nav>
      </div>
      
    </header>
  );
};
export default Header;
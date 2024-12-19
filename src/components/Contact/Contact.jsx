
import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Us</h2>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:shaiksameer0407@gmail.com">Mail</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/sameer0407">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/myname">github</a>
        </li>
      </ul>
    </footer>
  );
};

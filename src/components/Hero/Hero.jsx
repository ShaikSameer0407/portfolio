import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sameer</h1>
        <p className={styles.description}>
          I'm a full-stack and UI/UX developer
        </p>
        <a href="mailto:mohammadsameer2120@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1734571856~exp=1734575456~hmac=5ef7b9c3b52854cc20ee3adae32c2df98e8f297c8ab9bd240621389c795d3bd7&w=826"
          className={styles.heroImg}
          alt="Hero"
      
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
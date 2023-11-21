import styles from '../../../styles/login.module.css'
import Image from 'next/image'

export default function EsqueceuSenha() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.leftSide}>
          <div className={styles.imageWrapper}>
            <Image src='/img/login.png' alt="login" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.rightSide}>
          <h2 className={styles.title}><span className={styles.loginText}>Recupere a sua senha </span> </h2>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <label>Email</label>
              <input type="email" placeholder="Seu email" />
            </div>
           
            <button type="submit" className={styles.button}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

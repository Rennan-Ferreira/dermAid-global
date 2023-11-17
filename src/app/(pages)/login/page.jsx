import styles from '../../../styles/login.module.css'
import Image from 'next/image'

export default function Login() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.leftSide}>
          <div className={styles.imageWrapper}>
            <Image src='/img/login.png' alt="login" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.rightSide}>
          <h2 className={styles.title}>Faça seu <span className={styles.loginText}>LOGIN</span> ou <span className={styles.signupText}>Cadastre-se</span></h2>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <label>Email</label>
              <input type="email" placeholder="Seu email" />
            </div>
            <div className={styles.inputContainer}>
              <label>Password</label>
              <input type="password" placeholder="Sua senha" />
              <a className={styles.forgotPassword} href="#">Esqueceu a senha?</a>
            </div>
            <button type="submit" className={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

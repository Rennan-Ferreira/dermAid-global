'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../../styles/login.module.css';
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    setGeneralError(''); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
    setGeneralError(''); 
  };

  const validateEmail = () => {
    if (!email.includes('@') || !email.includes('.com')) {
      setEmailError('Email inválido');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('Senha deve ter pelo menos 8 caracteres');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail() && validatePassword()) {
      router.push('/cadastro');
    } else {
      setGeneralError('Por favor, corrija os campos.');
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.leftSide}>
          <div className={styles.imageWrapper}>
            <Image src='/img/login.png' alt="login" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.rightSide}>
          <h2 className={styles.title}>
            Faça seu <span className={styles.loginText}>LOGIN</span> ou{' '}
            <span className={styles.signupText}><a href="/cadastro">Cadastre-se</a></span>
          </h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <label>Email</label>
              <input type="email" placeholder="Seu email" value={email} onChange={handleEmailChange} required />
              {emailError && <p className={styles.errorMessage}>{emailError}</p>}
            </div>
            <div className={styles.inputContainer}>
              <label>Password</label>
              <input  type="password"  placeholder="Sua senha"  value={password}  onChange={handlePasswordChange} required  />
              {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}
              
              <a className={styles.forgotPassword} href="/esqueceuSenha">
                Esqueceu a senha?
              </a>
            </div>
            {generalError && <p className={styles.errorMessage}>{generalError}</p>}
          
            <button type="submit" className={styles.button}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

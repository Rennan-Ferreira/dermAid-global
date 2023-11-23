"use client";
import { useState } from 'react';
import styles from '../../../styles/login.module.css';
import Image from 'next/image';

export default function EsqueceuSenha() {
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [step, setStep] = useState(1); // Controla a etapa do processo

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    
    // Aqui você pode adicionar lógica para enviar o e-mail e validar se o e-mail é válido
    // Após o envio do e-mail, avance para a próxima etapa
    setStep(2);
  };

  const handleSubmitNovaSenha = async (e) => {
    e.preventDefault();
    
    // Aqui você pode fazer a requisição POST para a API com os dados necessários
    const data = {
      email,
      novaSenha,
      cpf,
    };

    try {
      // Fazer a requisição POST para a API
      const response = await fetch('http://localhost:8080/ProjetoDermAId/rest/EsqueceuSenha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Verificar se a requisição foi bem-sucedida
      if (response.ok) {
        console.log('Senha alterada com sucesso!');
        // Você pode adicionar lógica aqui para redirecionar o usuário ou exibir uma mensagem de sucesso
      } else {
        console.error('Erro ao alterar senha:', response.statusText);
        // Você pode adicionar lógica aqui para lidar com erros
      }
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      // Você pode adicionar lógica aqui para lidar com erros
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
            <span className={styles.loginText}>
              {step === 1 ? 'Recupere a sua senha' : 'Insira uma nova senha e confirme o seu CPF'}
            </span>
          </h2>
          {step === 1 ? (
            <form className={styles.form} onSubmit={handleSubmitEmail}>
              <div className={styles.inputContainer}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className={styles.button}>
                Enviar
              </button>
            </form>
          ) : (
            <form className={styles.form} onSubmit={handleSubmitNovaSenha}>
              <div className={styles.inputContainer}>
                <label>Nova Senha</label>
                <input
                  type="password"
                  placeholder="Nova senha"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                />
              </div>
              <div className={styles.inputContainer}>
                <label>CPF</label>
                <input
                  type="text"
                  placeholder="Seu CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>
              <button type="submit" className={styles.button}>
                Alterar Senha
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

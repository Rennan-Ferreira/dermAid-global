"use client"
import styles from '../../../styles/cadastro.module.css'
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    idade: '',
    genero: '',
    
  });

  const navigate = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const requestBody = {
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
        cpf: formData.cpf,
        idade: formData.idade,
        genero: formData.genero,
        
      };

      const apiResponse = await fetch('http://localhost:8080/ProjetoDermAId/rest/Cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (apiResponse.ok) {
        console.log('Requisição enviada com sucesso!');
        navigate.push('/homeDois');
      } else {
        console.error('Erro na chamada da API Java:', apiResponse.statusText);
        console.log('Corpo da resposta:', await apiResponse.text());

        try {
          const errorDetails = await apiResponse.json();
          console.error('Detalhes do erro:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro:', jsonError.message);
        }
      }
    } catch (error) {
      console.error('Erro ao conectar com a API Java:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const numericValue = value.replace(/\D/g, '');

    const formattedCPF = numericValue.padStart(11, '0');

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'cpf' ? parseInt(formattedCPF, 10) : value,
    }));
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.leftSide}>

          <h2 className={styles.title}>Faça seu <span className={styles.cadastroText}>CADASTRO</span>. Já possui conta? Faça seu <span className={styles.signupText}><a href="/login">Login</a></span></h2>

          <form className={styles.form} onSubmit={handleSubmit}  action="">
            <div className={styles.inputContainer}>
              <label htmlFor="nome">NOME:</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome" value={formData.nome} onChange={handleChange} required />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email">EMAIL:</label>
              <input type="text" id="email" name="email" placeholder="Seu email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="cpf">CPF:</label>
              <input type="text" id="cpf" name="cpf" placeholder="Seu cpf" value={formData.cpf} onChange={handleChange} required />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="idade">IDADE:</label>
              <input type="text" id="idade" name="idade" placeholder="Sua idade" value={formData.idade} onChange={handleChange} required />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="senha">SENHA:</label>
              <input type="password" id="senha" name="senha" placeholder="Sua senha" value={formData.senha} onChange={handleChange} required />  
            </div>
            
            <label htmlFor="genero" className={styles.gender}>GÊNERO:</label>
            <input type="text" id="genero" name="genero" placeholder="Seu genero" value={formData.genero} onChange={handleChange} required />
            <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Aguarde...' : 'CADASTRAR-SE'}
            </button>
           
          </form>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.imageWrapper}>
            <Image src='/img/cadastro.png' alt="login" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
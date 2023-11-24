'use client'
import Link from 'next/link';
import { useState } from 'react';
import styles from '../../../styles/enviarFoto.module.css';
import Image from 'next/image';

export default function EnviarFoto() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Por favor, selecione uma imagem antes de enviar.');
      return;
    }

    // Restante do código de envio para a API ou redirecionamento.
  };

  return (
    <div className={styles.container}>
    <header className={styles.header}>
      <div className={styles.backButton}>
        <Link href="/perguntas" className={styles.backButton}>&#8592;</Link>
      </div>
    </header>
    <main className={styles.pagina}>
      <div className={styles.textoConteudo}>
        <h1>CARREGUE SUA FOTO AQUI</h1>
        <p>Mande uma foto com boa qualidade, focando bem na área com maior concentração de vermelhidão.</p>
      </div>
      <div className={styles.figuras}>
        <div className={styles.figurasContainer}>
          {selectedFile ? (
            <div className={styles.imagemSelecionada}>
              <p>Imagem selecionada:</p>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Imagem Selecionada"
                className={styles.imagemReduzida}
              />
            </div>
          ) : (
            <>
              <label htmlFor="fileInput">
                <Image className={styles.svg} src='/svg/jpg.svg' alt='jpg' width={150} height={70} />
                <Image className={styles.svg} src='/svg/png.svg' alt='png' width={150} height={70} />
              </label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </>
          )}
        </div>
      </div>
      <button className={styles.btnEnviar} onClick={handleUpload}>
        Enviar 
        <Image className={styles.svg} src='/svg/upload.svg' alt='upload' width={27} height={27}/>
      </button>
    </main>
    <footer className={styles.footer}>
      <p>DermAId</p>
    </footer>
  </div>
);
}
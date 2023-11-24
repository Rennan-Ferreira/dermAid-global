import Link from 'next/link';
import styles from '../../../styles/enviarFoto.module.css';
import Image from 'next/image';

export default function EnviarFoto() {
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
        <label htmlFor="fileInput">
                <Image className={styles.svg} src='/svg/jpg.svg' alt='jpg' width={150} height={70} />
                <Image className={styles.svg} src='/svg/png.svg' alt='png' width={150} height={70} />
              </label>
              <input type="file" id="fileInput" accept="image/*" style={{ display: 'none' }} />
           
        </div>
        <Link href='/resultado'>
          <button className={styles.btnEnviar}>Enviar 
            <Image className={styles.svg} src='/svg/upload.svg' alt='upload' width={27} height={27}/>
          </button>
        </Link>
    </main>
    <footer className={styles.footer}>
        <p>DermAId</p>
      </footer>
    </div>
  )
}

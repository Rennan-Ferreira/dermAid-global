import styles from '../../../styles/enviarFoto.module.css';
import Image from 'next/image';
import Link from 'next/Link';

export default function EnviarFoto() {
  return (
    <main className={styles.pagina}>
        <Link href='/perguntas'><button className={styles.btnVoltar}>Voltar</button></Link>
        <div className={styles.textoConteudo}>
            <h1>CARREGUE SUA FOTO AQUI</h1>
            <p>Mande uma foto com boa qualidade, focando bem na área com maior concentração de vermelhidão.</p>
        </div>
        <div className={styles.figuras}>
          <Image className={styles.svg} src='/svg/jpg.svg' alt='jpg' width={150} height={70}/>
          <Image className={styles.svg} src='/svg/png.svg' alt='png' width={150} height={70}/>
        </div>
        <Link href='/resultado'>
          <button className={styles.btnEnviar}>Enviar 
            <Image className={styles.svg} src='/svg/upload.svg' alt='upload' width={27} height={27}/>
          </button>
        </Link>
    </main>
  )
}

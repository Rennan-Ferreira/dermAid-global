import Link from 'next/link'
import styles from '../../../styles/resultado.module.css'
import Image from 'next/image'

export default function Resultado() {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
    <div className={styles.backButton}>
              <Link href="/enviarFoto" className={styles.backButton}>&#8592;</Link>
            </div>
    </header>

    <main>
      
        <div className={styles.topSection}>
            <h1>80% de chance de ser Lúpus</h1>
            <h5>O tratamento inclui:</h5>
            <p>* Uso de medicamentos que modulam o sistema imunológico e controlam a inflamação, como anti-inflamatórios, corticoides, antimaláricos, imunossupressores e drogas biológicas</p>
            <p>* Cuidados gerais com a saúde, como usar protetor solar, manter uma alimentação equilibrada, fazer repouso adequado e evitar situações de estresse.</p>
            <p>* Seguimento médico regular e exames periódicos para monitorar a evolução da doença e os efeitos dos medicamentos</p>
            <p>* Apoio psicológico e social para lidar com os aspectos emocionais e as limitações impostas pela doença.</p>
        </div>
        <div className={styles.bottomSection}>
            <p>Recomendamos que você consulte um dermatologista e inicie o tratamento o mais breve possivel.</p>
            <Link href='/agendamento'><button className={styles.btnAgendar}>Agendar Consulta</button></Link>
            <Link href='/'><button className={styles.btnVoltar}>Voltar para a tela inicial</button></Link>
        </div>
    </main>
    <footer className={styles.footer}>
        <p>DermAId</p>
      </footer>
    </div>
  )
}

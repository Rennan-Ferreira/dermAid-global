import Image from 'next/image'
import styles from '../styles/home.module.css';

export default function Home() {
 return (
    <main className={styles.pagina}>
      <div className={styles.faixaRosa}></div>
      <Image className={styles.topLogo} src='/img/derm-logo.png' alt='logo' width={100} height={100}/>
      <div className={styles.cabecalho}>
        <div className={styles.textCabecalho}>
          <h1>Pré-Diagóstico</h1>
          <p>Faça o pré-diagnóstico e descubra se você pode ter rosácea ou lúpus.</p>
          <button>Faça agora mesmo</button>
        </div>                              
      </div>
      <div className={styles.sectionApps}>
        <div className={styles.Apps}>
          <div className={styles.circulo}>
          <Image className={styles.svg} src='/svg/relatorio.svg' alt='logo' width={100} height={50}/>
          </div>
          <h5>Relatório</h5>
          <div className={styles.sublinhado}></div>
          <p>Veja os seus relatórios e acompanhe a sua evolução.</p>
        </div>
        <div className={styles.Apps}>
          <div className={styles.circulo}>
          <Image className={styles.svg} src='/svg/monitoramento.svg' alt='logo' width={100} height={50}/>
          </div>
          <h5>Monitoramento</h5>
          <div className={styles.sublinhado}></div>
          <p>Monitore os seus sintomas e registre as suas mudanças na pele.</p>
        </div>
        <div className={styles.Apps}>
          <div className={styles.circulo}>
          <Image className={styles.svg} src='/svg/agende.svg' alt='logo' width={100} height={50}/>
          </div>
          <h5>Agende sua consulta</h5>
          <div className={styles.sublinhado}></div>
          <p>Agende a sua consulta e encontre o dermatologista mais próximo de você.</p>
        </div>
      </div>
        
      <div className={styles.sectionInfos}> 
        <div className={styles.imgInfo}>
          <Image className={styles.imgInfo} src='/img/rosa-lupus-1.png' alt='rosácea e lúpus' width={430} height={470}/>
        </div>
        <div className={styles.textInfo}>
          <h2>Mais Informação, Mais Saúde</h2>
          <p>Rosácea e lúpus são duas doenças que podem afetar a sua pele e a sua saúde de forma diferente. Ambas são inflamatórias e crônicas, mas têm origens e tratamentos distintos. Você sabe quais são as principais diferenças entre elas?</p>
          <button>Saiba mais</button>
        </div>
      </div>
      <div className={styles.sectionInspiracao}>
        <h2>Nossa Inspiração</h2>
        <div className={styles.sublinhados2}>
          <div className={styles.sublinhado2}></div>
          <div className={styles.sublinhado2}></div>
        </div>
        <p>Saiba mais sobre a nossa motivação e a nossa história por trás do aplicativo para rosácea e lúpus.</p>
        <button>Saiba mais</button>
      </div>
      <div className={styles.sectionAvaliacoes}>
        <h2>Avaliações dos nossos usuários</h2>
        <div className={styles.blocoAvaliacao}>
          <div className={styles.conteudoAvaliacoes}>
            <p>Eu descobri que tenho lúpus pelo app, que me mostrou os sintomas e como marcar a consulta. O médico confirmou o diagnóstico e me explicou o tratamento. O app me ajudou a monitorar os sintomas e a me informar sobre o lúpus. O app foi essencial para mim, pois me fez conhecer a minha doença e me orientou sobre como cuidar dela. Parabéns aos desenvolvedores pelo ótimo app.</p>
          </div>
          <div className={styles.perfilAvaliador}>
            <Image className={styles.imgAvaliacao} src='/img/img-avaliador.png' alt='mulher' width={70} height={70}/>
            <div className={styles.infoAvaliador}>
              <h6>Márcia Castro</h6>
              <p>Brasil</p>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.conteudoFooter}>
          <Image  className={styles.imgFooter} src='/img/derm-logo.png' alt='logo' width={100} height={100}/>
          <div className={styles.sublinhadoFooter}></div>
          <h4>Integrantes:</h4>
          <p>Harthley Fernandes Teixeira Gomes - RM551359 - 1TDSPF</p>
          <p>Isabella Jorge Ferreira - RM552329 - 1TDSPF</p>
          <p>Jaisy Cibele Alves - RM552269 - 1TDSPF</p>
          <p>Rennan Ferreira da Cruz - RM99364 - 1TDSPF</p>
          <p>Thiago de Jesus Barbosa - RM552260 - 1TDSPF</p>
        </div>
      </footer>
    </main>
  )
}

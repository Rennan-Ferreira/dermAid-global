import Image from 'next/image'
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <main>
      <div className={styles.faixaRosa}></div>
      <Image className={styles.topLogo} src='/img/logo-alliance.png' alt='logo' width={100} height={100}/>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="#c9184a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2V5Zm12-2h6a2 2 0 0 1 2 2v5h-8V3Zm0 11h8v5a2 2 0 0 1-2 2h-6v-7Z"/></svg>
          </div>
          <h5>Relatório</h5>
          <div className={styles.sublinhado}></div>
          <p>Veja os seus relatórios e acompanhe a sua evolução.</p>
        </div>
        <div className={styles.Apps}>
          <div className={styles.circulo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#c9184a" fill-rule="evenodd" d="M7.999 1a.75.75 0 0 1 .715.521L12 11.79l1.286-4.018A.75.75 0 0 1 14 7.25h1.25a.75.75 0 0 1 0 1.5h-.703l-1.833 5.729a.75.75 0 0 1-1.428 0L8.005 4.226l-2.29 7.25a.75.75 0 0 1-1.42.03L3.031 8.03l-.07.208a.75.75 0 0 1-.711.513H.75a.75.75 0 0 1 0-1.5h.96l.578-1.737a.75.75 0 0 1 1.417-.02L4.95 8.919l2.335-7.394A.75.75 0 0 1 7.999 1Z" clip-rule="evenodd"/></svg>
          </div>
          <h5>Monitoramento</h5>
          <div className={styles.sublinhado}></div>
          <p>Monitore os seus sintomas e registre as suas mudanças na pele.</p>
        </div>
        <div className={styles.Apps}>
          <div className={styles.circulo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#c9184a" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"/></svg>
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
          <Image  className={styles.imgFooter} src='/img/logo-alliance.png' alt='logo' width={100} height={100}/>
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

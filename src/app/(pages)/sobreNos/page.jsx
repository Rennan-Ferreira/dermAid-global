import Image from 'next/image'
import styles from '../../../styles/sobreNos.module.css';

export default function sobreNos() {
  return (
    <main className={styles.pagina}>
        <Image className={styles.topLogo} src='/img/derm-logo.png' alt='logo dermAid' width={200} height={200}/>
        <div className={styles.linhaRosa}></div>
        <div className={styles.topSection}>
          <div className={styles.textTopSection}>
            <h1>Sobre Nós</h1>
            <div className={styles.linhaRosa2}></div>
            <h5>A sua pele reflete o seu bem-estar. Informe-se sobre rosácea e lúpus e como cuidar deles.</h5>
          </div>
          <div>
            <Image className={styles.logoGrande} src='/img/derm-logo.png' alt='logo dermAid' width={573} height={566}/>
          </div>
        </div>
        <div className={styles.paragrafo}>
          <p>    Nossa inspiração surgiu da necessidade de ajudar as pessoas que sofrem de rosácea e lúpus, duas doenças que muitas vezes são confundidas ou ignoradas, mas que podem causar sérios problemas se não forem tratadas adequadamente. Queremos oferecer uma ferramenta que possa facilitar o diagnóstico, o acompanhamento e o tratamento dessas doenças, conectando os usuários com os dermatologistas mais próximos e fornecendo informações confiáveis e atualizadas sobre as causas, os sintomas e as opções terapêuticas. Acreditamos que a tecnologia pode ser uma aliada na promoção da saúde e da qualidade de vida das pessoas.</p>
        </div>
        <div className={styles.sectionInformations}>
          <div className={styles.nossoTime}>
            <div className={styles.titulo}>
              <p>Nosso Time</p>
              <div className={styles.linhaBranca}></div>
            </div>
            <div className={styles.time}>
              <div className={styles.boxIntegrantes}>
                <div className={styles.integrante}>
                  <p>Software Design</p>
                  <Image className={styles.integranteImg} src='/img/harthley-img.png' alt='Integrante Harthley' width={50} height={50}/>
                  <h6>Harthley</h6>
                </div>
                <div className={styles.integrante}>
                  <p>Banco de Dados</p>
                  <Image className={styles.integranteImg} src='/img/isabella-img.png' alt='Integrante Isabella' width={50} height={50}/>
                  <h6>Isabella</h6>
                </div>
                <div className={styles.integrante}>
                  <p>Java</p>
                  <Image className={styles.integranteImg} src='/img/jaisy-img.png' alt='Integrante Jaisy' width={50} height={50}/>
                  <h6>Jaisy</h6>
                </div>
                <div className={styles.integrante}>
                  <p>IA and Web</p>
                  <Image className={styles.integranteImg} src='/img/Rennan-img.png' alt='Integrante Rennan' width={50} height={50}/>
                  <h6>Rennan</h6>
                </div>
                <div className={styles.integrante}>
                  <p>Python</p>
                  <Image className={styles.integranteImg} src='/img/thiago-img.png' alt='Integrante Thiago' width={50} height={50}/>
                  <h6>Thiago</h6>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionTecnologia}>
            <div className={styles.titulo}>
              <p>Tecnologias Utilizadas</p>
              <div className={styles.linhaBranca}></div>
            </div>
            <div className={styles.boxTecnologias}>
              <div className={styles.tecnologia}>
                <Image className={styles.tecnologiaImg} src='/img/logo-oracle.png' alt='logo Oracle' width={50} height={50}/>
              </div>
              <div className={styles.tecnologia}>
                <Image className={styles.tecnologiaImg} src='/img/logo-java.png' alt='logo Java' width={50} height={50}/>
              </div>
              <div className={styles.tecnologia}>
                <Image className={styles.tecnologiaImg} src='/img/logo-python.png' alt='logo Python' width={50} height={50}/>
              </div>
              <div className={styles.tecnologia}>
                <Image className={styles.tecnologiaImg} src='/img/logo-html.png' alt='logo Html 5' width={50} height={50}/>
              </div>
              <div className={styles.tecnologia}>
                <Image className={styles.tecnologiaImg} src='/img/logo-css.png' alt='logo css 3' width={50} height={50}/>
              </div>
              <div className={styles.tecnologia}>
                <Image className={styles.tecnologiaImg} src='/img/logo-nextjs.png' alt='logo nextjs' width={50} height={50}/>
              </div>  
            </div>
          </div>
          <div className={styles.parceiros}>
            <h3>Parceiros:</h3>
            <div className={styles.boxParceiros}>
              <Image className={styles.parceirosImg} src='/img/logo-hapvida.png' alt='logo Hapvida' width={50} height={50} />
              <Image className={styles.parceirosImg} src='/img/logo-fiap.png' alt='logo Fiap' width={50} height={50} />
            </div> 
            <div className={styles.linhaRose}></div>
            <div className={styles.parceirosBottom}>
              <div className={styles.nomeIntegrantes}>
                <h4>Integrantes:</h4>
                <p>Harthley Fernandes Teixeira Gomes - RM551359 - 1TDSPF</p>
                <p>Isabella Jorge Ferreira - RM552329 - 1TDSPF</p>
                <p>Jaisy Cibele Alves - RM552269 - 1TDSPF</p>
                <p>Rennan Ferreira da Cruz - RM99364 - 1TDSPF</p>
                <p>Thiago de Jesus Barbosa - RM552260 - 1TDSPF</p>
              </div>
              <div>
                <Image className={styles.logoFooter} src='/img/derm-logo.png' alt='logo dermAid' width={50} height={50}/>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

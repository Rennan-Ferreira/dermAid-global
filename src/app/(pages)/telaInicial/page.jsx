"use client";
import styles from '../../../styles/telaInicial.module.css';
import Link from 'next/link';

export default function Home() { return ( <div className={styles.container}>
    <div className={styles.rectangle}>
        <div className={styles.header}>
            <h1 className={styles.title}>DermAId</h1>
            <div className={styles.buttons}> <button className={styles.login}><Link href='/login'>Login</Link></button> 
            <button className={styles.signup}><Link href='/cadastro'>Sign Up</Link></button> </div>
        </div>
        <div className={styles.content}>
            <div className={styles.text}>
                <p className={styles.description}> Explore nosso pré-diagnóstico por imagens para entender sua pele.
                    Acompanhe o tratamento, agende consultas e cuide da sua saúde dermatológica com seriedade e
                    praticidade. </p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.logo}> 
                <img src="/img/LogoDermaid.png" alt="Logo Dermaid" /> 
            </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.diseases}>
                <div className={styles.lupus}>
                    <p className={styles.titleLupus}>Lúpus</p>
                    <p className={styles.txtLupus}>Lúpus é uma doença autoimune que pode afetar a pele, articulações e
                        órgãos internos, resultando de uma resposta imunológica desregulada.</p>
                </div>
                <div className={styles.rosacea}>
                    <p className={styles.titleRosacea}>Rosácea</p>
                    <p className={styles.txtRosacea}>Rosácea é uma condição crônica da pele, caracterizada por
                        vermelhidão facial persistente, vasos sanguíneos visíveis e, em alguns casos, espinhas, afetando
                        principalmente o rosto.</p>
                </div>
            </div>
            <div className={styles.miniRectangle}></div>
        </div>
    </div>
</div> ) }
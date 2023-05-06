import styles from './About.module.scss'
import Image from 'next/image'

const About = ({ avatar }) => {
    return (
        <>
            <section id="about" className={styles.about}>
                <h1 className={styles['about__heading-text']}>About me</h1>
                <div className={styles['about__content']}>
                    <img src={avatar} className={styles['about__avatar']} />
                    <p className={styles['about__text']}>
                        Olá, meu nome é Gabriel Rizzo! Sou desenvolvedor frontend há 5 anos e sou apaixonado por Js e em aprender
                        sobre desenvolvimento de software! Nesse site você pode ver um pouco dos projetos abertos nos quais eu atuei.
                        Tenho experiência em Vue e React, e já trabalhei com tecnologias como Electron, aplicações mobiles
                        híbridas feitas com nativescript-vue, SASS, assim como Javascript, HTML & CSS. Para mais informações, acesse
                        minhas redes e sintam-se livres para entrar em contato! :D
                    </p>

                    <div className={styles['about__social-media']}>
                        <a href="https://www.linkedin.com/in/gabriel-sc-rizzo/" target="_blank">
                            <Image src='/linkedin-logo.svg' alt="linkeding-logo" width={32} height={32}></Image>
                        </a>
                        <a href="https://github.com/gabrielrizzo" target="_blank">
                            <Image src='/octocat.svg' width={32} height={32} alt="octocat-logo"></Image>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

About.displayName = 'About'

export default About
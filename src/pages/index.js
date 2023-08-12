import Card from '@/components/molecules/Card/Card'
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { useMemo } from 'react'
import fetchGitHubData from '@/services/github'
import About from '@/components/molecules/About/About'

export default function Home({ gitHubData }) {
  const renderCards = useMemo(() => {
    if (!gitHubData) return

    return gitHubData?.repos?.map((repo) => (
      <Card
        key={repo.name}
        label={repo.name}
        description={repo.description}
        img={'/github.svg'}
        stars={repo.stargazers_count}
        link={repo.html_url}
      />
    ))
  }, [])

  return (
    <>
      <Head>
        <title>Gabriel.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.home}>
        <h1 className={styles['home__heading-text']}>Projetos</h1>
        <section id="cards-repo" className={styles.home__section}>
          {renderCards}
        </section>
        <About avatar={gitHubData?.user?.avatarUrl} />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const gitHubData = await fetchGitHubData()

  return { props: { gitHubData } }
}

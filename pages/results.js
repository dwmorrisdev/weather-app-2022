import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Results() {
  return (
    <Layout>
      <main>
        <p className={styles.description}>
          Results
        </p>
        <p>Cater this page to the response we get from openweatherapi.org</p>
      </main>
    </Layout>
  )
}
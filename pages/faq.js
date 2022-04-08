import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Faq() {
  return (
    <Layout>
      <main>
        <p className={styles.description}>
          Frequently Asked Questions
        </p>
        <p>toggleable bullet list</p>
      </main>
    </Layout>
  )
}
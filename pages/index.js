import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Typography, TextField, Button, Grid } from '@material-ui/core'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <Typography variant="h2">Weather App</Typography>
        <Typography variant="p" gutterBottom>
          Get started by searching
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item sx={6}>
            <TextField id="filled-basic" label="Search by location" variant="filled" />
          </Grid>
          <Grid item sx={6} className={styles.button}>
            <Button variant="outlined">Search</Button>
          </Grid>
        </Grid>
      </main>
    </Layout>
  )
}

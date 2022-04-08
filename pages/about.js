import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'
import Layout from '../components/layout'
import {Grid, Typography, Paper } from '@material-ui/core'

export default function About() {
  return (
    <Layout>
      <main className={`${styles.about} ${styles.container}`}>
        <section className={styles.header}>
          <Typography variant="h2" align="center">About Weather App</Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Find weather by searching a location
          </Typography>
        </section>  
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <Paper className={styles.container}>
              <Typography variant="h4" align="center">Technologies</Typography>
              <ul>
                <li><Link href="https://nextjs.org/">Next.Js</Link></li>
                <li><Link href="https://mui.com/">Material UI</Link></li>
                <li><Link href="https://openweathermap.org/">OpenWeatherApi</Link></li>
                <li><Link href="www.unsplash.com">Unsplash.com images</Link></li>
              </ul>
              <Typography variant="body2" paragraph align="left">
                list of Technologies and or summary about{' '}
                how they were used in association with this project. add links
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={4}>
            <Paper className={styles.container}>
              <Typography variant="h4" align="center">APIs</Typography>
              <Typography variant="body2" paragraph align="left">
              Openweather NWP (numerical weather prediction) allows to calculate{' '}
              weather data for any location. We use proprietary convolutional{' '}
              neural network that collects and processes wide range of data sources{' '}
              to cover any location and consider the local nuances of climate. ML{' '}
              technology allows us to reach resolution about 500 m and very high{' '}
              accuracy between 90% and 100% with inaccuracy about 1%. Amongst data{' '}
              sources we feed to the NWP are 82,000 weather stations spread globally;{' '}
              national meteorological agencies (NOAA, Environment Canada, Met Office,{' '}
              etc.), radars, weather satellites.
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={4}>
            <Paper className={styles.container}>
              <Typography variant="h4" align="center">Developer</Typography>
              <Typography variant="body2" paragraph align="left">
                Discuss self and background,{' '}
                link to personal site and social media
              </Typography>
              <Typography variant="body2">
                "At vero eos et accusamus et iusto odio dignissimos ducimus{' '}
                qui blanditiis praesentium voluptatum deleniti atque corrupti{' '}
                quos dolores et quas molestias excepturi sint occaecati cupiditate{' '}
                non provident, similique sunt in culpa qui officia deserunt mollitia{' '}
                animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est{' '}
                et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi{' '}
                optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,{' '}
                omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem{' '}
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut{' '}
                et voluptates repudiandae sint et molestiae non recusandae. Itaque earum{' '}
                rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores{' '}
                alias consequatur aut perferendis doloribus asperiores repellat."
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </Layout>
  )
}

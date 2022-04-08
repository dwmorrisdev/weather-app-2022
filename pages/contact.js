import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import Link from 'next/link'
import Layout from '../components/layout'
import {Grid, Typography, TextField, Button } from '@material-ui/core'
import utilStyles from '../styles/utils.module.css'
import DevCard from '../components/contact/devCard'

export default function Contact() {
  const dustin = {
    name: 'Dustin Morris',
    title: 'Lead UI Developer',
    quote: 'Chasing down the light',
    img: {
      url: "/images/devs/dustin_2020.jpg",
      alt: 'dustin'
    }
  };
  const wyatt = {
    name: 'Wyatt Earp',
    title: 'Gunslinger',
    quote: 'I\'m comin\' and hell\'s comin\' with me',
    img: {
      url: "/images/devs/earp.jpeg",
      alt: 'wyatt earp'
    }
  };
  const cindy = {
    name: 'Cindy Lou Who',
    title: 'Lead API Developer',
    quote: 'Christmas time is coming',
    img: {
      url: "/images/devs/lady.jpeg",
      alt: 'cindy lou who'
    }
  };
  return (
    <Layout>
      <main className={`${styles.contact} ${styles.container}`}>
      <section className={styles.header}>
          <Typography variant="h2" align="center">Contact the Developers</Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            About the developer and contact information
          </Typography>
        </section> 
        <Grid container spacing={2}>
          <Grid lg={4}>
            <Typography variant="h4" align="center" className={styles.bottomSpacing}>About the Team</Typography>
            <Grid container spacing={2} className={styles.developer}>
              <DevCard seq={1} developer={dustin} />
              <DevCard seq={2} developer={wyatt} />
              <DevCard seq={3} developer={cindy} />
            </Grid>
          </Grid>
          <Grid lg={4}>
            <Typography variant="h4" align="center">Contact Form</Typography>
            <Grid container>
              <Grid item lg={12}>
              <form className={styles.container}>
                <TextField label="Full Name" fullWidth/>
                <TextField label="Email" fullWidth/>
                <TextField label="Message" fullWidth/>
              </form>
              <Grid item lg={12} className={styles.button}>
                <Button type="submit">Submit</Button>
              </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={4}>
            <Typography variant="h4" align="center" gutterbottom>About this project</Typography>
            <Typography variant="body2" paragraph>"But I must explain to you how all this{' '}
            mistaken idea of denouncing pleasure and praising pain was born and I{' '}
            will give you a complete account of the system, and expound the actual{' '}
            teachings of the great explorer of the truth, the master-builder of human{' '}
            happiness. No one rejects, dislikes, or avoids pleasure itself, because it{' '}
            is pleasure, but because those who do not know how to pursue pleasure rationally{' '}
            encounter consequences that are extremely painful. Nor again is there anyone{' '}
            who loves or pursues or desires to obtain pain of itself, because it is pain, but{' '}
            because occasionally circumstances occur in which toil and pain can procure him some{' '}
            great pleasure. To take a trivial example, which of us ever undertakes laborious physical{' '}
            exercise, except to obtain some advantage from it? But who has any right to find fault{' '}
            with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who{' '}
            avoids a pain that produces no resultant pleasure?"</Typography>
          </Grid>
          
        </Grid>
      </main>
    </Layout>
  )
}
import {Grid, Typography, Paper } from '@material-ui/core'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/Contact.module.css'

export default function DevCard({seq, developer}) {
  return (
    <main>
      <Grid container direction="row" spacing={2} justifyContent="center">
        {seq % 2 === 0 ? (
          <>
            <Grid item xl={6}>
              <Image
                priority
                src={developer.img.url}
                className={utilStyles.borderCircle}
                height={200}
                width={150}
                alt={developer.img.alt}
              />
            </Grid>
            <Grid item xl={6}>
              <Typography variant="h5">{developer.name}</Typography>
              <Typography variant="subtitle1">{developer.role}</Typography>
              <Typography variant="body2">{developer.quote}</Typography>
              <Typography variant="body2">developer.socialMediaArray.map->link.icon</Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xl={6}>
              <Typography variant="h5" align="right">{developer.name}</Typography>
              <Typography variant="subtitle1" align="right">{developer.role}</Typography>
              <Typography variant="body2" align="right">{developer.quote}</Typography>
              <Typography variant="body2" align="right">developer.socialMediaArray.map->link.icon</Typography>
            </Grid>
            <Grid item xl={6}>
              <Image
                priority
                src={developer.img.url}
                className={utilStyles.borderCircle}
                height={200}
                width={150}
                alt={developer.img.alt}
              />
            </Grid>
          </>
        )}
      </Grid>
    </main>
  )
}
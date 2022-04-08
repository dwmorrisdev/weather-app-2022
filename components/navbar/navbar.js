import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import classes from './navbar.module.css'


export default function Navbar() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography variant="h4">
            Weather App 2022
          </Typography>
        </div>
        <div className={classes.navlinks}>
          <Link href="/" >
            <a className={classes.link}>Home</a>
          </Link>
          <Link href="/about" className={classes.link}>
            <a className={classes.link}>About</a>
          </Link>
          <Link href="/contact" className={classes.link}>
            <a className={classes.link}>Contact</a>
          </Link>
          <Link href="/faq" className={classes.link}>
            <a className={classes.link}>FAQ</a>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}
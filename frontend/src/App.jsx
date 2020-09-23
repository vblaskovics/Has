import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar, Toolbar, Button, Typography,
} from '@material-ui/core'

const useStyles = makeStyles({
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
  },
})

const App = () => {
  const [msg, setMsg] = useState([])
  const classes = useStyles()

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((res) => res.json())
      .then((res) => setMsg(res.message))
  })

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          { msg }
        </Typography>
        <section className={classes.rightToolbar}>
          <Button color="inherit">Login</Button>
        </section>
      </Toolbar>
    </AppBar>
  )
}

export default App

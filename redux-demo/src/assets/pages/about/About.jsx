import React from 'react'
import styles from './About.module.css'
import { useSelector } from 'react-redux'

function About() {
    let username=useSelector((state)=>{return state.user.value})

  return (
    <div className={styles.container1}>{username}About</div>
  )
}

export default About
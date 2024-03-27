import React from 'react'
import styles from "./SubFooter.module.css"
import { Link } from 'react-router-dom'

const SubFooter = () => {
  return (
    <footer className={styles.subfoorteBOx}>
      <div className={`${styles.innerBox} globalWidth flex`}>
      <p style={{color:"#d0dbf8"}}>2023 <b style={{color:"#fff"}}>Clentac.</b> All Rights Reserved by Profile Name.</p>
      <Link className={styles.links}>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default SubFooter

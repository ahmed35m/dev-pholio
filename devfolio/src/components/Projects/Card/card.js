import React from 'react'
import * as styles from './card.module.css'

const Card = (props)=>{
    return (
        <div className={` ${styles.card} ${styles.c1}`}>
            <div className={styles.cardimage}>
              {/* <span
                  className={}"material-icons material-icons-outlined"
                  style="font-size: 96px"
                >
                  badge
                </span> */}
            </div>
            <div className={styles.cardtitle}>Portfolio</div>
            <div className={styles.carddesc}>
              Personal Portfolio website mades using abc
            </div>
          </div>
    );

}
export default Card;
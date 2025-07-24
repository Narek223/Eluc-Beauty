import React from 'react'
import styles from './profile.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { IoMdContact } from "react-icons/io";


export default function Profile() {

      const {  values } = useSelector((state) => state.signin);
  return (
    <div className={styles.profileContainer}>
<p>Hi {values.FullName} <IoMdContact className={styles.icon} /> </p>
    </div>
  )
}

import styles from './Welcome.module.css'

export default function Welcome() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>HI!</h1>
      <h3 className={styles.sub_heading}>WELCOME TO SUPER TEXT EDITOR</h3>
    </div>
  )
}

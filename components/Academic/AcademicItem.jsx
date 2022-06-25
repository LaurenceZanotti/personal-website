import styles from "./AcademicItem.module.css"

export default function AcademicItem(props) {
  return (
    <div className={`${styles.container_academic_item} ${props.inverted && styles.inverted}`}>
      <div className={styles.logo}>
        <img src={`imgs/${props.logo}-logo.png`} alt={`Logo ${props.logo}`} />
      </div>
      <div className={styles.item_content}>
        <h3>{props.school}</h3>
        <p>{props.course}</p>
        <p>{props.start_year} - {props.end_year}</p>
      </div>
    </div>
  )
}

AcademicItem.defaultProps = {
  end_year: "em andamento"
}
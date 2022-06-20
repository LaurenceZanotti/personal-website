export default function AcademicItem(props) {
  return (
    <div className="container-academic-item">
      <div className="logo"></div>
      <div>
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
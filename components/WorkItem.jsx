export default function WorkItem(props) {
  return (
    <div className="container-workitem">
        <div className="item-img"></div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div>Saiba mais</div>
    </div>
  )
}
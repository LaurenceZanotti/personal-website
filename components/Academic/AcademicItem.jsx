export default function AcademicItem(props) {
  return (
    <div className={`academic-item-container py-6 ${props.className}`}>
      <div className="academic-item-image w-[8rem] h-[8rem] bg-white rounded-full p-4 flex justify-center items-center">
        {props.logo ? <img src={`imgs/${props.logo}-logo.png`} alt={`Logo ${props.logo}`} /> : null}
      </div>
      <div className="academic-item-body max-w-xs">
        {props.children}
      </div>
    </div>
  )
}

AcademicItem.defaultProps = {
  logo: null
}
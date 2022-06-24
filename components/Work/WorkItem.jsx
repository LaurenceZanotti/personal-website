import styles from './WorkItem.module.css'
import { TiPlus } from 'react-icons/ti';

export default function WorkItem(props) {
  // Renderizar imagem ou ícone (se não tiver)
  let image = props.img ? 
    <img src={`/imgs/${props.img}`} alt="Imagem do projeto" className={styles.item_img}/> :
    <div className={styles.achou_interessante}>
      <TiPlus/>
    </div>

  return (
    <div className={styles.container_work_item}>
        {image}
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link} className={styles.saiba_mais_btn}>Saiba mais</a>
    </div>
  )
}
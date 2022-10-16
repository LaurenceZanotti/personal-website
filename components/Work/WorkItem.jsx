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
    <div className='m-auto lg:m-16 xl:m-32'>
        <div>
        {image}
        </div>
        <div>
          <h3 className='mt-3 text-base sm:text-xl font-bold'>{props.title}</h3>
          <p className='text-xs lg:text-sm'>{props.description}</p>
          <a href={props.link} className={`text-xs lg:text-sm ${styles.saiba_mais_btn}`} target="_blank" rel='noreferrer'>{props.button}</a>
        </div>
    </div>
  )
}

WorkItem.defaultProps = {
  button: 'Saiba mais'
}
import Image, { type StaticImageData } from 'next/image'
import { TiPlus } from 'react-icons/ti'

import styles from './WorkItem.module.css'

interface WorkItemProps {
  img?: StaticImageData
  title: string
  description: string
  link: string
  button?: string
}

export default function WorkItem({ img, title, description, link, button = 'Saiba mais' }: WorkItemProps) {
  // Renderizar imagem ou ícone (se não tiver)
  const image = img ? (
    <Image
      src={img}
      alt="Imagem do projeto"
      className={styles.item_img}
    />
  ) : (
    <div className={styles.achou_interessante}>
      <TiPlus/>
    </div>
  )

  return (
    <div className='m-auto lg:m-16 xl:m-32'>
        <div>
        {image}
        </div>
        <div>
          <h3 className='mt-3 text-base sm:text-xl font-bold'>{title}</h3>
          <p className='text-xs lg:text-sm'>{description}</p>
          <a href={link} className={`text-xs lg:text-sm ${styles.saiba_mais_btn}`} target="_blank" rel='noreferrer'>{button}</a>
        </div>
    </div>
  )
}

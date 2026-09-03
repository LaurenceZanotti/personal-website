import type { ReactNode } from 'react'
import Image from 'next/image'

import estacioLogo from '../../public/imgs/estacio-logo.png'
import harvardLogo from '../../public/imgs/harvard-logo.png'
import etecLogo from '../../public/imgs/etec-logo.png'

const logos = {
  estacio: estacioLogo,
  harvard: harvardLogo,
  etec: etecLogo,
}

interface AcademicItemProps {
  logo?: keyof typeof logos | null
  className?: string
  children: ReactNode
}

export default function AcademicItem({ logo = null, className, children }: AcademicItemProps) {
  return (
    <div className={`academic-item-container py-6 ${className}`}>
      <div className="academic-item-image w-[8rem] h-[8rem] bg-white rounded-full p-4 flex justify-center items-center">
        {logo ? (
          <Image src={logos[logo]} alt={`Logo ${logo}`} />
        ) : null}
      </div>
      <div className="academic-item-body max-w-xs">
        {children}
      </div>
    </div>
  )
}

import HeroBanner from '@/components/common/Banner'
import DepartmentsInfo from '@/components/home/DepartmentsInfo'
import MadrasaIntro from '@/components/home/MadrasaIntro'

import React from 'react'

function madrasaIntro() {
  return (
    <div><HeroBanner/>
        <MadrasaIntro/>
        <DepartmentsInfo/>
    
    </div>
  )
}

export default madrasaIntro
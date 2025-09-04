// import HeroBanner from '@/components/common/Banner'
// import DepartmentsInfo from '@/components/home/DepartmentsInfo'
// import MadrasaIntro from '@/components/home/MadrasaIntro'

// import React from 'react'

// function madrasaIntro() {
//   return (
//     <div><HeroBanner/>
//         <MadrasaIntro/>
//         <DepartmentsInfo/>
    
//     </div>
//   )
// }

// export default madrasaIntro


import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const HeroBanner = dynamic(() => import('@/components/common/Banner'), { ssr: true }); // SSR for above-the-fold
const MadrasaIntro = dynamic(() => import('@/components/home/MadrasaIntro'), { ssr: false });
const DepartmentsInfo = dynamic(() => import('@/components/home/DepartmentsInfo'), { ssr: false });

export default function MadrasaIntroPage() {
  return (
    <div>
      {/* HeroBanner is critical, so SSR is enabled */}
      <HeroBanner />

      {/* Lazy load non-critical sections */}
      <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
        <MadrasaIntro />
        <DepartmentsInfo />
      </Suspense>
    </div>
  );
}

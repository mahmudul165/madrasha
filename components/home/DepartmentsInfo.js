
// import React from "react";

// const DepartmentsInfo = () => {
//   return (
//     <section className="py-5 bg-light text-dark">
//       <div className="container">
//         <section id="academics" className="bg-light py-5">
//         <div className="container ">
//           <h2 className="section-title">কোর্স সমুহ</h2>
//           <div className="row text-center ">
//             {['হিফজ বিভাগ', 'নূরানী শিক্ষা', 'সাধারণ শিক্ষা', 'তাজবিদ বিভাগ'].map((title, index) => (
//               <div className="col-md-3 mb-3" key={index}>
//                 <div className="card  p-4 border-0 shadow-sm">
//                   <h5>{title}</h5>
//                   <p>
//                     {{
//                       'হিফজ বিভাগ': 'পূর্ণ কুরআন মুখস্থ করানো হয়।',
//                       'নূরানী শিক্ষা': 'শিশুদের জন্য মৌলিক ইসলামী শিক্ষা।',
//                       'সাধারণ শিক্ষা': 'প্রাথমিক থেকে অষ্টম শ্রেণি পর্যন্ত।',
//                       'তাজবিদ বিভাগ': 'সঠিকভাবে কুরআন তিলাওয়াত শেখানো হয়।'
//                     }[title]}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> 
//       </div>
//     </section>
//   );
// };

// export default DepartmentsInfo; 





import React from "react";
import { motion } from "framer-motion";

const DepartmentsInfo = () => {
  const departments = [

       
  
 

    {
      title: "নূরানী বিভাগ",
      desc: "শিশু শ্রেণী হইতে তৃতীয় শ্রেণি।",
      color: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
    },
    {
      title: "হিফজুল কুরআন",
      desc: "শিশুদের জন্য মৌলিক ইসলামী শিক্ষা।",
      color: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
      title: "কিতাব বিভাগ",
      desc: "",
      color: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
    },
   
    {
      title: "সাধারণ শিক",
      desc: "শিশু শ্রেণী হইতে তৃতীয় শ্রেণি হবে।",
      color: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)"
    }
  ];

  return (
    <section className="py-5 bg-white text-dark">
      <div className="container">
        <h2 className="section-title text-center mb-5">কোর্স সমূহ</h2>
        <div className="row text-center">
          {departments.map((dept, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                className="card p-4 border-0 text-white"
                style={{
                  background: dept.color,
                  borderRadius: "15px",
                  minHeight: "180px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "all 0.3s ease"
                }}
              >
                <h5>{dept.title}</h5>
                <p className="mt-2">{dept.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsInfo;





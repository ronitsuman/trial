import React from 'react'
import {motion ,useScroll} from "motion/react"
import Index from './Index'

const Framer = () => {
  const scroll = useScroll().scrollYProgress
  console.log(scroll)
  return (
    
    <>
    <Index/>
     <motion.div
     style={{
      scaleX:scroll
      
     }}
     className='bg-red-500 w-full h-3 fixed top-0 left-0 origin-left '>

     </motion.div>
     
      <motion.div
      animate={{x:[0,600,600,0,0],
        y:[0,0,400,400,0],
        rotate:[0,360,0,-360]
      }}
      transition={{
        duration:4,
      
        ease:"anticipate",
        repeat:Infinity
      }}
      className='w-[100px] h-[200px] border '
      >

      </motion.div>
      <motion.div
      whileFocus={{
        backgroundColor:'green'
      }}
      className='flex items-center justify-center '>
      <div className='p-22 border w-[600px] h-[400px]'>
        <h1 className='text-center uppercase'>box Drag animation</h1>
        <p className='text-center'>just click on box you can move it inside this box  </p>
        <motion.div
        drag
        whileDrag={{
          color:'red',
          backgroundColor:"yellow",
          borderRadius:'50%'
        }}
        whileTap={{
          
        }}
        whileHover={{
          backgroundColor:'green'
        }}
        dragConstraints={{
          left:20,
          top:20,
          right:500,
          bottom:100
        }}
        className='w-[100px] h-[200px] border'>

        </motion.div>
      </div>

      </motion.div>
      
      <motion.h1
      initial={{
        opacity:0,
        width:0
      }}
      animate={{
        opacity:1,
        width:800
      }}
      transition={{
        duration:10,
        ease:"linear",
        repeat:Infinity,
        repeatType:'reverse'
      }}
      style={{
        display:"inline-block",
        whiteSpace:"nowrap",
        overflow:'hidden',
        borderRight:"2px solid black"
      }}
      className='text-4xl text-center no-underline  '>Welcome to Scroll trigger scroll down and watch it </motion.h1>
      <p className='p-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis dignissimos harum ipsa tenetur nostrum voluptatum minus aperiam officia numquam. Id neque saepe eveniet illo nulla quia eum alias tempore numquam. Vitae, blanditiis! Dolorum, quod? Vero alias fugiat numquam velit sint necessitatibus voluptates harum quia veniam? Amet quae repellat quos, sed, asperiores id expedita ipsum dolorum architecto reprehenderit assumenda beatae laboriosam obcaecati iusto harum. Dolor aperiam fuga ab alias optio? Totam vero a libero fugiat. Excepturi perspiciatis, facilis error, ipsa aliquid earum dicta minima omnis quidem esse, nostrum aspernatur non. Aliquam libero quia explicabo illum natus voluptate maiores quibusdam porro hic amet quisquam ratione alias exercitationem, nemo, velit saepe. Animi praesentium repellendus nihil laboriosam, molestias nisi distinctio, architecto voluptates corrupti illum soluta ratione sequi! Temporibus, adipisci odit modi non minus, est in quae aperiam perferendis, rem atque animi quas. Ratione excepturi animi porro fugiat eveniet voluptatibus dolores cumque eum ullam quibusdam neque necessitatibus <br/>sint eius repudiandae voluptatum sed nesciunt corrupti itaque hic doloremque, fugit assumenda nobis. Quibusdam doloremque modi possimus cupiditate, repudiandae obcaecati laborum? Nihil ipsa ea explicabo consequuntur, minima alias, quia aperiam quo dignissimos, doloribus laboriosam iure cumque cupiditate numquam sit rerum sequi quibusdam itaque! Tempora quam, sequi mollitia ipsam, tempore reprehenderit necessitatibus laborum odit impedit corrupti non quo quod porro pariatur ea repellendus, aliquid minima totam placeat. Quidem magnam molestias fugiat possimus doloremque delectus temporibus saepe nesciunt! Incidunt natus commodi unde est maiores ullam, perspiciatis quo, velit eligendi numquam voluptates necessitatibus minima reiciendis. Doloremque voluptas soluta, molestiae cum tempore excepturi dicta dolores. Rem esse asperiores non vero quaerat, enim id natus vel, consequuntur animi minima suscipit! Consequuntur rem cumque reiciendis! Error maiores, culpa dolorem, temporibus a molestiae voluptatibus aut, eveniet ea debitis quis.<br/> Placeat eius impedit dolores aut harum adipisci mollitia facilis magnam beatae laboriosam repudiandae, doloribus aperiam tempora obcaecati numquam quidem voluptatem officiis delectus vero? Ducimus assumenda repudiandae expedita unde incidunt, porro adipisci obcaecati minima facilis doloribus eos deserunt sunt aspernatur magnam nulla quasi architecto, totam dolore! Vel sint voluptas autem laborum sed sequi alias eligendi molestiae hic, consectetur provident expedita natus perferendis ut, id animi molestias culpa minus quam magni optio. Dignissimos quos quasi cum iusto earum, eius veniam esse illo magni, doloremque minima tempora. Et vitae voluptatum, qui consectetur, quam optio autem ratione error nam hic saepe. Dolorem hic laudantium est a saepe numquam fugiat incidunt voluptas vero eligendi voluptatem, esse facere assumenda voluptatum blanditiis tenetur magni architecto non consectetur eum porro reiciendis temporibus, ipsam necessitatibus. Dignissimos voluptatibus, dolorem magni tempora, excepturi non distinctio ab molestiae natus ullam repellendus atque sit. Illum, ab. Quas officiis doloremque a consectetur? Reiciendis repellat nisi, dolorum quia ratione dolores voluptates illum magnam corrupti natus excepturi esse non, facilis vero dicta maiores voluptatem nostrum quasi numquam, pariatur accusantium ducimus accusamus? Pariatur molestiae nam necessitatibus maxime earum tempore similique veniam, neque deserunt doloribus temporibus architecto quas consequuntur provident molestias debitis doloremque sapiente natus! Ratione iusto consequatur, inventore quos minima adipisci beatae fugiat voluptatum asperiores eos exercitationem, ducimus provident, magnam numquam nostrum consequuntur?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus, quibusdam, vel ut aspernatur sint repellat suscipit nostrum porro voluptates aliquam libero dolore laboriosam facere quia delectus laudantium explicabo ea perspiciatis, reiciendis rerum ducimus dolorum. Tempora explicabo nesciunt totam? Dolorum odit velit sunt. Mollitia eaque esse aspernatur repellat, possimus excepturi neque ipsa at itaque quaerat, perspiciatis, ab illo perferendis qui atque? Doloribus aspernatur a modi excepturi laboriosam deleniti perspiciatis. Corporis mollitia esse quasi, ad officia possimus est rerum ut, nobis molestias velit dolores quia! Quis sed ad dicta enim quaerat, soluta labore, architecto corrupti error officia laboriosam harum iure aperiam, similique iste voluptatem? Quis at exercitationem voluptatibus, facere doloribus illo in iure sequi odio harum ut neque. Animi illum fugit voluptatibus amet? Officia ex nostrum quod beatae ad hic iusto? Provident, nisi fugit, mollitia at quod aliquid vitae nam totam eaque nihil, commodi omnis iure! Repudiandae cum veniam eveniet, adipisci architecto corporis voluptatem vel asperiores temporibus accusantium doloribus quia nesciunt minus, incidunt inventore voluptates odit exercitationem ad minima ut. Saepe repudiandae asperiores, eius velit consequuntur quod excepturi corporis exercitationem repellendus, officiis quos error, iusto officia? Error aperiam quidem labore cumque voluptatem cum accusantium hic nisi qui earum reiciendis accusamus vero rerum quisquam omnis in quaerat ducimus laudantium officia odit blanditiis, eius optio porro quod! Tenetur nisi neque eius, dicta fugiat placeat exercitationem, labore unde voluptate earum illum, nulla rerum! Reprehenderit officia est commodi, voluptatum soluta aperiam mollitia eligendi, dolores sit sed cumque velit assumenda expedita atque consequatur eos a, voluptate quia laboriosam dignissimos ullam nobis. Harum enim non aliquid alias et aliquam, magni in ut voluptatem laborum illum. Magnam, laborum repellat. Accusamus, quae fugiat! Nihil consequatur quibusdam iure sapiente hic consectetur corporis omnis, voluptates at! Commodi cupiditate veritatis, laboriosam temporibus nisi quos error, dignissimos labore, voluptate porro consequatur nam ab doloremque incidunt? Veniam soluta ullam molestias veritatis facilis dolorum laudantium placeat. Quae ullam voluptatum architecto soluta, eos reprehenderit perspiciatis magni eaque error? Libero, esse doloribus consectetur modi hic architecto sint maxime earum doloremque? Aliquid expedita ipsam magni quos vitae. Natus deleniti maiores consequuntur doloremque corporis. Ab ea, suscipit laudantium quasi alias aspernatur distinctio quos eum assumenda veritatis dolor necessitatibus voluptatibus aliquam dolore reprehenderit dolores nesciunt facere accusamus quia atque magnam voluptates nam maxime? Illum labore architecto itaque repellat fugit nobis placeat! Rem veritatis, magnam suscipit, eligendi doloremque dolore reiciendis assumenda reprehenderit, deleniti similique ullam tempora facere recusandae fugit. Ab, enim sint cumque distinctio exercitationem, hic atque aut, amet ipsam perspiciatis corrupti! Quo, aliquid accusantium! Est quidem, sunt ad praesentium quo autem ullam ipsa quae voluptatem sapiente, illum harum maiores suscipit perferendis itaque id iure soluta! Eligendi itaque sit ducimus perspiciatis veniam voluptas cum, ea molestias cupiditate ex velit quia rerum nemo. Voluptatibus dicta asperiores praesentium temporibus nam consequatur? Explicabo repellat sunt repudiandae neque fuga ea quo quaerat reprehenderit beatae distinctio similique, possimus voluptas, illum iure deserunt aperiam, accusantium commodi quia incidunt. Enim facere totam ratione saepe beatae pariatur exercitationem officia aspernatur tempore nesciunt! Nulla explicabo similique atque cupiditate blanditiis, voluptates odio et, cum maiores recusandae officiis sint aliquid, aliquam praesentium eos nemo molestiae architecto sapiente perferendis nisi velit quas voluptate? Beatae saepe, magnam quis commodi modi magni quibusdam veritatis accusantium facere? Blanditiis cupiditate non eius optio soluta recusandae obcaecati, earum dolor fugit laudantium beatae id, rerum enim fuga incidunt hic sed ipsum magnam! Odit recusandae deleniti facilis totam. Asperiores, minima enim commodi, fugiat amet non quas blanditiis atque ab architecto suscipit voluptate illo minus laudantium. Excepturi id repellendus nesciunt consequatur libero suscipit eius cumque, recusandae soluta nisi commodi autem maiores! Officia voluptatum sed quam iste nihil modi eos voluptatibus repudiandae non, nemo laborum molestias ad architecto quos. Iusto sunt culpa dicta provident libero assumenda asperiores minus, veniam aliquam ab consectetur consequuntur incidunt, officiis minima, aliquid quasi ipsa facere saepe tempora soluta vel hic quo debitis dolor. Maiores vero laudantium earum incidunt distinctio alias, cumque voluptatum dolore nostrum beatae. Tempore doloribus iusto, cumque atque corporis tenetur pariatur veniam quo doloremque quidem perferendis odio, expedita aspernatur est ex. Magnam, distinctio voluptatum similique earum, in facere dolores blanditiis maxime quo harum ratione? Provident tempora ea exercitationem est ratione consectetur sapiente labore nulla fuga, numquam, molestias tenetur eaque! Error praesentium porro sunt recusandae voluptatum quaerat distinctio optio soluta ipsa eos suscipit ratione aspernatur blanditiis accusantium laboriosam mollitia cum earum ipsam, qui aliquid, nesciunt, laudantium quis dolores! Saepe aliquam in maiores cumque voluptate provident sint, eveniet quos accusamus non est praesentium atque ex sapiente, nostrum doloremque veniam eius labore qui amet ratione. Animi optio architecto accusantium, dolorum voluptatem itaque cumque vitae! Consequatur non ad voluptatibus saepe, eligendi tempore voluptatem provident voluptatum eaque fuga ducimus reprehenderit sunt cum facere doloribus reiciendis, dolore quis totam! Qui esse, laboriosam eum in corporis incidunt iusto veniam laborum itaque quisquam sed pariatur accusantium. Atque, possimus officia molestias esse assumenda repellendus? Nulla magni at, earum rerum tenetur tempore voluptas ipsam architecto, minima voluptatibus reiciendis dignissimos. Tempore excepturi deleniti suscipit nam, quo fugit a earum incidunt provident nulla odit quos atque corporis laborum vel ipsam itaque. Omnis exercitationem delectus, dolore at minima blanditiis eligendi? Deserunt voluptatum porro, aperiam totam eius aut dolorum quae beatae sint molestias in consequuntur dicta minus? Quia debitis sequi rem, ipsam dicta eligendi velit officiis cum recusandae animi sed perferendis id minima, ducimus at quae laboriosam aut cupiditate illum. Quas accusantium unde porro atque deleniti sit veritatis nesciunt officiis, voluptas quo animi, possimus natus asperiores alias blanditiis maiores! Est iusto facilis voluptatum in, error explicabo eveniet earum? Iusto recusandae exercitationem itaque ipsa quae perspiciatis rerum saepe aut expedita? Et a quisquam itaque, quaerat, voluptate explicabo eos inventore laborum animi obcaecati rem sunt, culpa optio dicta corporis! Perferendis nostrum rem obcaecati accusamus ipsum nam? Sed esse voluptates architecto voluptatem placeat, sint quasi dolore vero repudiandae, enim laudantium autem officiis libero explicabo doloremque, blanditiis ducimus! Quas libero voluptatem modi similique obcaecati? Consectetur reprehenderit neque dicta, quos pariatur reiciendis quia deleniti id eaque eum quasi culpa aut perspiciatis nesciunt. Nostrum libero aspernatur quia exercitationem delectus modi molestiae perferendis tempora consequuntur iure?</p>
    </>
  )
}

export default Framer
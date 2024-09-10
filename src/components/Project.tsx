import { useContext, useEffect, useRef, useState } from "react";
import { useScroll } from "../libs/hooks/useSchroll";
import { SectionContext } from "../libs/utils/context";
// import { motion } from "framer-motion";

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useContext(SectionContext);

  useScroll(setIsVisible, projectRef, () => {}, 0.5);
  useEffect(() => {
    if (isVisible) {
      dispatch({ section: "projects" });
    }
  }, [isVisible]);
  return (
    <div id="projects" ref={projectRef} className="min-h-screen relative">
      <div className="absolute bg-gradient-to-b from-primary-dark via-primary-dark/0 to-primary-dark top-0 h-full w-full"></div>
      <div className="py-10 px-20 relative">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique in
        omnis at exercitationem dolorum voluptatem ipsam, fugit minima itaque
        cupiditate tenetur rerum. Cum, vitae aliquid! Sapiente animi ratione
        voluptate nam dolor obcaecati officia quos velit, excepturi aperiam
        omnis illum eum rerum? Quidem, quia exercitationem. Voluptate corporis
        consequatur laborum, aut sequi voluptates, nostrum doloribus quibusdam
        numquam possimus doloremque nobis mollitia similique. Ducimus tempore
        quibusdam provident velit quod voluptates, sapiente placeat, modi illo
        fuga exercitationem veniam dolorum consequuntur. Laudantium autem fugiat
        laboriosam perspiciatis sequi laborum exercitationem inventore pariatur
        atque ullam. Quisquam, ut odio. Quod fugit, ab sed soluta ex optio
        aliquam pariatur nam consequatur, libero a quibusdam numquam fuga unde
        odio, itaque consectetur? Autem distinctio ipsa veniam dolore? Impedit
        recusandae deleniti est, dicta dignissimos rerum exercitationem
        repudiandae eligendi! Eaque iure, vel eligendi quibusdam ea
        necessitatibus magni? Eligendi mollitia alias aliquid beatae qui quasi
        labore rerum, doloremque nostrum, numquam illo architecto non a
        dignissimos sapiente rem explicabo ut harum. Beatae impedit voluptatibus
        dignissimos rerum nesciunt neque minima possimus animi a porro?
        Voluptatum nihil optio dolorum fugit dolore id porro minima,
        voluptatibus architecto nobis distinctio explicabo est accusamus
        asperiores blanditiis numquam sed deleniti, beatae doloribus quisquam
        tempora! Sunt architecto quaerat, voluptatibus sapiente cupiditate minus
        quo quam nemo laboriosam laudantium eveniet corrupti cumque commodi at
        tempore ex? Eos explicabo ab soluta unde aliquam minima hic maiores
        tempora corrupti iure quibusdam, laboriosam aliquid esse commodi facilis
        et laborum quos provident? Dicta quaerat corrupti eum, a maiores
        consequuntur optio. Temporibus nihil et error, maxime animi placeat unde
        voluptatibus nesciunt fugiat tempore reprehenderit eum perferendis esse
        blanditiis beatae iusto voluptatum. Deserunt, amet aliquid laboriosam
        eum voluptates tempora beatae, eius quos repellat numquam inventore
        accusantium possimus fugiat ullam sequi iure. Veniam maxime sapiente
        nulla vel totam soluta ex voluptate ab maiores laborum illo quas
        reprehenderit in unde perferendis harum distinctio, beatae laudantium
        iusto doloremque earum aut suscipit. Minus velit delectus natus corporis
        sunt eligendi nesciunt! Maxime numquam ex voluptas, dolorem ut fuga
        magni omnis a laudantium quidem aliquid obcaecati hic alias? Aperiam at
        officia velit et dicta sapiente ducimus exercitationem corrupti,
        quisquam vel cum aliquid sequi. Fuga id tempora molestiae corrupti
        officiis eligendi nihil quisquam aut. Accusamus ad error, placeat maxime
        ut eveniet aut temporibus, cum nisi a quisquam officiis delectus quae
        necessitatibus tempore iure voluptas labore unde explicabo. Alias sit
        modi neque aperiam voluptatum unde minima error fugiat laudantium
        distinctio quae blanditiis sunt quas accusamus, tempore voluptate
        temporibus quos nostrum. Officia nemo eligendi recusandae delectus?
        Quisquam, veritatis sit nesciunt reiciendis quibusdam quod repellat
        minima earum asperiores enim laboriosam libero porro debitis deleniti,
        placeat obcaecati optio quo eum eius suscipit necessitatibus maiores
        esse. Minus eligendi quam eius, facere perferendis animi aliquid
        repellat, ipsam quia dicta quibusdam officia asperiores, ducimus
        deserunt quidem voluptatibus dolorum! Natus officiis tempore
        reprehenderit vitae, nulla optio id veritatis dolore facilis error velit
        ea quam quasi hic tenetur explicabo eaque, ab voluptate eum itaque
        libero, enim dicta! Architecto aut velit magni itaque animi tenetur,
        libero quod quae illum earum consequuntur vel quaerat commodi
        reprehenderit error sapiente doloremque sunt amet, laborum voluptas cum,
        repellat dolores? Illo quaerat nihil deserunt unde possimus, reiciendis
        tenetur qui ipsa quis assumenda ea labore omnis optio sequi nostrum
        maxime ipsum pariatur? Pariatur laborum quae, alias, dolorum expedita
        harum beatae nobis fugit, provident ut quasi ratione fugiat praesentium
        nam unde magni excepturi cupiditate voluptatum itaque et necessitatibus
        saepe. Vitae quas non voluptates totam sapiente recusandae dolorum
        exercitationem impedit quidem necessitatibus odio itaque dignissimos eos
        dolorem, temporibus ut. Veritatis sit porro modi voluptates repellat
        deleniti, vitae, aliquid harum reiciendis iure possimus omnis
        perferendis facere quasi quis delectus esse accusantium laudantium
        impedit. Similique ipsa dolore nesciunt perferendis laudantium quia
        beatae, odit consectetur impedit repudiandae magnam iste, commodi sequi
        animi eum nisi, aspernatur incidunt quasi! Nesciunt hic quia,
        praesentium sunt expedita voluptatibus id cupiditate perferendis ducimus
        architecto earum accusantium excepturi sed, deserunt officiis
        exercitationem. Omnis eaque neque consectetur, molestiae itaque nulla
        laboriosam vel? Odit qui distinctio quasi facilis tenetur, suscipit
        impedit porro saepe cum! Animi vel doloremque dolorum in distinctio,
        tempore atque beatae dicta ex consectetur officia laudantium voluptatem
        iusto dignissimos. Qui fuga nulla culpa magnam? Quo distinctio quae
        dicta. Aperiam quaerat tenetur voluptate accusamus aut molestiae ullam
        quidem fugit, quae minima adipisci voluptatum harum voluptas iusto qui
        vel inventore nihil nisi earum distinctio minus voluptates assumenda.
        Repellat quas repudiandae, maiores quod fuga animi, tempore id ex rem
        reprehenderit libero. Amet ipsam at assumenda similique officia. Modi
        necessitatibus cumque perspiciatis! Assumenda ratione accusantium
        mollitia beatae vel inventore consequatur aut minima accusamus, aliquam
        id maxime ipsam. Repellat est et quam suscipit minima doloremque iste
        provident quaerat, laudantium quos, maiores molestiae esse culpa
        deserunt laborum nostrum molestias tempore exercitationem? Natus quam
        quisquam voluptate ut explicabo. Eum ut vitae, adipisci quos quisquam
        suscipit iste labore, fugit nobis molestias quo? Odit accusantium autem
        vero ipsum magnam exercitationem eveniet corporis maxime atque nisi aut
        dolorum ab animi quibusdam repudiandae fugit illo nostrum recusandae
        alias, ducimus inventore. Exercitationem perspiciatis molestiae fugit
        ducimus consequuntur molestias cumque fuga nemo quos quo sunt velit
        reiciendis ipsum, esse saepe tenetur optio? Dolorem aliquam
        necessitatibus porro. Pariatur molestiae dignissimos hic. Assumenda
        perspiciatis corporis, quasi ad doloribus architecto nam labore
        explicabo nulla, in aliquid eius! Ab laudantium delectus possimus
        praesentium itaque neque reprehenderit, ut numquam minima dolorum odit
        placeat voluptates! Molestiae ducimus, cumque porro reprehenderit
        perferendis omnis magnam cum atque rem. Harum impedit autem est
        laboriosam nulla laborum repudiandae error, maiores fugit fugiat alias
        illo, nihil ut rerum animi natus facere. Error, deleniti veritatis
        perferendis ut tempora porro repellendus perspiciatis similique alias
        magnam quae, qui sit minus soluta nobis, quod dolorum. Vero corrupti
        impedit nobis nostrum omnis quo praesentium dolorem, sit enim quod in
        corporis perferendis odio neque voluptas error iure reprehenderit
        sapiente quis modi? Accusamus ut dicta consequuntur labore eos assumenda
        exercitationem inventore illo quidem commodi quia ducimus esse minima
        eaque dolorem ipsum possimus, doloribus voluptates vitae, repudiandae at
        culpa maiores explicabo voluptatem. Natus molestiae aperiam saepe itaque
        eos temporibus, voluptatibus, consequuntur ipsam libero a eligendi minus
        corporis necessitatibus voluptatem obcaecati, nisi distinctio sint
        voluptates qui vero?
      </div>
    </div>
  );
};

export default Project;

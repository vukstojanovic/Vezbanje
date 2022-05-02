import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "./redux/actions/modalActions";

export default function Modal() {
  const isModalOpened = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  function handleCloseModal(e) {
    dispatch(closeModal());
  }

  useEffect(() => {
    if (isModalOpened) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "visible");
    }
  }, [isModalOpened]);

  return ReactDom.createPortal(
    <>
      <div
        className={isModalOpened ? "modal-overlay" : "innactive-overlay"}
        onClick={handleCloseModal}
      >
        <div
          className={isModalOpened ? "modal" : "innactive-modal"}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Modal Example</h3>
          <div className="input-container">
            <label htmlFor="name">Your name:</label>
            <input id="name" type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="name">Your lastname:</label>
            <input id="name" type="text" />
          </div>
          <div className="close-btn" onClick={handleCloseModal}>
            &times;
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
            cupiditate minus! At hic amet quod quia dolorum provident incidunt
            tenetur iusto? Sapiente nihil cupiditate, sed neque eveniet
            praesentium adipisci ipsa! Expedita nemo maxime libero tenetur
            maiores amet sunt et odit illo magni quo quae, fugit perspiciatis
            ratione, ab corrupti eveniet ipsa similique nostrum id ipsum quis
            porro culpa. Ex, consectetur. Reiciendis quibusdam commodi aliquam
            beatae nam rerum accusantium distinctio perspiciatis vitae,
            blanditiis sed, corrupti provident, fugiat saepe. Iusto magni
            asperiores laboriosam vero. Ipsa sit perspiciatis tenetur dolores
            veniam earum voluptatum. Suscipit enim id necessitatibus, at ad ipsa
            modi? Voluptatem nostrum enim deserunt debitis expedita, sunt
            blanditiis voluptate dolores totam non iste rem placeat fugiat
            facere repudiandae ut quis aspernatur ab. Sed, in sapiente quod iste
            ab laboriosam laudantium et dolorem eum neque labore, deleniti
            maiores velit quae delectus ullam dignissimos. Quasi, molestias a
            nemo perferendis sint ad quaerat maxime ea! Tempora nesciunt quaerat
            nisi, illo ea quae illum magni molestiae inventore, quam recusandae.
            Reiciendis, nisi! Ut quae odio eligendi deleniti officia fugiat
            fuga, accusantium eius odit, impedit quidem natus cupiditate?
            Cupiditate aliquid cum illo adipisci ducimus velit quaerat rem,
            rerum suscipit dicta sed nulla dolores iure voluptatem aperiam atque
            dignissimos incidunt fuga quibusdam! Beatae facere adipisci,
            officiis impedit reiciendis perspiciatis? Dicta quaerat, eos quidem
            dolore minus iure labore exercitationem ut assumenda ab commodi
            cupiditate sapiente et ullam laudantium alias in ducimus nihil quod
            deserunt! Amet quaerat ipsum inventore ut corrupti. Ipsa sequi
            doloribus architecto voluptates perferendis, ea, dolore repudiandae
            eaque provident, voluptas saepe accusantium! Ea quibusdam
            perspiciatis et exercitationem ut, laboriosam necessitatibus numquam
            possimus ipsa illum quasi esse repellendus modi? Assumenda quam
            atque sapiente vitae, odio ex corrupti omnis odit magnam, numquam
            eaque nobis quasi natus aliquam tempora recusandae aperiam a soluta
            quibusdam qui necessitatibus quia tenetur! Quae, earum doloribus?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            officia neque suscipit ad in dignissimos voluptatibus ut eligendi!
            Adipisci doloremque voluptatibus praesentium. Consequatur dolor nisi
            minima quidem tempore modi numquam. Dolores quisquam a mollitia
            veritatis architecto nostrum sit itaque, excepturi, tempore eius
            nihil id impedit! Iure molestiae repudiandae ullam error quisquam
            eaque, ea in quae placeat! Ut commodi dolore obcaecati. Blanditiis
            reprehenderit asperiores nisi veritatis cum. Cumque magnam fugit,
            enim aperiam officiis eius soluta possimus illum, eligendi ipsam
            nostrum numquam. Ad libero excepturi, dolorum obcaecati illum quod
            aperiam dicta eaque. Debitis architecto reprehenderit molestias
            placeat ex illo possimus, aperiam ea doloribus cumque aspernatur rem
            ut, magni tempore sed id soluta, numquam sit cupiditate unde saepe!
            Incidunt eos minus consectetur unde. Tenetur explicabo minus eaque
            libero officiis molestias odit dolorum sunt consectetur accusantium
            molestiae, veniam quos, rem eligendi blanditiis iusto facilis animi
            quo, eius repudiandae laborum iste ipsa cumque? Fugit, vel?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
            incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
            nostrum mollitia veniam facere dignissimos? Unde atque earum
            voluptate rem corrupti tempore ut. Quia quaerat, unde neque harum
            qui itaque, tenetur delectus odio iusto ex recusandae repellat fuga,
            minus alias illo magni aliquid iste at porro! Laboriosam impedit
            aperiam et. Voluptatem, dolores nam! Porro reiciendis pariatur
            error? Officia rem accusantium debitis, exercitationem possimus eos,
            cupiditate assumenda pariatur temporibus perspiciatis ratione?
            Voluptatum, dignissimos odit. Accusantium commodi nam excepturi
            rerum similique distinctio necessitatibus nihil laboriosam. Quis qui
            repellendus magni eaque dicta odit nobis cupiditate quasi quaerat
            mollitia, suscipit minima dolorum vel eum necessitatibus facilis quo
            rerum sint, asperiores culpa, quia repellat esse consectetur? Sit,
            dolor. Velit nam a, exercitationem quam quaerat cumque et, molestias
            autem beatae quisquam id doloribus, libero numquam quo quae
            sapiente. Fuga suscipit nobis cum autem minima veniam ipsa
            voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
            Maiores sapiente asperiores, commodi eum, inventore harum dolore
            alias ea ullam eligendi iure. Laudantium fugiat modi repellat
            officia maxime, mollitia commodi veniam perferendis! Deleniti modi
            ut facilis eligendi esse dolore dicta magni? Consequatur eum
            mollitia fuga perferendis quos excepturi pariatur ut. Incidunt,
            ipsam earum distinctio inventore veritatis delectus officia iste
            tempora rem quibusdam. Placeat debitis, odio provident quidem
            consequatur et dolor, ipsa iste at reiciendis corrupti? Quam nostrum
            repellat architecto aliquid aperiam magnam perferendis. Nulla harum
            obcaecati qui numquam ducimus debitis doloribus quam. Eos officiis a
            cupiditate ipsum earum impedit. Sit fuga itaque ea illo atque, iure
            perferendis dolor quis debitis et ad aspernatur, vel, deleniti
            ducimus! Dignissimos deserunt explicabo consequatur magni est!
            Officia sequi sint perferendis, molestiae ipsam quaerat expedita
            laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
            eligendi suscipit maxime voluptate magnam architecto ea corporis
            adipisci. Magni sunt temporibus eligendi autem?
          </p>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

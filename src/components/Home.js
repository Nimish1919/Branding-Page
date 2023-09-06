import React from "react";
import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>BrandName</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            error architecto veritatis distinctio alias ipsa voluptatem numquam
            rerum, voluptatum nihil, maxime ad! Sequi reprehenderit sunt tempore
            aliquam. Rerum reprehenderit laudantium obcaecati, sed nesciunt
            magni, quasi alias quam laboriosam hic dolore!
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem rem,
            ad optio nulla debitis similique illo quam consequatur alias commodi
            velit, magni sint laboriosam perferendis et inventore. Quibusdam
            minima, incidunt atque ipsam ipsa deserunt iure tempore cum
            doloribus magnam dolorum debitis ducimus culpa. Ratione sint fugit
            consequuntur ab, magnam provident quam quasi eligendi esse
            perspiciatis quod cupiditate sunt, ipsum error explicabo dolorem
            quas tempore, id culpa. Quibusdam quae voluptatibus, consequuntur
            maiores pariatur voluptates? Quis odio consequuntur, repudiandae
            molestiae, eaque impedit quas deserunt ad molestias laborum
            sapiente, ratione porro esse non animi autem iusto. Officia amet
            minus, eligendi fuga harum adipisci?
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "1.0s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

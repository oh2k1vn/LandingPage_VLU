import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Modal from "../components/Modal/Modal";

export default function About() {
  const [show, setShow] = useState(false);

  return (
    <div className="container about">
      <p className="about_text">Who is building UniWorld Ecosystem?</p>
      <p className="about_text">Foundation Team</p>
      <div className="about_content">
        <div className="about_content_item">
          <Link href="#">
            <a>
              <Image
                src="/image/avantar.png"
                alt=""
                width={389.95}
                height={320}
                layout="responsive"
              />
            </a>
          </Link>
          <div className="about_content_item_bottom">
            <Link href="#">
              <a className="about_content_item_bottom-title">Daika Ginza</a>
            </Link>
            <p className="about_content_item_bottom-position">
              Founder &amp; Chairman
            </p>
            <p className="about_content_item_bottom-caption">
              Serial entrepreneur of various startups - expert in venture
              builder. Successfully managed an investment portfolio in real
              estate, cryptos.
            </p>
            <button onClick={() => setShow(true)}>Đọc thêm</button>
          </div>
          <Modal title="Daika Ginza" onClose={() => setShow(false)} show={show}>
            <Image
              src="/image/avantar.png"
              alt=""
              width={50}
              height={50}
              layout="responsive"
            />
            <div className="modal-body-text">
              <h3>Daika Ginza</h3>
              <p>
                Serial entrepreneur of various startups - expert in venture
                builder. Successfully managed an investment portfolio in real
                estate, cryptos.
              </p>
            </div>
          </Modal>
        </div>
<<<<<<< HEAD
        <div className="about_content_item">
          <Link href="#">
            <a>
              <Image
                src="/image/avantar.png"
                alt=""
                width={389.95}
                height={320}
                layout="responsive"
              />
            </a>
          </Link>
          <div className="about_content_item_bottom">
            <Link href="#">
              <a className="about_content_item_bottom-title">Daika Ginza</a>
            </Link>
            <p className="about_content_item_bottom-position">
              Founder &amp; Chairman
            </p>
            <p className="about_content_item_bottom-caption">
              Serial entrepreneur of various startups - expert in venture
              builder. Successfully managed an investment portfolio in real
              estate, cryptos.
            </p>
            <button onClick={() => setShow(true)}>Đọc thêm</button>
          </div>
          <Modal title="Daika Ginza" onClose={() => setShow(false)} show={show}>
            <Image
              src="/image/avantar.png"
              alt=""
              width={50}
              height={50}
              layout="responsive"
            />
            <div className="modal-body-text">
              <h3>Daika Ginza</h3>
              <p>
                Serial entrepreneur of various startups - expert in venture
                builder. Successfully managed an investment portfolio in real
                estate, cryptos.
              </p>
            </div>
          </Modal>
        </div>
        <div className="about_content_item">
          <Link href="#">
            <a>
              <Image
                src="/image/avantar.png"
                alt=""
                width={389.95}
                height={320}
                layout="responsive"
              />
            </a>
          </Link>
          <div className="about_content_item_bottom">
            <Link href="#">
              <a className="about_content_item_bottom-title">Daika Ginza</a>
            </Link>
            <p className="about_content_item_bottom-position">
              Founder &amp; Chairman
            </p>
            <p className="about_content_item_bottom-caption">
              Serial entrepreneur of various startups - expert in venture
              builder. Successfully managed an investment portfolio in real
              estate, cryptos.
            </p>
            <button onClick={() => setShow(true)}>Đọc thêm</button>
          </div>
          <Modal title="Daika Ginza" onClose={() => setShow(false)} show={show}>
            <Image
              src="/image/avantar.png"
              alt=""
              width={50}
              height={50}
              layout="responsive"
            />
            <div className="modal-body-text">
              <h3>Daika Ginza</h3>
              <p>
                Serial entrepreneur of various startups - expert in venture
                builder. Successfully managed an investment portfolio in real
                estate, cryptos.
              </p>
            </div>
          </Modal>
        </div>
=======
>>>>>>> eeb52c9094c6ce9093c1e5824534e65b975cdacd
      </div>
      <div className="home">
        <div className="block">
          <div className="block_flex">
            <div className="block_title">
              <h2 className="block_title_h2">Developer team</h2>
              <p className="block_title_note">
                The main responsiblity for the development of products in the
                Uniworld ecosystem is the Unilab DAO network team.
                <br />
                Unilab was established in 2013, with members from many countries
                around the world (Japan, Canada, Hungary, Singapore, Vietnam...)
                and operates under the DAO model.
              </p>
            </div>
            <div className="block_img">
              <Image
                src="/image/blog1.png"
                alt=""
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
          <div className="block_flex">
            <div className="block_title">
              <h2 className="block_title_h2">Decentralized Community</h2>
              <p className="block_title_note">
                Blockchain industry is revolutionary, open source and relies on
                the community is continuous intellectual contribution.
                <br />
                We are well aware of the smallness and limitations of
                individuals or organizations, so Uniworld is development
                philosophy is to combine the initiative of the development team
                and inherit and absorb contributions from the community
              </p>
            </div>
            <div className="block_img">
              <Image
                src="/image/blog1.png"
                alt=""
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

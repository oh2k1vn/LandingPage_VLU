import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function about() {
  return (
    <>
      <section id="about">
        <div className="container">
          <p className="body_text">Who is building UniWorld Ecosystem?</p>
          <p className="body_text">Foundation Team</p>
          <div className="about">
            <div className="about_item">
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
              <div className="about_item_bottom">
                <Link href="#">
                  <a className="about_item_bottom-title">Daika Ginza</a>
                </Link>
                <p className="about_item_bottom-position">
                  Founder &amp; Chairman
                </p>
                <p className="about_item_bottom-caption">
                  Serial entrepreneur of various startups - expert in venture
                  builder. Successfully managed an investment portfolio in real
                  estate, cryptos.
                </p>
                <button>Đọc thêm</button>
              </div>
              <div className="about_item_check"></div>
            </div>
            <div className="about_item">
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
              <div className="about_item_bottom">
                <Link href="#">
                  <a className="about_item_bottom-title">Daika Ginza</a>
                </Link>
                <p className="about_item_bottom-position">
                  Founder &amp; Chairman
                </p>
                <p className="about_item_bottom-caption">
                  Serial entrepreneur of various startups - expert in venture
                  builder. Successfully managed an investment portfolio in real
                  estate, cryptos.
                </p>
                <button>Đọc thêm</button>
              </div>
            </div>
            <div className="about_item">
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
              <div className="about_item_bottom">
                <Link href="#">
                  <a className="about_item_bottom-title">
                    Daika Ginza
                  </a>
                </Link>
                <p className="about_item_bottom-position">
                  Founder &amp; Chairman
                </p>
                <p className="about_item_bottom-caption">
                  Serial entrepreneur of various startups - expert in venture
                  builder. Successfully managed an investment portfolio in real
                  estate, cryptos.
                </p>
                <button>Đọc thêm</button>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="block_item">
              <div className="block_item_text">
                <h2>Developer team</h2>
                <p>
                  The main responsiblity for the development of products in the
                  Uniworld ecosystem is the Unilab DAO network team.
                </p>
                <p>
                  Unilab was established in 2013, with members from many
                  countries around the world (Japan, Canada, Hungary, Singapore,
                  Vietnam...) and operates under the DAO model.
                </p>
              </div>
            </div>
            <div className="block_item">
              <Image
                src="/image/blog1.png"
                alt=""
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
          <div className="block">
            <div className="block_item">
              <div className="block_item_text">
                <h2>Decentralized Community</h2>
                <p>
                  Blockchain industry is revolutionary, open source and relies
                  on the community is continuous intellectual contribution.
                </p>
                <p>
                  We are well aware of the smallness and limitations of
                  individuals or organizations, so Uniworld is development
                  philosophy is to combine the initiative of the development
                  team and inherit and absorb contributions from the community
                </p>
              </div>
            </div>
            <div className="block_item">
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
      </section>
    </>
  );
}

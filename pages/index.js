import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="banner">
        <Image src="/image/banner.jpg" alt="" layout="fill" />
        <div className="banner_title">
          <h3>Uniworld ecosystem</h3>
          <p>For ai &amp; blockchain of society 5.0</p>
        </div>
      </div>
      <main className="container">
        <div className="block">
          <div className="block_item">
            <div className="block_item_text">
              <h2>
                Technology is the most powerful tool to build a smart society
                5.0
              </h2>
              <p>
                The Smart Society 5.0 is a revolutionizing concept first
                introduced by Japan in 2016. In society 5.0, technologies
                elevate human well-being and advance humanity. Striving towards
                Society 5.0 has become a global inspiration for governments,
                engineers, and entrepreneurs ever since.
              </p>
              <p>
                We - Uniworld are building, supplying, and leasing AI &amp;
                Blockchain-based technology infrastructure. Our products and
                services serve as the brick and stone of Society 5.0.
              </p>
            </div>
          </div>
          <div className="block_item">
            <Image src="/image/blog1.png" alt="" width='100%' height='100%' layout='responsive' />
          </div>
        </div>
        <div className="block">
          <div className="block_item">
            <div className="block_item_text">
              <h2>Re-Evolution For The Next Generation!</h2>
              <p className="block_item_text_sub">How does Uniworld do that?</p>
              <p className="block_item_text_txt">
                We Re-Evolve the existing things to a higher form. At Uniworld,
                we constantly rethink, reinvent and upgrade the existing
                technologies.
              </p>
            </div>
          </div>
          <div className="block_item">
            <Image src="/image/blog2.png" alt="" width='100%' height='100%' layout='responsive' />
          </div>
        </div>
        <div className="block">
          <div className="block_item">
            <div className="block_item_text">
              <h2>All values created by people are for people is happiness</h2>
              <p className="block_item_text_sub">What do we do it for?</p>
              <p className="block_item_text_txt">
                It is flawed if what you create is only to satisfy personal
                creativity.
                <br />
                Uniworld is powered by passion, creativity, and the desire to
                contribute to the betterment of humanity.
              </p>
            </div>
          </div>
          <div className="block_item">
            <Image src="/image/blog3.png" alt=""  width='100%' height='100%' layout='responsive' />
          </div>
        </div>
        <div className="block">
          <div className="block_item">
            <div className="block_item_text">
              <h2>All-in-one account</h2>
              <p className="block_item_text_sub">
                Take 1 minute to create yourself an All-in-one account.
                {/* hieu */}
              </p>
              <p className="block_item_text_txt">
                It is your bank, your digital asset insurance cabinet, your
                identity without being controlled by anyone
              </p>
              <button>Create a wallet</button>
            </div>
          </div>
          <div className="block_item">
            <Image src="/image/blog3.png" alt="" width='100%' height='100%' layout='responsive' />
          </div>
        </div>
      </main>
    </>
  );
}
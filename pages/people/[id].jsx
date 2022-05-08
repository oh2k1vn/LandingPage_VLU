import { Button, Modal, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "../../components/customs/Link";
import React from "react";
import data from "./data.json";

export default function About() {
  const [dataShow, setDataShow] = React.useState({});
  const [visible, setVisible] = React.useState(false);

  const closeHandler = () => {
    setVisible(false);
  };

  const handlerClickShow = (item) => {
    setVisible(true);
    setDataShow(item);
  };

  return (
    <div className="container about">
      <p className="about_text">Ban Chủ Nhiệm</p>
      <div className="about_content">
        {data?.map(item => {
          return (
            <div className="about_content_item" key={item.id}>
              <Image
                src={item?.avatar}
                alt=""
                width={389.95}
                height={320}
                layout="responsive"
              />
              <div className="about_content_item_bottom">
                <p className="about_content_item_bottom-title">
                {item?.name}
                </p>
                <p className="about_content_item_bottom-position">
                  {item?.position}
                </p>
                <p className="about_content_item_bottom-caption">
                  {item?.desc}
                </p>
                <Button onClick={() => handlerClickShow(item)}>Xem thêm</Button>
              </div>
            </div>
          );
        })}
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={20}>
              {dataShow?.title}
            </Text>
          </Modal.Header>
          <Modal.Body>{dataShow?.name}</Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button auto onClick={closeHandler}>
              Sign in
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <div className="home">
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
      </div> */}
    </div>
  );
}

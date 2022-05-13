import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

import data from "./data.json";

export default function About() {
  const [open, setOpen] = React.useState(false);
  const [dataDetail, setDataDetail] = React.useState({});

  const handleOpen = (item) => {
    setOpen(true);
    setDataDetail(item);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className="container about">
      <h1>Ban Chủ Nhiệm</h1>
      <div className="about_content">
        {data?.map((item) => {
          return (
            <div className="about_content_item" key={item.id}>
              <Image
                src={item?.avatar}
                alt=""
                width={389.95}
                height={320}
                layout="responsive"
              />
              <div className="about_content_item_body">
                <h3>{item?.name}</h3>
                <Typography
                  variant="caption"
                  className="about_content_item_caption"
                >
                  {item?.position}
                </Typography>
                <Typography variant="subtitle1" style={{ margin: ".2rem 0" }}>
                  {item?.desc}
                </Typography>
                <button onClick={() => handleOpen(item)}>Xem thêm</button>
              </div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box className="modal">
                    <div className="modal_avatar">
                      <Image
                        src={dataDetail?.avatar}
                        alt=""
                        width={0}
                        height={0}
                        layout="responsive"
                      />
                    </div>
                    <div className="modal_content">
                      <h3>{dataDetail?.name}</h3>
                      <Typography
                        variant="caption"
                        className="about_content_item_caption"
                      >
                        {dataDetail?.position}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{ margin: ".2rem 0" }}
                      >
                        {dataDetail?.desc}
                      </Typography>
                    </div>
                  </Box>
                </Fade>
              </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { Typography, Stack, Box } from "@mui/material";

import data from "./data.json";

export default function About() {
  return (
    <div className="container about">
      <Typography variant="h2" className="about_text">
        Ban Chủ Nhiệm
      </Typography>
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

              <Stack spacing={1}>
                <Box sx={{ padding: "1rem" }}>
                  <Typography variant="h5">{item?.name}</Typography>
                  <Typography
                    variant="caption"
                    className="about_content_item_caption"
                  >
                    {item?.position}
                  </Typography>
                  <Typography variant="subtitle1" style={{ margin: ".2rem 0" }}>
                    {item?.desc}
                  </Typography>
                  <button onClick={() => handlerClickShow(item)}>
                    Xem thêm
                  </button>
                </Box>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

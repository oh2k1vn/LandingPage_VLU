import { Avatar } from "@mui/material";
import React from "react";

export default function Author(props) {
  const { getData } = props;
  return (
    <div className="author">
      <Avatar
        alt="Remy Sharp"
        src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
      />
      <div className="author_content">
        <p>{getData?.author}</p>
        <span>{new Date(getData?.createdAt).toLocaleString()}</span>
      </div>
    </div>
  );
}

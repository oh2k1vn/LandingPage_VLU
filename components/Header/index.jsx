import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
import { Images } from "../../constant/Image";
import Link from "../customs/Link";
import data from "./data";

export default function Index() {
  const [visible, setVisible] = React.useState(false);
  const router = useRouter();
  const handler = () => setVisible(true);
  const dataDefault = {
    _id: "dataDefault",
    name: "Trang chủ",
    isLink: true,
    slug: "/",
    subCategory: null,
  };
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <header>
      <div className="container header">
        <input
          className="check_hover"
          type="checkbox"
          name=""
          id="check"
          hidden
        />
        <label htmlFor="check" className="check_btn">
          <BiMenu />
        </label>
        <label htmlFor="check" className="overlay" />
        <div className="logo">
          <Link to="/#">
            <Image src={Images.Logo} alt="" layout="responsive" />
          </Link>
        </div>
        <div className="menu">
          <label htmlFor="check" className="check_cls">
            <BiX />
          </label>
          {/* Home */}
          <li key={dataDefault?._id}>
            <Link
              to={dataDefault?.slug}
              className={router.asPath === dataDefault?.slug ? "active" : ""}
            >
              {dataDefault?.name}
            </Link>
          </li>
          {/* End Home */}
          {data?.map((item) => {
            return (
              <li key={item?._id}>
                <Link
                  to={item?.slug}
                  className={
                    router.asPath.toString()?.includes(item?.slug)
                      ? "active disabled-link"
                      : "disabled-link"
                  }
                >
                  {item?.name}
                </Link>
                <ul className="menu_item">
                  {item?.subCategory?.map((item) => {
                    return (
                      <li key={item?._id}>
                        <Link
                          target={item?.isLink ? "_blank" : ""}
                          to={item?.slug}
                          className={
                            router.asPath === item?.slug ? "active" : ""
                          }
                        >
                          {item?.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </div>
        <div className="user">
          <div className="user_icon">
            <Link to="#" className="user_icon_a">
              <span>EN</span>
              <BiChevronDown />
            </Link>
            <li className="user_icon_li">
              <Link to="#">VN</Link>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
}

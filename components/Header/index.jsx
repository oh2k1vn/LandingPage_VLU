import Cookie from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Images } from "../../constant/Image";
import Link from "../customs/Link";
import data from "./data";

export default function Index() {
  const [language, setLanguage] = React.useState(
    Cookie.get("language") || "vi"
  );
  console.log(language);
  const router = useRouter();
  const dataDefault = {
    _id: "dataDefault",
    name: "Trang chủ",
    isLink: true,
    slug: "/",
    subCategory: null,
  };

  const handleChangeLanguage = (language) => {
    setLanguage(language);
    Cookie.set("language", language);
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
          <div
            className={language === "vi" ? "user_icon active" : "user_icon"}
            onClick={() => handleChangeLanguage("vi")}
          >
            <span>VI</span>
          </div>
          <div
            className={language === "en" ? "user_icon active" : "user_icon"}
            onClick={() => handleChangeLanguage("en")}
          >
            <span>EN</span>
          </div>
        </div>
      </div>
    </header>
  );
}

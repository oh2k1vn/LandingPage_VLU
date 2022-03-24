import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiMenu, BiChevronDown, BiX } from "react-icons/bi";

const Navbar = () => {
  const menu = [
    {
      name: "Trang chủ",
      route: "/",
      item: [],
    },
    {
      name: "Giới thiệu",
      route: "/About",
      item: [
        {
          name: "Giới thiệu chung",
          route: "/#",
        },
        {
          nanme: "Ban chủ nhiệm",
          route: "/#",
        },
        {
          name: "Giảng viên",
          route: "/#",
        },
      ],
    },
    {
      name: "Đào tạo",
      route: "/Branch",
      item: [],
    },
    {
      name: "Tuyển sinh",
      route: "/Admissions",
      item: [],
    },
    {
      name: "Tin tức",
      route: "/blog",
      item: [],
    },
    {
      name: "Liên kết",
      route: "/#",
      item: [
        {
          name: "Đại học Văn Lang",
          route: "https://www.vanlanguni.edu.vn",
        },
        {
          name: "Tuyển dụng",
          route: "/#",
        },
        {
          name: "Fanpage",
          route: "https://www.facebook.com/cnttvlu/",
        },
        {
          name: "Youtube",
          route: "https://www.youtube.com/channel/UCA3rs6ydLPgNghvXXF8In4A",
        },
        {
          name: "Online LAB",
          route: "https://fit.vlu.edu.vn",
        },
      ],
    },
  ];

  console.log(menu);
  const router = useRouter();

  return (
    <header>
      <div className="container header">
        <input className="check_hover" type="checkbox" name id="check" hidden />
        <label htmlFor="check" className="check_btn">
          <BiMenu />
        </label>
        <label htmlFor="check" className="overlay" />
        <div className="logo">
          <Link href="/">
            <a>
              <img src="https://uniworld.io/img/logo.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="menu">
          <label htmlFor="check" className="check_cls">
            <BiX />
          </label>
          {menu.map((menu, key) => {
            return (
              <li
                className={router.asPath == menu.route ? "active" : ""}
                key={key}
              >
                <Link href={menu.route}>
                  {menu.name}
                  {/* <ul className="menu_item">
                    {menu.item.map((item, key) => {
                      return (
                        <li
                          className={
                            router.asPath == item.route ? "active" : ""
                          }
                          key={key}
                        >
                          <Link href={item.route}>{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul> */}
                </Link>
              </li>
            );
          })}
        </div>
        <div className="user">
          <div className="user_icon">
            <Link href="#">
              <a className="user_icon_a">
                <span>EN</span>
                <BiChevronDown />
              </a>
            </Link>
            <li className="user_icon_li">
              <Link href="#">
                <a>VN</a>
              </Link>
            </li>
          </div>
          <Link href="#">
            <a className="user_btn">
              <i className="bx bx-user-circle" />
              <span>Đăng nhập</span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";
import { BiMenu, BiChevronDown,BiX } from "react-icons/bi";

const Navbar = () => {
  return (
    <header>
      <div className="container header">
        <input className="check_hover" type="checkbox" name id="check" hidden />
        <label htmlFor="check" className="check_btn">
          <BiMenu/>
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
            <BiX/>
          </label>
          <li>
            <Link href="/">
              <a>Trang chủ</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                Giới thiệu
                <i className="bx bx-chevron-down" />
              </a>
            </Link>
            <ul className="menu_item">
              <li>
                <Link href="/community.html">
                  <a>Giới thiệu chung</a>
                </Link>
              </li>
              <li>
                <Link href="#!">
                  <a>Ban chủ nhiệm</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Giảng viên</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              <a>
                Đào tạo
                <i className="bx bx-chevron-down" />
              </a>
            </Link>
            <ul className="menu_item">
              <li>
                <Link href="#">
                  <a>Chương trình đại học</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Ngành &amp; Chuyên</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Cao học</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Chuẩn đầu ra</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Đề cương</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              <a>
                Tuyển sinh
                <i className="bx bx-chevron-down" />
              </a>
            </Link>
            <ul className="menu_item">
              <li>
                <Link href="#">
                  <a>Đại học</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Cao học</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>CT đào tạo đặc biệt</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/blog">
              <a>Tin tức</a>
            </Link>
          </li>
          <li>
            <a href="#">
              liên kết
              <i className="bx bx-chevron-down" />
            </a>
            <ul className="menu_item">
              <li>
                <Link href="https://www.vanlanguni.edu.vn">
                  <a>Đại học Văn lang</a>
                </Link>
              </li>
              <li>
                <Link href="#!">
                  <a>Tuyển dụng</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/cnttvlu/">
                  <a>Fanpage</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UCA3rs6ydLPgNghvXXF8In4A">
                  <a>Youtube</a>
                </Link>
              </li>
              <li>
                <Link href="https://fit.vlu.edu.vn">
                  <a>Online LAB</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              <a>liên hệ</a>
            </Link>
          </li>
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

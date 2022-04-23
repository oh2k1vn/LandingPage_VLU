import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer_item">
            <Image
              src="/image/logo.jpg"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <div className="footer_item">
            <h4>Danh mục khác</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Thông tin chính thức</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Thư viện văn bản</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Thông tin tuyển dụng</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Liên hệ</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/">
                  <a>Sau đại học</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Thư viện</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <h4>trường Đại học Văn Lang</h4>
            <p>Hỗ trợ SV: 028.7106.1111</p>
            <p>info@vlu.edu..vn</p>
            <p>Cơ sở chính: 69/68 Đặng Thùy Trâm, P.13, Q.Bình Thạnh, TP.HCM</p>
            <p>Cơ sở 1: 45 Nguyễn khắc nhu, P.Cô Giang, Q.1, TP.HCM</p>
            <p>Cơ sở 2: 233A Phan văn trị, P11, Q.Bình Thạnh, TP.HCM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

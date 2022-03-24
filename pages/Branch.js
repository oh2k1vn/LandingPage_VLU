import React from "react";

export default function Branch() {
  const data = [
    {
      id: 1,
      name: "Khoa học môi trường",
      degree: "Tiến sĩ",
      time: "3 năm",
    },
    {
      id: 2,
      name: "Kỹ thuật Môi trường",
      degree: "Thạc sĩ",
      time: "2 năm",
    },
    {
      id: 3,
      name: "Quản trị Kinh doanh",
      degree: "Thạc sĩ",
      time: "1.5 năm",
    },
    {
      id: 4,
      name: "Tài chính ngân hàng",
      degree: "Thạc sĩ",
      time: "1.5 năm",
    },
    {
      id: 5,
      name: "Kiến trúc",
      degree: "Thạc sĩ",
      time: "1.5 năm",
    },
    {
      id: 6,
      name: "Kinh doanh Thương mại",
      degree: "Thạc sĩ",
      time: "1.5 năm",
    },
    {
      id: 7,
      name: "Công nghệ Sinh học",
      degree: "Thạc sĩ",
      time: "1.5 năm",
    },
    {
      id: 8,
      name: "Quản lý Tài nguyên và Môi trường",
      degree: "Thạc sĩ",
      time: "1.5 năm",
    },
    {
      id: 9,
      name: "Luật kinh tế",
      degree: "Thạc sĩ",
      time: "1.5 năm",
    },
    {
      id: 10,
      name: "Mỹ thuật ứng dụng",
      degree: "Thạc sĩ",
      time: "1.5 năm",
    },
    {
      id: 11,
      name: "Kế toán",
      degree: "Thạc sĩ",
      time: "1.5 năm",
    },
    {
      id: 12,
      name: "Quản trị Khách sạn",
      degree: "Thạc sĩ",
      time: "1.5 năm",
    },
    {
      id: 13,
      name: "Thiết kế Công nghiệp",
      degree: "Tiến sĩ",
      time: "1.5 năm",
    },
    {
      id: 14,
      name: "	Thiết kế Đồ họa",
      degree: "Tiến sĩ",
      time: "1.5 năm",
    },
  ];
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Ngành</th>
            <th>Bằng cấp</th>
            <th>Thời gian đào tạo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.degree}</td>
                <td>{item.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';

const data = {
	logo: '',
	col1: {
		title: 'Danh mục khác',
		isList: true,
		data: [
			{
				title: 'Thông tin chính thức',
				link: '/'
			},
			{
				title: 'Thư viện',
				link: '/'
			},
			{
				title: 'Sau đại học',
				link: '/'
			}
		]
	},
	col2: {
		title: 'Trường Kỹ Thuật Và Công Nghệ Văn Lang',
		isList: false,
		data: '<p>Hỗ trợ SV: 028.7106.1111</p><p>info@vlu.edu..vn</p><p>Cơ sở chính: 69/68 Đặng Thùy Trâm, P.13, Q.Bình Thạnh, TP.HCM</p><p>Cơ sở 1: 45 Nguyễn khắc nhu, P.Cô Giang, Q.1, TP.HCM</p><p>Cơ sở 2: 233A Phan văn trị, P11, Q.Bình Thạnh, TP.HCM</p>'
	}
};

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='footer'>
					<div className='footer_item'>
						<Image src='/image/logo.jpg' alt='logo' width={200} height={200} />
					</div>
					<div className='footer_item'>
						<h4>{data?.col1.title}</h4>
						<ul>
							{data?.col1?.isList &&
								data?.col1?.data?.map((item, index) => {
									return (
										<li key={index}>
											<Link href={item?.link}>
												<a>{item?.title}</a>
											</Link>
										</li>
									);
								})}
						</ul>
					</div>
					<div className='footer_item'>
						<h4>{data?.col2?.title}</h4>
						{/* <p>Hỗ trợ SV: 028.7106.1111</p>
            <p>info@vlu.edu..vn</p>
            <p>Cơ sở chính: 69/68 Đặng Thùy Trâm, P.13, Q.Bình Thạnh, TP.HCM</p>
            <p>Cơ sở 1: 45 Nguyễn khắc nhu, P.Cô Giang, Q.1, TP.HCM</p>
            <p>Cơ sở 2: 233A Phan văn trị, P11, Q.Bình Thạnh, TP.HCM</p> */}
						{!data?.col2?.isList && parse(data?.col2?.data)}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

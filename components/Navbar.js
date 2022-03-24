import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BiChevronDown, BiMenu, BiX } from 'react-icons/bi';
import { Images } from '../constant/Image';

const Navbar = () => {
	const menu = [
		{
			name: 'Trang chủ',
			route: '/'
		},
		{
			name: 'Giới thiệu',
			route: '/About',
			item: [
				{
					name: 'Giới thiệu chung',
					route: '/#'
				},
				{
					name: 'Ban chủ nhiệm',
					route: '/#'
				},
				{
					name: 'Giảng viên',
					route: '/#'
				}
			]
		},
		{
			name: 'Đào tạo',
			route: '/Branch'
		},
		{
			name: 'Tuyển sinh',
			route: '/Admissions'
		},
		{
			name: 'Tin tức',
			route: '/blog'
		},
		{
			name: 'Liên kết',
			route: '/#',
			item: [
				{
					name: 'Đại học Văn Lang',
					route: 'https://www.vanlanguni.edu.vn'
				},
				{
					name: 'Tuyển dụng',
					route: '/#'
				},
				{
					name: 'Fanpage',
					route: 'https://www.facebook.com/cnttvlu/'
				},
				{
					name: 'Youtube',
					route: 'https://www.youtube.com/channel/UCA3rs6ydLPgNghvXXF8In4A'
				},
				{
					name: 'Online LAB',
					route: 'https://fit.vlu.edu.vn'
				}
			]
		}
	];

	const router = useRouter();

	return (
		<header>
			<div className='container header'>
				<input className='check_hover' type='checkbox' name id='check' hidden />
				<label htmlFor='check' className='check_btn'>
					<BiMenu />
				</label>
				<label htmlFor='check' className='overlay' />
				<div className='logo'>
					<Link href='/#'>
						<a>
							<Image src={Images.Logo} alt=''/>
						</a>
					</Link>
				</div>
				<div className='menu'>
					<label htmlFor='check' className='check_cls'>
						<BiX />
					</label>
					{menu?.map((menu, key) => {
						return (
							<li
								className={router.asPath == menu.route ? 'active' : ''}
								key={key}>
								<Link href={menu.route}>{menu.name}</Link>
								<ul className='menu_item'>
									{menu.item?.map((item, key) => {
										return (
											<li
												className={router.asPath == item.route ? 'active' : ''}
												key={key}>
												<Link target='_blank' href={item.route}>
													{item.name}
												</Link>
											</li>
										);
									})}
								</ul>
							</li>
						);
					})}
				</div>
				<div className='user'>
					<div className='user_icon'>
						<Link href='#'>
							<a className='user_icon_a'>
								<span>EN</span>
								<BiChevronDown />
							</a>
						</Link>
						<li className='user_icon_li'>
							<Link href='#'>
								<a>VN</a>
							</Link>
						</li>
					</div>
					<Link href='#'>
						<a className='user_btn'>
							<i className='bx bx-user-circle' />
							<span>Đăng nhập</span>
						</a>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;

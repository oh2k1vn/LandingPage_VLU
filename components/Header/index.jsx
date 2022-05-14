import Cookie from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { Images } from '../../constant/Image';
import Link from '../customs/Link';
import data from './data';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';
import { useCategory } from '../../states/stores/useCategory';

export default function Index() {
	const { t, lang } = useTranslation();
	const router = useRouter();
	const [states, actions] = useCategory();

	const dataDefault = {
		_id: 'dataDefault',
		name: t('category:home'),
		isLink: true,
		slug: '/',
		subCategory: null
	};

	const handleChangeLang = lang => {
		setLanguage(lang);
		Cookie.set('lang', lang);
	};

	React.useEffect(() => {
		actions.getCategories();
	}, [lang]);

	return (
		<header>
			<div className='container header'>
				<input
					className='check_hover'
					type='checkbox'
					name=''
					id='check'
					hidden
				/>
				<label htmlFor='check' className='check_btn'>
					<BiMenu />
				</label>
				<label htmlFor='check' className='overlay' />
				<div className='logo'>
					<Link to='/#'>
						<Image src={Images.Logo} alt='' layout='responsive' />
					</Link>
				</div>
				<div className='menu'>
					<label htmlFor='check' className='check_cls'>
						<BiX />
					</label>
					{/* Home */}
					<li key={dataDefault?._id}>
						<Link
							to={dataDefault?.slug}
							className={router.asPath === dataDefault?.slug ? 'active' : ''}>
							{dataDefault?.name}
						</Link>
					</li>
					{/* End Home */}
					{data?.map(item => {
						return (
							<li key={item?._id}>
								<Link
									to={item?.slug}
									className={
										router.asPath.toString()?.includes(item?.slug)
											? 'active disabled-link'
											: 'disabled-link'
									}>
									{item?.name}
								</Link>
								<ul className='menu_item'>
									{item?.subCategory?.map(item => {
										return (
											<li key={item?._id}>
												<Link
													target={item?.isLink ? '_blank' : ''}
													to={item?.slug}
													className={
														router.asPath === item?.slug ? 'active' : ''
													}>
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
				<div className='user'>
					<div
						className={lang === 'vn' ? 'user_icon active' : 'user_icon'}
						onClick={() => handleChangeLang('vn')}>
						<span>VI</span>
					</div>
					<div
						className={lang === 'en' ? 'user_icon active' : 'user_icon'}
						onClick={() => handleChangeLang('en')}>
						<span>EN</span>
					</div>
				</div>
			</div>
		</header>
	);
}

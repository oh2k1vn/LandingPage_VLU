import { Button, Checkbox, Input, Modal, Row, Text } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { BiChevronDown, BiMenu, BiUser, BiX } from 'react-icons/bi';
import { Images } from '../../constant/Image';
import Link from '../customs/Link';
import data from './data';

export default function Index() {
	const [visible, setVisible] = React.useState(false);
	const router = useRouter();
	const handler = () => setVisible(true);
	const dataDefault = {
		_id: 'dataDefault',
		name: 'Trang chủ',
		isLink: true,
		slug: '/',
		subCategory: null
	};
	const closeHandler = () => {
		setVisible(false);
	};

	return (
		<header>
			<div className='container header'>
				<input className='check_hover' type='checkbox' name id='check' hidden />
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
					<div className='user_icon'>
						<Link to='#' className='user_icon_a'>
							<span>EN</span>
							<BiChevronDown />
						</Link>
						<li className='user_icon_li'>
							<Link to='#'>VN</Link>
						</li>
					</div>
					{/* <Link to="#" className="user_btn">
            <BiUser />
            <span auto shadow onClick={handler}>
              Đăng nhập
            </span>
          </Link> */}
					<Modal
						closeButton
						aria-labelledby='modal-title'
						open={visible}
						onClose={closeHandler}>
						<Modal.Header>
							<Text id='modal-title' size={18}>
								Welcome to
								<Text b size={18}>
									Blog IT
								</Text>
							</Text>
						</Modal.Header>
						<Modal.Body>
							{/* <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
                contentLeft={<Mail fill="currentColor" />}
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
                contentLeft={<Password fill="currentColor" />}
              /> */}
							<h1>asds</h1>
							<Row justify='space-between'>
								<Checkbox>
									<Text size={14}>Remember me</Text>
								</Checkbox>
								<Text size={14}>Forgot password?</Text>
							</Row>
						</Modal.Body>
						<Modal.Footer>
							<Button auto flat color='error' onClick={closeHandler}>
								Close
							</Button>
							<Button auto onClick={closeHandler}>
								Sign in
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</header>
	);
}

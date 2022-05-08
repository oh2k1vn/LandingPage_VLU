import Head from 'next/head';
import Image from 'next/image';
import parse from 'html-react-parser';

export default function Home() {
	return (
		<>
			<Head>
				<title>Trang chủ</title>
				<meta
					name='description'
					content='ITVLU, itvlu, itvanlang, khoa cntt vanlang, cntt van lang, van lang'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='banner'>
				<Image src='/image/banner3.jpg' alt='' layout='fill' />
				<div className='banner_title'>
					<h1>{data?.banner?.title}</h1>
					{/* Render title */}
					{data?.banner?.desc && parse(data?.banner?.desc)}
				</div>
			</div>
			<main className='home'>
				<div className='block'>
					<div className='container block_flex'>
						<div className='block_title'>
							<h2 className='block_title_h2'>
								{data.row1.title}
							</h2>
							{/* Render Content */}
              {data.row1.desc && parse(data.row1.desc)}
						</div>
						<div className='block_img'>
							<Image
								src='/image/blog1.png'
								alt=''
								width='100%'
								height='100%'
								layout='responsive'
							/>
						</div>
					</div>
					{/* <div className='container block_flex'>
						<div className='block_title'>
							<h2 className='block_title_h2'>
								Re-Evolution For The Next Generation!
							</h2>
							<p className='block_title_sub'>
								We Re-Evolve the existing things to a higher form. At Uniworld,
								we constantly rethink, reinvent and upgrade the existing
								technologies.
							</p>
						</div>
						<div className='block_img'>
							<Image
								src='/image/blog2.png'
								alt=''
								width='100%'
								height='100%'
								layout='responsive'
							/>
						</div>
					</div>
					<div className='container block_flex'>
						<div className='block_title'>
							<h2 className='block_title_h2'>
								All values created by people are for people is happiness
							</h2>
							<p className='block_title_note'>
								It is flawed if what you create is only to satisfy personal
								creativity.
								<br />
								Uniworld is powered by passion, creativity, and the desire to
								contribute to the betterment of humanity.
							</p>
							<button className='block_title_btn'>Create a Wallet</button>
						</div>
						<div className='block_img'>
							<Image
								src='/image/blog3.png'
								alt=''
								width='100%'
								height='100%'
								layout='responsive'
							/>
						</div>
					</div>
					<div className='container block_flex'>
						<div className='block_title'>
							<h2 className='block_title_h2'>All-in-one account</h2>
							<p className='block_title_sub'>
								Take 1 minute to create yourself an All-in-one account.
							</p>
							<p className='block_title_note'>
								It is your bank, your digital asset insurance cabinet, your
								identity without being controlled by anyone
							</p>
							<button className='block_title_btn'>Create a Wallet</button>
						</div>
						<div className='block_img'>
							<Image
								src='/image/blog4.png'
								alt=''
								width='100%'
								height='100%'
								layout='responsive'
							/>
						</div>
					</div> */}
				</div>
			</main>
		</>
	);
}

const data = {
	banner: {
		images: ['', ''],
		title: 'Khoa Công Nghệ Thông Tin Trường Kỹ Thuật Và Công Nghệ Văn Lang',
		desc: '<p><strong>Công nghệ thông tin được xem như là ngành mũi nhọn hướng đến sự phát triển của khoa học và công nghệ trong thời đại số hiện nay, là một trong những ngành có xu hướng thay đổi theo từng ngày, được ứng dụng rộng rãi trong mọi ngành nghề.</strong></p>'
	},
	row1: {
		image: '',
		positionContent: 'right',
		title: 'Công nghệ thông tin',
		desc: '<p><strong>Công nghệ thông tin được xem như là ngành mũi nhọn hướng đến sự phát triển của khoa học và công nghệ trong thời đại số hiện nay, là một trong những ngành có xu hướng thay đổi theo từng ngày, được ứng dụng rộng rãi trong mọi ngành nghề.</strong></p><p><strong>Ứng dụng của công nghệ thông tin (CNTT) trong đời sống xã hội hiện đại ngày càng nhiều, từ thương mại đến giải trí và thậm chí cả y tế, văn hóa, xã hội và giáo dục,… Đặc biệt trong giai đoạn bị bệnh dịch Covid khiến thành phố phải phong tỏa hạn chế di chuyển thì CNTT càng cho thấy tầm quan trọng của nó.</strong></p><p><strong>Vì vậy, tốt nghiệp ngành CNTT hiện nay đang có rất nhiều cơ hội để phát triển nghề nghiệp trên nhiều lĩnh vực khác nhau. Đặc biệt là những doanh nghiệp đa quốc gia đang phát triển và tăng trưởng rất mạnh tại việt nam.</strong></p>'
	},
	row2: {
		image: '',
		title: 'Công nghệ thông tin',
		positionContent: 'left',
		desc: '<p><strong>Công nghệ thông tin được xem như là ngành mũi nhọn hướng đến sự phát triển của khoa học và công nghệ trong thời đại số hiện nay, là một trong những ngành có xu hướng thay đổi theo từng ngày, được ứng dụng rộng rãi trong mọi ngành nghề.</strong></p><p><strong>Ứng dụng của công nghệ thông tin (CNTT) trong đời sống xã hội hiện đại ngày càng nhiều, từ thương mại đến giải trí và thậm chí cả y tế, văn hóa, xã hội và giáo dục,… Đặc biệt trong giai đoạn bị bệnh dịch Covid khiến thành phố phải phong tỏa hạn chế di chuyển thì CNTT càng cho thấy tầm quan trọng của nó.</strong></p><p><strong>Vì vậy, tốt nghiệp ngành CNTT hiện nay đang có rất nhiều cơ hội để phát triển nghề nghiệp trên nhiều lĩnh vực khác nhau. Đặc biệt là những doanh nghiệp đa quốc gia đang phát triển và tăng trưởng rất mạnh tại việt nam.</strong></p>'
	}
};

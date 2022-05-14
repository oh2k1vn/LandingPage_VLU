import parse from 'html-react-parser';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useBlog } from '../states/stores/useBlog';

export default function Home() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	const [states, actions] = useBlog();
	const { t, lang } = useTranslation();

	const getBlogs = () => {
		actions
			.getBlogs('gioi-thieu')
			.then(res => console.log(res))
			.catch(err => {
				// some error handling
			});
	};

	React.useEffect(() => {
		getBlogs();
		// eslint-disable-next-line
	}, [lang]);

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

			<div className='wrap-slider'>
				<Slider {...settings}>
					<div className='banner'>
						<Image src='/image/banner3.jpg' alt='' layout='fill' />
						<div className='banner_title'>
							<h1>{data?.banner?.title}</h1>
							{data?.banner?.desc && parse(data?.banner?.desc)}
						</div>
					</div>
					<div className='banner'>
						<Image src='/image/banner3.jpg' alt='' layout='fill' />
						<div className='banner_title'>
							<h1>{data?.banner?.title}</h1>
							{data?.banner?.desc && parse(data?.banner?.desc)}
						</div>
					</div>
				</Slider>
			</div>

			<main className='home'>
				<div className='block'>
					<div className='container block_flex'>
						<div className='block_title'>
							<h2>{data.row1.title}</h2>
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
					<div className='container block_flex'>
						<div className='block_title'>
							<h2>{data.row2.title}</h2>
							{/* Render Content */}
							{data.row2.desc && parse(data.row2.desc)}
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
							<h2>{data.row3.title}</h2>
							{/* Render Content */}
							{data.row3.desc && parse(data.row3.desc)}
							<button className='block_title_btn'>Liên hệ ngay</button>
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
		title: 'Công nghệ thông tin 4.0',
		desc: '<p>Công nghệ thông tin được xem như là ngành mũi nhọn hướng đến sự phát triển của khoa học và công nghệ trong thời đại số hiện nay, là một trong những ngành có xu hướng thay đổi theo từng ngày, được ứng dụng rộng rãi trong mọi ngành nghề.</p><p>Ứng dụng của công nghệ thông tin (CNTT) trong đời sống xã hội hiện đại ngày càng nhiều, từ thương mại đến giải trí và thậm chí cả y tế, văn hóa, xã hội và giáo dục,… Đặc biệt trong giai đoạn bị bệnh dịch Covid khiến thành phố phải phong tỏa hạn chế di chuyển thì CNTT càng cho thấy tầm quan trọng của nó.</p><p>Vì vậy, tốt nghiệp ngành CNTT hiện nay đang có rất nhiều cơ hội để phát triển nghề nghiệp trên nhiều lĩnh vực khác nhau. Đặc biệt là những doanh nghiệp đa quốc gia đang phát triển và tăng trưởng rất mạnh tại việt nam.</p>'
	},
	row2: {
		image: '',
		title: 'Đào tạo đại học',
		positionContent: 'left',
		desc: '<p>Chương trình Đào tạo Đặc biệt ngành Công nghệ Thông tin được phát triển từ Chương trình Tiêu chuẩn với chất lượng đào tạo đã được khẳng định trong nhiều năm qua, và kết hợp với các điểm đặc trưng:</p><ul><li><strong>Chú trọng thực hành:</strong> Sinh viên CTĐT Đặc biệt ngành Công nghệ Thông tin được học song song lý thuyết và thực hành tại phòng Lab (không quá 30 sinh viên).</li><li><strong>Tiếp cận doanh nghiệp sớm:</strong> Từ năm 3, sinh viên CTĐTĐB ngành Công nghệ Thông tin được đưa đến các doanh nghiệp thực tập và được doanh nghiệp đào tạo chuyên ngành.</li><li><strong>Định hướng chuyên sâu:</strong> Năm 4, Khoa sẽ cung cấp các doanh nghiệp đã thỏa thuận hợp tác, sinh viên CTĐT Đặc biệt ngành Công nghệ Thông tin sẽ được tự do lựa chọn doanh nghiệp ở lĩnh vực chuyên môn mà sinh viên mong muốn làm việc sau này.</li></ul><p>Có 4 chuyên ngành: Công nghệ Phần mềm, Công nghệ Dữ liệu, Tin học Quản trị, An ninh mạng. Đồ án tốt nghiệp chính là nhu cầu thực tại cuả Doanh nghiệp mà SV đã lựa chọn.</p>'
	},
	row3: {
		image: '',
		title: 'Cơ hội nghề nghiệp & Các đối tác & Học bổng',
		positionContent: 'left',
		desc: '<ul><li>Lập trình viên</li><li>Chuyên gia phát triển phần mềm</li><li>Lập trình, xây dựng hệ thống Internet vạn vật (IoT)</li><li>Quản trị mạng doanh nghiệp</li><li>An ninh mạng</li><li>Phân tích dữ liệu doanh nghiệp</li><li>Quản trị hệ thống điện toán đám mây</li></ul>'
	}
};

const Hero = () => {
	return (
		<section className="t8-banner" data-widget="header" >
			<div className="container">
				<div data-block="decoration" data-decoration-id={1}>
					<img
						src="https://static.namtay.vn/assets/img/theme8/mau1/banner-heart-yellow.svg"
						className="banner-icon-1"
					/>
					<img
						src="https://static.namtay.vn/assets/img/theme8/mau1/banner-heart-blue.svg"
						className="banner-icon-2"
					/>
					<img
						src="https://static.namtay.vn/assets/img/theme8/mau1/banner-heart-pink.svg"
						className="banner-icon-3-decor2"
					/>
				</div>
			</div>
			<div className="t8-banner-notified text-center" >
				Chúng tôi cưới
			</div>
			<div className="wrapper">
				<div className="t8-banner-main">
					<div className="banner-groom">
						<div className="name" >
							Hải Dương
						</div>
						<div className="space"/>
					</div>
					<div className="banner-bride">
						<div className="plus">+</div>
						<div className="name" >
							Kiều Oanh
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="t8-banner-time text-center" >
					04.03.2024
				</div>
			</div>
		</section>
	)
}

export default Hero

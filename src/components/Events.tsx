const Events = () => {
	return (
		<section className="t8-event" data-widget="event">
			<div className="decoration" data-block="decoration" data-decoration-id={1}>
				<img src="https://static.namtay.vn/assets/img/theme8/mau1/event-icon1-mau1.svg" className="icon1-mau1" />
				<img src="https://static.namtay.vn/assets/img/theme8/mau1/event-icon2-mau1.svg" className="icon2-mau1" />
				<img src="https://static.namtay.vn/assets/img/theme8/mau1/event-icon3-mau1.svg" className="icon3-mau1" />
				<img src="https://static.namtay.vn/assets/img/theme8/mau1/event-icon4-mau1.svg" className="icon4-mau1" />
				<img src="https://static.namtay.vn/assets/img/theme8/mau1/event-icon5-mau1.svg" className="icon5-mau1" />
				<img src="https://static.namtay.vn/assets/img/theme8/mau1/event-icon6-mau1.svg" className="icon6-mau1" />
			</div>
			<div className="container">
				<div className="row">
					<div className="t8-event-title" data-editable="true">
						<p>Thời gian tổ chức sự kiện</p>
					</div>
				</div>
				<div className="row">
					<div className="t8-event-main">
						<div className="row">
							<div data-block="timemark" className="t8-event-item">
								<div className="t8-event-time">
									<div className="wr">
										<div data-block-node="timemark-datetime">10:00 27/01/2024</div>
									</div>
								</div>
								<div className="event-icon" />
								<div className="t8-event-content">
									<div className="title" data-block-node="timemark-name">Ăn hỏi</div>
									<a data-block-node="timemark-address" href="https://maps.app.goo.gl/8qFFMaaDC87Nqe6YA" target="_blank" rel="noopener noreferrer" className="home">Nhà gái</a>
									<div className="address">
										Thôn Gia Phúc, xã Nguyệt Đức, huyện Yên Lạc, tỉnh Vĩnh Phúc
									</div>
								</div>
							</div>
							<div data-block="timemark" className="t8-event-item">
								<div className="t8-event-time">
									<div className="wr">
										<div data-block-node="timemark-datetime">17:00 03/03/2024</div>
									</div>
								</div>
								<div className="event-icon" />
								<div className="t8-event-content">
									<div className="title" data-block-node="timemark-name">Tiệc cưới nhà Gái</div>
									<a data-block-node="timemark-address" href="https://maps.app.goo.gl/8qFFMaaDC87Nqe6YA" target="_blank" rel="noopener noreferrer" className="home">Nhà gái</a>
									<div className="address">
										Thôn Gia Phúc, xã Nguyệt Đức, huyện Yên Lạc, tỉnh Vĩnh Phúc
									</div>
								</div>
							</div>
							<div data-block="timemark" className="t8-event-item">
								<div className="t8-event-time">
									<div className="wr">
										<div data-block-node="timemark-datetime">17:00 03/03/2024</div>
									</div>
								</div>
								<div className="event-icon" />
								<div className="t8-event-content">
									<div className="title" data-block-node="timemark-name">Tiệc cưới nhà Trai</div>
									<a data-block-node="timemark-address" href="https://maps.app.goo.gl/oEKSJRTtvubTY32J8" target="_blank" rel="noopener noreferrer" className="home">Nhà trai</a>
									<div className="address" data-block-node="timemark-content">
										Số 18 LK 16, Khu đô thị Phú Lương, Phú La, Hà Đông
									</div>
								</div>
							</div>
							<div data-block="timemark" className="t8-event-item">
								<div className="t8-event-time">
									<div className="wr">
										<div data-block-node="timemark-datetime">13:00 04/03/2024</div>
									</div>
								</div>
								<div className="event-icon" />
								<div className="t8-event-content">
									<div className="title" data-block-node="timemark-name">Đón dâu</div>
									<a data-block-node="timemark-address" href="https://maps.app.goo.gl/8qFFMaaDC87Nqe6YA" target="_blank" rel="noopener noreferrer" className="home">Nhà gái</a>
									<div className="address">
										Thôn Gia Phúc, xã Nguyệt Đức, huyện Yên Lạc, tỉnh Vĩnh Phúc
									</div>
								</div>
							</div>
						</div>
						<i className="bx bxs-heart icon-heart" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Events

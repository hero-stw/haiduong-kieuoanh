const Location = () => {
	return (
		<section className="t8-location" data-widget="location" data-duplicatable="false">
			<div className="container text-center">
				<div className="t8-location-top">
					<p>
						Trân trọng kính mời
					</p>
					{/*<div className="guest_name" data-id="invitation" id="invitation"> {'{'}{'{'}__guest_name__{'}'}{'}'} </div>
					<p />*/}
				</div>
				<div className="t8-location-mid">
					<div className="t8-location-mid-time" data-editable="true">Hôn lễ sẽ diễn ra vào hồi 15 giờ</div>
					<div className="t8-location-img">
						<div data-block="decoration" data-decoration-id={4}>
							<img src="https://static.namtay.vn/assets/img/theme8/invite-calendar.png" className="t8-location-calendar" />
							<div className="t8-location-date-default" data-editable="true">04.03</div>
						</div>
					</div>
					<a className="t8-location-mid-add" data-block-node="url" href="https://maps.app.goo.gl/oEKSJRTtvubTY32J8" target="_blank" rel="noopener noreferrer">Số 18 LK 16, Khu đô thị Phú Lương, Phú La, Hà Đông</a>
				</div>
				<div className="t8-location-mid-hope" data-editable="true">
					Sự hiện diện của bạn là niềm vinh hạnh của chúng mình!
				</div>
			</div>
		</section>

	)
}

export default Location

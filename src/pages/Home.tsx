import Location from "../components/Location.tsx";
import Hero from "../components/Hero.tsx";
import RSVPForm from "../components/RSVPForm.tsx";
import Events from "../components/Events.tsx";
import Gallery from "../components/Gallery.tsx";

const Home = () => {
	return (
		<div className={"t8"}>
			<Hero/>
			<Location/>
			<Events/>
			<Gallery/>
			<RSVPForm/>
		</div>

	)
}

export default Home

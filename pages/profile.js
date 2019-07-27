import Image from "../components/image";

const Profile = () => {
	let styles = {
		fontFamily: "helvetica",
		fontWeight: "normal",
		margin: "auto 0px",
		padding: "10px",
		border: "1px solid black",
		background: "#FFFF"
	};

	return (
		<div style={styles}>
			<h2>
				My name is <strong>Nick</strong>
			</h2>
			<Image />
			<p>I am a highly motivated Frontend developer</p>
			<p>My projects are: </p>
			<ul>
				<li>popcorn (Online Cinema Booking system, pwa )</li>
				<li>blablabalbal</li>
				<li>blablabalbal</li>
				<li>blablabalbal</li>
				<li>blablabalbal</li>
			</ul>
		</div>
	);
};

export default Profile;

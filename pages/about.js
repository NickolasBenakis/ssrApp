import Link from "next/link";

const About = () => {
	return (
		<div>
			<h1>About Page</h1>
			<Link href="/">
				<button>Back</button>
			</Link>
		</div>
	);
};

export default About;

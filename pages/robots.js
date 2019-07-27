import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styles from "../styling/styles";
const Robots = props => {
	return (
		<div style={styles}>
			<h1>Robots</h1>
			<Link href="/">
				<button>Home</button>
			</Link>
			<br />
			<br />
			<div>
				{props.robots.map(robot => (
					<li key={robot.id}>
						<Link href={`robots/${robot.id}`}>
							<a>{robot.name}</a>
						</Link>
					</li>
				))}
			</div>
		</div>
	);
};

Robots.getInitialProps = async function() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	console.log(data);
	return {
		robots: data
	};
};

export default Robots;

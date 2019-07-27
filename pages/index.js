import Link from "next/link";
import styles from "../styling/styles";

const index = () => (
	<div style={styles}>
		<h1>SSR magician</h1>
		<Link href="/about">
			<button>About me</button>
		</Link>
		<Link href="/profile">
			<button>Profile</button>
		</Link>
		<Link href="/robots">
			<button>Robots</button>
		</Link>
	</div>
);

export default index;

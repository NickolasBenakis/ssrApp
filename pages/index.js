import Link from "next/link";

let styles = {
	fontFamily: "helvetica",
	fontWeight: "normal",
	margin: "auto 0px",
	padding: "10px",
	border: "1px solid black",
	background: "#FFFF"
};

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

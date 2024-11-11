import Image from "next/image";
import Hero from "./components/Hero";
import Extension from "./components/extension";
import Customize from "./components/customize";
import Management from "./components/management";
import Work from "./components/Work";
import Sponsers from "./components/Sponsers";
export default function Home() {
	return (
		<div>
			<Hero />
			<Management/>
			<Extension />
			<Customize />
			<Work/>
			<Sponsers/>
		</div>
	);
}
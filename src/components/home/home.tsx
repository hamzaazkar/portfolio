import { Stack } from '@mui/material';

import { MovingTextBar } from '../MovingTextBar';
import { About } from '../about';
import { Contact } from '../contact';
import { Experience } from '../experience';
import { Footer } from '../footer';
import { Header } from '../header';
import { HeroBanner } from '../heroBanner';
import { Projects } from '../projects';
import { Skills } from '../skills';

export function Home() {
	return (
		<Stack direction='column'>
			<Header />
			<HeroBanner />
			<MovingTextBar />
			<Projects />
			<Skills />
			<About />
			<Experience />
			<Contact />
			<Footer />
		</Stack>
	);
}

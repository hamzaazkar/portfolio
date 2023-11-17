import { Stack } from '@mui/material';

import { MovingTextBar } from '../MovingTextBar';
import { About } from '../about';
import { Header } from '../header';
import { HeroBanner } from '../heroBanner';
import { Skills } from '../skills';

export function Home() {
	return (
		<Stack direction='column'>
			<Header />
			<HeroBanner />
			<MovingTextBar />
			<About />
			<Skills />
		</Stack>
	);
}
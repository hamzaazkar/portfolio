import { Stack } from '@mui/material';

import { MovingTextBar } from '../MovingTextBar';
import { About } from '../about';
import { Header } from '../header';
import { HeroBanner } from '../heroBanner';

export function Home() {
	return (
		<Stack direction='column'>
			<Header />
			<HeroBanner />
			<MovingTextBar />
			<About />
		</Stack>
	);
}
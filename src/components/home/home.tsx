import { Stack } from '@mui/material';

import { Header } from '../header';
import { HeroBanner } from '../heroBanner';
import { MovingTextBar } from '../MovingTextBar';

export function Home() {
	return (
		<Stack direction='column'>
			<Header />
			<HeroBanner />
			<MovingTextBar />
		</Stack>
	);
}
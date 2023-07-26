import { Stack } from '@mui/material';

import { Header } from '../header';
import { HeroBanner } from '../heroBanner';

export function Home() {
	return (
		<Stack direction='column'>
			<Header />
			<HeroBanner />
		</Stack>
	);
}
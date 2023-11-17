import {
	ArrowBackIosNewOutlined,
	ArrowForwardIosOutlined,
	OutboundRounded,
} from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel';
import CircleIcon from '@mui/icons-material/Circle';
import {
	Button,
	Container,
	Stack,
	Typography
} from '@mui/material';
import Typewriter from 'typewriter-effect';

import cv from './cv-hamza.pdf';

export function HeroBanner() {
	return (
		<Container maxWidth='xl'>
			<Stack direction='row' justifyContent='space-between' sx={{ height: 550, marginTop: 16, marginBottom: 16 }}>
				<Stack direction='column' justifyContent='space-evenly'>
					<Typography variant='h1' fontWeight='800' fontSize={120}>FRONTEND</Typography>
					<Stack direction='row' alignItems='center' spacing={2}>
						<Button variant='outlined' color='inherit' sx={{ width: 100, height: 50, borderRadius: 5 }}>
							<ArrowBackIosNewOutlined color='inherit' />
							<ArrowForwardIosOutlined color='inherit' />
						</Button>
						<Typography variant='h1' fontSize={120} fontWeight='800' >
							<Typewriter
								options={{
									strings: ['DEVELOPER', 'ENGINEER'],
									autoStart: true,
									loop: true,
								}}
							/>
						</Typography>
					</Stack>
					<Typography
						variant='h1'
						fontSize={120}
						fontWeight='800'
					>
						& DESIGNER
						<span>
							<CircleIcon
								fontSize='large'
								sx={{ marginLeft: 2 }}
							/>
						</span>
						<span>
							<CancelIcon
								fontSize='large'
							/>
						</span>
						<span>
							<CircleIcon
								fontSize='large'
								sx={{ color: '#abf129' }}
							/>
						</span>
					</Typography>

					<Stack direction={{ xs: 'column', sm: 'row' }} sx={{ marginTop: 5 }} spacing={3} alignItems='flex-start' justifyContent='flex-start'>
						<a
							href='mailto:hamzaazkar@gmail.com'
							style={{ color: 'white' }}
						>
							<Button
								variant='outlined'
								color='inherit'
								sx={{ p: 2, borderRadius: 10 }}
							>
								<Typography
									variant='h5'
									fontWeight={600}
									noWrap
								>
									CONTACT ME
								</Typography>
							</Button>
						</a>

						<a
							href={cv}
							download='cv-hamza'
							target='_blank'
							style={{ color: 'white' }}
						>
							<Button
								variant='text'
								color='inherit'
								sx={{ m: 2 }}
							>
								<Typography
									variant='h5'
									fontWeight={600}
									noWrap
								>
									DOWNLOAD CV <span><OutboundRounded fontSize='medium' sx={{ color: '#abf129' }} /></span>
								</Typography>
							</Button>
						</a>
					</Stack>
				</Stack>

			</Stack>
		</Container>
	);
}

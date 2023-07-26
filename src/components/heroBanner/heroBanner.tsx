import {
	Container,
	Typography,
	Stack,
	Button
} from '@mui/material';
import Typewriter from 'typewriter-effect';
import CircleIcon from '@mui/icons-material/Circle';
import CancelIcon from '@mui/icons-material/Cancel';
import {
	ArrowBackIosNewOutlined,
	ArrowForwardIosOutlined,
	OutboundRounded,
} from '@mui/icons-material';

export function HeroBanner() {
	return (
		<Container maxWidth='xl'>
			<Stack direction='row' justifyContent='space-between' sx={{ height: 400, marginTop: 18, marginBottom: 16 }}>
				<Stack direction='column' justifyContent='space-evenly'>
					<Typography variant='h1' fontWeight='900'>FRONTEND</Typography>
					<Stack direction='row' alignItems='center' spacing={2}>
						<Button variant='outlined' color='inherit' sx={{ width: 100, height: 50, borderRadius: 5 }}>
							<ArrowBackIosNewOutlined color='inherit' />
							<ArrowForwardIosOutlined color='inherit' />
						</Button>
						<Typography variant='h1' fontWeight='900' >
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
						fontWeight='900'
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

					<Stack direction='row' sx={{ marginTop: 5 }} spacing={3}>
						<Button
							variant='outlined'
							color='inherit'
							sx={{ width: 300, height: 60, borderRadius: 10 }}
						>
							<Typography fontSize={30} fontWeight={600}>
								CONTACT ME
							</Typography>
						</Button>

						<Button
							variant='text'
							color='inherit'
							sx={{ width: 300, height: 50, borderRadius: 5 }}
						>
							<Typography fontSize={30} fontWeight={600}>
								DOWNLOAD CV <span><OutboundRounded fontSize='medium' sx={{ color: '#abf129' }} /></span>
							</Typography>
						</Button>
					</Stack>
				</Stack>

			</Stack>
		</Container>
	);
}

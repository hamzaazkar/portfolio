import {
	Container,
	Grid,
	Typography,
	Stack
} from '@mui/material';

export function Header() {
	return (
		<Grid
			sx={{
				borderBottom: '1px solid ',
				margin: '-8px',
				padding: '0px',
			}}
		>
			<Container
				maxWidth='xl'
			>
				<Grid
					container
					justifyContent='space-between'
					sx={{
						padding: 1.3,
					}}
				>
					<Grid item>
						<Typography
							variant='h4'
							fontWeight='900'
						>
							<span style={{ color: '#abf129' }}>.</span>
							Hamza Azkar
						</Typography>
					</Grid>

					<Stack direction='row' justifyContent='space-between' spacing={3}>
						<Typography
							variant='h5'
							fontWeight='600'
						>
							Hamzaazkar@gmail.com
						</Typography>

						<Typography
							variant='h5'
							fontWeight='600'
						>
							+92(0304)7860564
						</Typography>
					</Stack>
				</Grid>
			</Container>
		</Grid>


	);
}
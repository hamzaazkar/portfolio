import {
	Container,
	Grid,
	Stack,
	Typography
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
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					spacing={{ xs: 1, sm: 2, md: 3 }}
					justifyContent='space-between'
					alignItems='flex-start'
					sx={{
						padding: 1.3,
					}}
				>
					<Typography
						variant='h4'
						fontWeight='900'
						noWrap
					>
						<span style={{ color: '#abf129' }}>.</span>
						Hamza Azkar
					</Typography>

					<Stack
						direction={{ xs: 'column', sm: 'row' }}
						spacing={{ xs: 1, sm: 2, md: 3 }}
						justifyContent='space-between'
						alignItems='flex-start'
					>
						<Typography
							variant='h5'
							fontWeight='600'
						>
							Hamzaazkar@gmail.com
						</Typography>

						<Typography
							variant='h5'
							fontWeight='600'
							sx={{ mt: 0 }}
						>
							+92(0304)7860564
						</Typography>
					</Stack>
				</Stack>
			</Container>
		</Grid>


	);
}
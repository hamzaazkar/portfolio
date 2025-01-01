import { CopyrightRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Button, ButtonBase, Stack, Typography } from '@mui/material';

export const Footer = () => {
	return (
		<Stack
			gap={0}
			sx={{
				// width: '100%',
				margin: 0,
				padding: 10,
				borderTopLeftRadius: '150px',
				borderTopRightRadius: '150px',
				backgroundColor: 'black'
			}}
		>

			<Typography textAlign='center' variant='h1' fontWeight={900}>Let's</Typography>
			<Typography textAlign='center' variant='h1' fontWeight={900}>Connect</Typography>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent='center'
				alignItems='center'
				paddingTop={5}
				gap={2}
			>
				<a
					target='_blank'
					style={{ color: 'white' }}
					href='https://wa.me/qr/HXLDBPOQWSNHF1'
				>
					<Button
						variant='outlined'
						color='inherit'
						sx={{ color: 'white', fontSize: '22px', p: 2, borderRadius: 10, height: '50px' }}
					>
						Whatsapp me
					</Button>
				</a>


				<a
					href='mailto:hamzaazkar@gmail.com'
					style={{ color: 'white' }}
				>
					<Button
						variant='outlined'
						color='inherit'
						sx={{ color: 'white', fontSize: '22px', p: 2, borderRadius: 10, height: '50px' }}
					>
						Mail me
					</Button>
				</a>

			</Stack>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent='space-around'
				paddingTop={5}
				gap={2}
			>
				<a
					href='www.linkedin.com/in/muhammad-hamza-79803311b'
					target='_blank'
					style={{ color: 'white' }}
				>
					<ButtonBase
						color='inherit'
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '200px',
							color: 'white',
							fontSize: '24px',
							p: 0.5,
							borderTop: 'solid 1px grey',
							'&:hover': {
								borderTop: 'solid 1px #abf129',
							},
						}}
					>
						<Typography noWrap>
							Linkedin
						</Typography>

						<LinkedIn />

					</ButtonBase>
				</a>

				<a
					href='https://github.com/hamzaazkar'
					target='_blank'
					style={{ color: 'white' }}
				>
					<ButtonBase
						color='inherit'
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '200px',
							color: 'white',
							fontSize: '24px',
							p: 0.5,
							borderTop: 'solid 1px grey',
							'&:hover': {
								borderTop: 'solid 1px #abf129',
							},
						}}
					>
						<Typography>
							Github
						</Typography>

						<GitHub />

					</ButtonBase>
				</a>


				{/* <a
					href='mailto:hamzaazkar@gmail.com'
					target='_blank'
					style={{ color: 'white' }}
				>
					<ButtonBase
						color='inherit'
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '200px',
							color: 'white',
							fontSize: '24px',
							p: 0.5,
							borderTop: 'solid 1px grey',
							'&:hover': {
								borderTop: 'solid 1px #abf129',
							},
						}}
					>
						<Typography>
							Linkedin
						</Typography>

						<LinkedIn />

					</ButtonBase>
				</a> */}
			</Stack>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent='space-between'
				alignItems='center'
				paddingTop={5}
				gap={2}
			>
				<Typography
					color='grey'
				>
					<CopyrightRounded sx={{ fontSize: '14px' }} /> 2024 , Hamza Azkar portfolio
				</Typography>

				<Typography
					color='grey'
				>
					Developed and designed by <b>.Hamza</b>
				</Typography>
			</Stack>

			{/* <MovingTextBar /> */}
		</Stack>
	);
};

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Stack, Typography } from '@mui/material';
import myPic from '../../assets/myPic.jpg';

export const About = () => {
	return (
		<Container
			maxWidth='xl'
			sx={{ marginTop: 16, marginBottom: 16 }}
		>
			<Typography
				variant='h2'
				fontWeight='700'
				noWrap
			>
				<span style={{ color: '#abf129' }}>.</span>
				About
			</Typography>

			<Stack
				direction='row'
				columnGap='40px'
				marginTop='40px'
				marginBottom='40px'
				alignItems='center'
			>
				<img
					src={myPic}
					alt='myPic'
					width={150}
					height={150}
					style={{
						borderRadius: '100px',
						filter: 'grayscale(100%)',
						objectFit: 'cover',
						objectPosition: '0 -10%'
					}}
				/>

				<Stack
					direction='row'
					alignItems='center'
					columnGap='10px'
				>
					<a
						href='https://github.com/hamzaazkar'
						style={{ color: 'white' }}
					>
						<LinkedInIcon sx={{ fontSize: '40px' }} />
					</a>

					<a
						href='https://github.com/hamzaazkar'
						style={{ color: 'white' }}
					>
						<GitHubIcon sx={{ fontSize: '40px' }} />
					</a>

				</Stack>

			</Stack>
		</Container>
	);
};

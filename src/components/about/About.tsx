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

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				columnGap='40px'
				marginTop='40px'
				marginBottom='40px'
				alignItems='center'
			>
				<Typography
					variant='h5'
					fontWeight='500'
					lineHeight={2}
				>
					Hey ! i’m Hamza , 26 years old from Pakistan .An accomplished developer interested in web design and combining the art of design with the art of programming !
				</Typography>

				<Typography
					variant='h5'
					fontWeight='500'
					lineHeight={2}
				>
					familiar with designing and implementing user friendly web applications using Html Css React and Next.js .Ability to create a full web pages design using Figma then transform it into real website
				</Typography>
			</Stack>

			<Typography
				variant='h3'
				fontWeight='700'
				noWrap
				fontStyle='italic'
				marginTop={2}
			>
				Degree :{' '}
				<span style={{ textDecoration: 'underline', color: '#abf129' }}>BSCS</span>
			</Typography>
		</Container>
	);
};

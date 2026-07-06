import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import myPic from '../../assets/myPic.jpg';
import { SOCIAL_LINKS } from '../../constants/links';

const MotionImg = motion.img;
const MotionA = motion.a;

export const About = () => {
	return (
		<Container
			id='about'
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
				<MotionImg
					src={myPic}
					alt='myPic'
					width={150}
					height={150}
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5 }}
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
					<MotionA
						href={SOCIAL_LINKS.linkedin}
						target='_blank'
						rel='noreferrer'
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.95 }}
						style={{ color: 'white' }}
					>
						<LinkedInIcon sx={{ fontSize: '40px' }} />
					</MotionA>

					<MotionA
						href={SOCIAL_LINKS.github}
						target='_blank'
						rel='noreferrer'
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.95 }}
						style={{ color: 'white' }}
					>
						<GitHubIcon sx={{ fontSize: '40px' }} />
					</MotionA>

				</Stack>

			</Stack>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				columnGap='40px'
				marginTop='40px'
				marginBottom='40px'
				alignItems='center'
				component={motion.div}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5, delay: 0.15 }}
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

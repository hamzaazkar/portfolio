import { CopyrightRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Button, ButtonBase, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../constants/links';

const MotionButton = motion(Button);
const MotionButtonBase = motion(ButtonBase);

export const Footer = () => {
	return (
		<Stack
			id='contact'
			gap={0}
			sx={{
				margin: 0,
				padding: 10,
				borderTopLeftRadius: '150px',
				borderTopRightRadius: '150px',
				backgroundColor: 'background.paper',
			}}
		>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5 }}
			>
				<Typography textAlign='center' variant='h1' fontWeight={900}>Let's</Typography>
				<Typography textAlign='center' variant='h1' fontWeight={900}>Connect</Typography>
			</motion.div>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent='center'
				alignItems='center'
				paddingTop={5}
				gap={2}
			>
				<a
					target='_blank'
					rel='noreferrer'
					style={{ color: 'white' }}
					href={SOCIAL_LINKS.whatsapp}
				>
					<MotionButton
						variant='outlined'
						color='inherit'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
						sx={{ color: 'white', fontSize: '22px', p: 2, height: '50px' }}
					>
						Whatsapp me
					</MotionButton>
				</a>

				<a
					href={SOCIAL_LINKS.email}
					style={{ color: 'white' }}
				>
					<MotionButton
						variant='outlined'
						color='inherit'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
						sx={{ color: 'white', fontSize: '22px', p: 2, height: '50px' }}
					>
						Mail me
					</MotionButton>
				</a>
			</Stack>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent='space-around'
				paddingTop={5}
				gap={2}
			>
				<a
					href={SOCIAL_LINKS.linkedin}
					target='_blank'
					rel='noreferrer'
					style={{ color: 'white' }}
				>
					<MotionButtonBase
						color='inherit'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '200px',
							color: 'white',
							fontSize: '24px',
							p: 0.5,
							borderTop: 'solid 1px grey',
							'&:hover': {
								borderTop: 'solid 1px',
								borderTopColor: 'primary.main',
							},
						}}
					>
						<Typography noWrap>
							Linkedin
						</Typography>

						<LinkedIn />

					</MotionButtonBase>
				</a>

				<a
					href={SOCIAL_LINKS.github}
					target='_blank'
					rel='noreferrer'
					style={{ color: 'white' }}
				>
					<MotionButtonBase
						color='inherit'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '200px',
							color: 'white',
							fontSize: '24px',
							p: 0.5,
							borderTop: 'solid 1px grey',
							'&:hover': {
								borderTop: 'solid 1px',
								borderTopColor: 'primary.main',
							},
						}}
					>
						<Typography>
							Github
						</Typography>

						<GitHub />

					</MotionButtonBase>
				</a>
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
		</Stack>
	);
};

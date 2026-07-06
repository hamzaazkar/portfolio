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
	IconButton,
	Stack,
	Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { SOCIAL_LINKS } from '../../constants/links';
import { SECTION_IDS, scrollToSection } from '../../utils/scrollToSection';

import cv from './cv-hamza.pdf';

const MotionButton = motion(Button);

const headlineVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.15 },
	},
};

const lineVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0 },
};

export function HeroBanner() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToSection = (direction: -1 | 1) => {
		const nextIndex = Math.min(
			SECTION_IDS.length - 1,
			Math.max(0, currentIndex + direction)
		);
		setCurrentIndex(nextIndex);
		scrollToSection(SECTION_IDS[nextIndex]);
	};

	return (
		<Container maxWidth='xl' id='home'>
			<Stack direction='row' justifyContent='space-between' sx={{ height: 550, marginTop: 12, marginBottom: 12 }}>
				<motion.div
					initial='hidden'
					animate='visible'
					variants={headlineVariants}
					style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '100%' }}
				>
					<motion.div variants={lineVariants}>
						<Typography variant='h1' fontWeight='800' fontSize={120}>FRONTEND</Typography>
					</motion.div>

					<Stack direction='row' alignItems='center' spacing={2}>
						<Stack
							direction='row'
							alignItems='center'
							spacing={1}
							sx={{ border: '1px solid', borderColor: 'grey.700', borderRadius: 5, width: 100, height: 50 }}
						>
							<IconButton
								color='inherit'
								aria-label='Previous section'
								disabled={currentIndex === 0}
								onClick={() => goToSection(-1)}
							>
								<ArrowBackIosNewOutlined color='inherit' fontSize='small' />
							</IconButton>
							<IconButton
								color='inherit'
								aria-label='Next section'
								disabled={currentIndex === SECTION_IDS.length - 1}
								onClick={() => goToSection(1)}
							>
								<ArrowForwardIosOutlined color='inherit' fontSize='small' />
							</IconButton>
						</Stack>
						<motion.div variants={lineVariants}>
							<Typography variant='h1' fontSize={120} fontWeight='800' >
								<Typewriter
									options={{
										strings: ['DEVELOPER', 'ENGINEER'],
										autoStart: true,
										loop: true,
									}}
								/>
							</Typography>
						</motion.div>
					</Stack>
					<motion.div variants={lineVariants}>
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
									sx={{ color: 'primary.main' }}
								/>
							</span>
						</Typography>
					</motion.div>

					<Stack direction={{ xs: 'column', sm: 'row' }} sx={{ marginTop: 5 }} spacing={3} alignItems='flex-start' justifyContent='flex-start'>
						<a
							href={SOCIAL_LINKS.email}
							style={{ color: 'white' }}
						>
							<MotionButton
								variant='outlined'
								color='inherit'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.97 }}
								sx={{ p: 2, borderRadius: 10 }}
							>
								<Typography
									variant='h5'
									fontWeight={600}
									noWrap
								>
									CONTACT ME
								</Typography>
							</MotionButton>
						</a>

						<a
							href={cv}
							download='cv-hamza'
							target='_blank'
							style={{ color: 'white' }}
						>
							<MotionButton
								variant='text'
								color='inherit'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.97 }}
								sx={{ m: 2 }}
							>
								<Typography
									variant='h5'
									fontWeight={600}
									noWrap
								>
									DOWNLOAD CV <span><OutboundRounded fontSize='medium' sx={{ color: 'primary.main' }} /></span>
								</Typography>
							</MotionButton>
						</a>
					</Stack>
				</motion.div>
			</Stack>
		</Container>
	);
}

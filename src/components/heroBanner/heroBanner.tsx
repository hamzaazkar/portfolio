import {
	ArrowBackIosNewOutlined,
	ArrowForwardIosOutlined,
	OutboundRounded,
} from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel';
import CircleIcon from '@mui/icons-material/Circle';
import {
	Box,
	Button,
	Container,
	Grid,
	IconButton,
	Stack,
	Typography
} from '@mui/material';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import myPic from '../../assets/myPic.jpg';
import { MagneticButton } from '../cursor/MagneticButton';
import { SOCIAL_LINKS } from '../../constants/links';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { SECTION_IDS, scrollToSection } from '../../utils/scrollToSection';
import { tokens } from '../../theme/tokens';

import cv from './cv-hamza.pdf';

const heroVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.15, delayChildren: 0.1 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const visualVariants = {
	hidden: { opacity: 0, scale: 0.85, y: 20 },
	visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
};

export function HeroBanner() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const prefersReducedMotion = usePrefersReducedMotion();

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
	const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

	const blobX = useTransform(springX, (v) => v * 30);
	const blobY = useTransform(springY, (v) => v * 30);
	const imageX = useTransform(springX, (v) => v * -12);
	const imageY = useTransform(springY, (v) => v * -12);

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (prefersReducedMotion) return;
		const rect = event.currentTarget.getBoundingClientRect();
		mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
		mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
	};

	const goToSection = (direction: -1 | 1) => {
		const nextIndex = Math.min(
			SECTION_IDS.length - 1,
			Math.max(0, currentIndex + direction)
		);
		setCurrentIndex(nextIndex);
		scrollToSection(SECTION_IDS[nextIndex]);
	};

	return (
		<Container
			maxWidth='xl'
			id='home'
			onMouseMove={handleMouseMove}
			sx={{ position: 'relative', overflow: 'hidden', pt: { xs: 14, md: 18 }, pb: { xs: 10, md: 14 } }}
		>
			<Grid container spacing={4} alignItems='center'>
				<Grid item xs={12} md={7}>
					<motion.div initial='hidden' animate='visible' variants={heroVariants}>
						<motion.div variants={itemVariants}>
							<Typography
								variant='h1'
								fontWeight={600}
								sx={{ fontSize: { xs: '48px', sm: '72px', md: '96px' }, lineHeight: 1.02, letterSpacing: '-0.03em' }}
							>
								FRONTEND
							</Typography>
						</motion.div>

						<motion.div variants={itemVariants}>
							<Typography
								variant='h1'
								fontWeight={600}
								sx={{ fontSize: { xs: '48px', sm: '72px', md: '96px' }, lineHeight: 1.02, letterSpacing: '-0.03em', color: tokens.colors.textSecondary }}
							>
								<Typewriter
									options={{
										strings: ['DEVELOPER', 'ENGINEER'],
										autoStart: true,
										loop: true,
									}}
								/>
							</Typography>
						</motion.div>

						<motion.div variants={itemVariants}>
							<Typography
								variant='h1'
								fontWeight={600}
								sx={{ fontSize: { xs: '48px', sm: '72px', md: '96px' }, lineHeight: 1.02, letterSpacing: '-0.03em' }}
							>
								& DESIGNER
								<motion.span
									style={{ display: 'inline-block', marginLeft: 16 }}
									animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
									transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
								>
									<CircleIcon fontSize='large' sx={{ color: tokens.colors.textTertiary }} />
								</motion.span>
								<motion.span
									style={{ display: 'inline-block' }}
									animate={prefersReducedMotion ? undefined : { rotate: [0, 15, 0] }}
									transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
								>
									<CancelIcon fontSize='large' sx={{ color: tokens.colors.textTertiary }} />
								</motion.span>
								<motion.span
									style={{ display: 'inline-block' }}
									animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
									transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
								>
									<CircleIcon fontSize='large' sx={{ color: 'primary.main' }} />
								</motion.span>
							</Typography>
						</motion.div>

						<motion.div variants={itemVariants}>
							<Stack direction={{ xs: 'column', sm: 'row' }} sx={{ marginTop: 5 }} spacing={3} alignItems='flex-start'>
								<MagneticButton>
									<a href={SOCIAL_LINKS.email} data-cursor='hover' style={{ color: tokens.colors.textPrimary }}>
										<Button
											variant='outlined'
											color='inherit'
											sx={{ p: 2, borderColor: tokens.colors.border }}
										>
											<Typography variant='h5' fontWeight={600} noWrap sx={{ fontFamily: tokens.fontFamilyHeading }}>
												CONTACT ME
											</Typography>
										</Button>
									</a>
								</MagneticButton>

								<MagneticButton>
									<a href={cv} download='cv-hamza' target='_blank' data-cursor='hover' style={{ color: tokens.colors.textPrimary }}>
										<Button
											variant='text'
											color='inherit'
											sx={{ m: 2 }}
										>
											<Typography variant='h5' fontWeight={600} noWrap sx={{ fontFamily: tokens.fontFamilyHeading }}>
												DOWNLOAD CV <span><OutboundRounded fontSize='medium' sx={{ color: 'primary.main' }} /></span>
											</Typography>
										</Button>
									</a>
								</MagneticButton>
							</Stack>
						</motion.div>

						<motion.div variants={itemVariants}>
							<Stack
								direction='row'
								alignItems='center'
								spacing={1}
								sx={{ mt: 6, border: '1px solid', borderColor: tokens.colors.border, borderRadius: 5, width: 100, height: 50 }}
							>
								<IconButton
									color='inherit'
									aria-label='Previous section'
									data-cursor='hover'
									disabled={currentIndex === 0}
									onClick={() => goToSection(-1)}
								>
									<ArrowBackIosNewOutlined color='inherit' fontSize='small' />
								</IconButton>
								<IconButton
									color='inherit'
									aria-label='Next section'
									data-cursor='hover'
									disabled={currentIndex === SECTION_IDS.length - 1}
									onClick={() => goToSection(1)}
								>
									<ArrowForwardIosOutlined color='inherit' fontSize='small' />
								</IconButton>
							</Stack>
						</motion.div>
					</motion.div>
				</Grid>

				<Grid item xs={12} md={5}>
					<Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: { xs: 320, md: 460 } }}>
						<motion.div
							aria-hidden
							style={{
								position: 'absolute',
								width: '70%',
								height: '70%',
								borderRadius: '50%',
								background: 'radial-gradient(circle, rgba(237,237,236,0.14) 0%, rgba(237,237,236,0) 70%)',
								filter: 'blur(10px)',
								x: blobX,
								y: blobY,
							}}
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.15 }}
						/>

						<motion.div
							initial='hidden'
							animate='visible'
							variants={visualVariants}
							style={{ x: imageX, y: imageY, position: 'relative' }}
						>
							<Box
								component='img'
								src={myPic}
								alt='Hamza Azkar'
								sx={{
									width: { xs: 220, md: 320 },
									height: { xs: 220, md: 320 },
									borderRadius: '50%',
									objectFit: 'cover',
									objectPosition: '0 -10%',
									filter: 'grayscale(80%)',
									border: '3px solid',
									borderColor: tokens.colors.border,
								}}
							/>
						</motion.div>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

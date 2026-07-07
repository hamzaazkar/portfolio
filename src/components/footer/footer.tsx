import { CopyrightRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Button, ButtonBase, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../constants/links';
import { MagneticButton } from '../cursor/MagneticButton';
import { tokens } from '../../theme/tokens';

export const Footer = () => {
	return (
		<Stack
			id='contact'
			gap={0}
			sx={{
				margin: 0,
				padding: 10,
				borderTop: '1px solid',
				borderColor: tokens.colors.border,
				backgroundColor: 'background.paper',
			}}
		>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5 }}
			>
				<Typography
					textAlign='center'
					variant='h1'
					fontWeight={600}
					sx={{ fontFamily: tokens.fontFamilyHeading, letterSpacing: '-0.03em' }}
				>
					Let's
				</Typography>
				<Typography
					textAlign='center'
					variant='h1'
					fontWeight={600}
					sx={{ fontFamily: tokens.fontFamilyHeading, letterSpacing: '-0.03em', color: tokens.colors.textSecondary }}
				>
					Connect
				</Typography>
			</motion.div>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent='center'
				alignItems='center'
				paddingTop={5}
				gap={2}
			>
				<MagneticButton>
					<a
						target='_blank'
						rel='noreferrer'
						data-cursor='hover'
						style={{ color: tokens.colors.textPrimary }}
						href={SOCIAL_LINKS.whatsapp}
					>
						<Button
							variant='outlined'
							color='inherit'
							sx={{ color: tokens.colors.textPrimary, borderColor: tokens.colors.border, fontSize: '18px', p: 2, height: '50px' }}
						>
							Whatsapp me
						</Button>
					</a>
				</MagneticButton>

				<MagneticButton>
					<a
						href={SOCIAL_LINKS.email}
						data-cursor='hover'
						style={{ color: tokens.colors.textPrimary }}
					>
						<Button
							variant='outlined'
							color='inherit'
							sx={{ color: tokens.colors.textPrimary, borderColor: tokens.colors.border, fontSize: '18px', p: 2, height: '50px' }}
						>
							Mail me
						</Button>
					</a>
				</MagneticButton>
			</Stack>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent='space-around'
				paddingTop={5}
				gap={2}
			>
				<MagneticButton>
					<a
						href={SOCIAL_LINKS.linkedin}
						target='_blank'
						rel='noreferrer'
						data-cursor='hover'
						style={{ color: tokens.colors.textPrimary }}
					>
						<ButtonBase
							color='inherit'
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								width: '200px',
								color: tokens.colors.textPrimary,
								fontSize: '22px',
								p: 0.5,
								borderTop: '1px solid',
								borderColor: tokens.colors.border,
								'&:hover': {
									borderColor: tokens.colors.textPrimary,
								},
							}}
						>
							<Typography noWrap>
								Linkedin
							</Typography>

							<LinkedIn />

						</ButtonBase>
					</a>
				</MagneticButton>

				<MagneticButton>
					<a
						href={SOCIAL_LINKS.github}
						target='_blank'
						rel='noreferrer'
						data-cursor='hover'
						style={{ color: tokens.colors.textPrimary }}
					>
						<ButtonBase
							color='inherit'
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								width: '200px',
								color: tokens.colors.textPrimary,
								fontSize: '22px',
								p: 0.5,
								borderTop: '1px solid',
								borderColor: tokens.colors.border,
								'&:hover': {
									borderColor: tokens.colors.textPrimary,
								},
							}}
						>
							<Typography>
								Github
							</Typography>

							<GitHub />

						</ButtonBase>
					</a>
				</MagneticButton>
			</Stack>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				justifyContent='space-between'
				alignItems='center'
				paddingTop={5}
				gap={2}
			>
				<Typography sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 11, color: tokens.colors.textTertiary }}>
					<CopyrightRounded sx={{ fontSize: '14px' }} /> 2024 , Hamza Azkar portfolio
				</Typography>

				<Typography sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 11, color: tokens.colors.textTertiary }}>
					Developed and designed by <b>.Hamza</b>
				</Typography>
			</Stack>
		</Stack>
	);
};

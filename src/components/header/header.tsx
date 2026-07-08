import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
	Box,
	Button,
	Container,
	Drawer,
	IconButton,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MagneticButton } from '../cursor/MagneticButton';
import { scrollToSection } from '../../utils/scrollToSection';
import { tokens } from '../../theme/tokens';

const NAV_ITEMS = [
	{ label: 'Work', id: 'work' },
	{ label: 'Skills', id: 'skills' },
	{ label: 'About', id: 'about' },
];

const navLinkSx = {
	fontFamily: tokens.fontFamilyMono,
	fontSize: '12px',
	letterSpacing: '0.04em',
	textTransform: 'uppercase' as const,
	color: tokens.colors.textSecondary,
};

export function Header() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleNavClick = (id: string) => {
		scrollToSection(id);
		setMobileOpen(false);
	};

	return (
		<Box
			component={motion.header}
			initial={{ y: -60, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			sx={{
				position: 'sticky',
				top: 0,
				zIndex: theme.zIndex.appBar,
				backdropFilter: 'blur(10px)',
				background: 'linear-gradient(180deg, rgba(10,10,11,0.85), rgba(10,10,11,0.4))',
				borderBottom: '1px solid',
				borderColor: tokens.colors.border,
			}}
		>
			<Container maxWidth='xl'>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					sx={{ padding: 1.3 }}
				>
					<MagneticButton>
						<Typography
							data-cursor='hover'
							variant='h4'
							fontWeight={600}
							noWrap
							sx={{ cursor: 'pointer', letterSpacing: '-0.01em', fontFamily: tokens.fontFamilyHeading, fontSize: '16px' }}
							onClick={() => handleNavClick('top')}
						>
							M. Hamza<span style={{ color: tokens.colors.textTertiary }}>.</span>
						</Typography>
					</MagneticButton>

					{!isMobile && (
						<Stack direction='row' spacing={4} alignItems='center'>
							{NAV_ITEMS.map((item) => (
								<Box
									key={item.id}
									component='button'
									data-cursor='hover'
									onClick={() => handleNavClick(item.id)}
									sx={{
										...navLinkSx,
										background: 'none',
										border: 'none',
										cursor: 'pointer',
										padding: 0,
										'&:hover': { color: tokens.colors.textPrimary },
									}}
								>
									{item.label}
								</Box>
							))}
							<MagneticButton>
								<Button
									data-cursor='hover'
									variant='outlined'
									color='inherit'
									onClick={() => handleNavClick('contact')}
									sx={{
										...navLinkSx,
										borderColor: tokens.colors.border,
										padding: '8px 18px',
									}}
								>
									Contact
								</Button>
							</MagneticButton>
						</Stack>
					)}

					{isMobile && (
						<IconButton
							color='inherit'
							aria-label='Open navigation menu'
							onClick={() => setMobileOpen(true)}
						>
							<MenuIcon />
						</IconButton>
					)}
				</Stack>
			</Container>

			<Drawer
				anchor='right'
				open={mobileOpen}
				onClose={() => setMobileOpen(false)}
			>
				<Stack sx={{ width: 240, height: '100%', padding: 2, backgroundColor: tokens.colors.background }} spacing={1}>
					<Stack direction='row' justifyContent='flex-end'>
						<IconButton
							aria-label='Close navigation menu'
							onClick={() => setMobileOpen(false)}
						>
							<CloseIcon />
						</IconButton>
					</Stack>
					{NAV_ITEMS.map((item, i) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: i * 0.05 }}
						>
							<Button
								fullWidth
								color='inherit'
								sx={{ justifyContent: 'flex-start', ...navLinkSx }}
								onClick={() => handleNavClick(item.id)}
							>
								{item.label}
							</Button>
						</motion.div>
					))}
				</Stack>
			</Drawer>
		</Box>
	);
}

import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
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
import { SOCIAL_LINKS } from '../../constants/links';
import { scrollToSection } from '../../utils/scrollToSection';

const NAV_ITEMS = [
	{ label: 'Home', id: 'home' },
	{ label: 'About', id: 'about' },
	{ label: 'Skills', id: 'skills' },
	{ label: 'Projects', id: 'projects' },
	{ label: 'Contact', id: 'contact' },
];

const MotionButton = motion(Button);

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
				backdropFilter: 'blur(8px)',
				backgroundColor: 'rgba(20, 20, 20, 0.8)',
				borderBottom: '1px solid',
				borderColor: 'divider',
			}}
		>
			<Container maxWidth='xl'>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					sx={{ padding: 1.3 }}
				>
					<Typography
						variant='h4'
						fontWeight='900'
						noWrap
						sx={{ cursor: 'pointer' }}
						onClick={() => handleNavClick('home')}
					>
						<span style={{ color: theme.palette.primary.main }}>.</span>
						Hamza Azkar
					</Typography>

					{!isMobile && (
						<Stack direction='row' spacing={1} alignItems='center'>
							{NAV_ITEMS.map((item) => (
								<MotionButton
									key={item.id}
									color='inherit'
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => handleNavClick(item.id)}
								>
									{item.label}
								</MotionButton>
							))}
							<IconButton
								component='a'
								href={SOCIAL_LINKS.email}
								color='inherit'
								aria-label='Email me'
							>
								<MailOutlineIcon />
							</IconButton>
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
				<Stack sx={{ width: 240, height: '100%', padding: 2 }} spacing={1}>
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
								sx={{ justifyContent: 'flex-start' }}
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

import GitHubIcon from '@mui/icons-material/GitHub';
import OutboundRoundedIcon from '@mui/icons-material/OutboundRounded';
import {
	Box,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { tokens } from '../../theme/tokens';
import { Project } from './types';

interface ProjectCardProps {
	project: Project;
	index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
	const frameRef = useRef<HTMLDivElement>(null);
	const prefersReducedMotion = usePrefersReducedMotion();
	const { scrollYProgress } = useScroll({
		target: frameRef,
		offset: ['start end', 'center center'],
	});
	const scale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1.5, 1]);

	return (
		<Box
			component={motion.article}
			data-cursor='hover'
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, delay: index * 0.08 }}
			sx={{ borderTop: '1px solid', borderColor: tokens.colors.border, py: { xs: 5, md: 6 } }}
		>
			<Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent='space-between'>
				<Box sx={{ flex: 1, minWidth: 0 }}>
					<Typography sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 12, color: tokens.colors.textTertiary, mb: 2 }}>
						{String(index + 1).padStart(2, '0')} - {project.tags[0]?.toUpperCase()}
					</Typography>
					<Typography
						variant='h3'
						fontWeight={600}
						sx={{ letterSpacing: '-0.02em', mb: 2.5, lineHeight: 1 }}
					>
						{project.title}
					</Typography>
					<Typography sx={{ maxWidth: 560, color: tokens.colors.textSecondary, lineHeight: 1.6 }}>
						{project.description}
					</Typography>
				</Box>

				<Stack sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 11, color: tokens.colors.textSecondary, lineHeight: 2, textAlign: { xs: 'left', md: 'right' } }}>
					{project.tags.map((tag) => (
						<span key={tag}>{tag.toUpperCase()}</span>
					))}
				</Stack>
			</Stack>

			<Box
				ref={frameRef}
				sx={{
					width: '100%',
					aspectRatio: '16 / 7',
					mt: 4,
					borderRadius: '6px',
					border: '1px solid',
					borderColor: tokens.colors.border,
					overflow: 'hidden',
					position: 'relative',
				}}
			>
				{project.image ? (
					<motion.img
						src={project.image}
						alt={project.title}
						style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', scale }}
					/>
				) : (
					<Box
						component={motion.div}
						style={{ scale }}
						sx={{
							position: 'absolute',
							inset: 0,
							background: `repeating-linear-gradient(45deg, ${tokens.colors.backgroundPaper}, ${tokens.colors.backgroundPaper} 11px, #191a1d 11px, #191a1d 22px)`,
						}}
					/>
				)}
			</Box>

			<Stack direction='row' spacing={1} sx={{ mt: 2 }}>
				{project.liveUrl && (
					<IconButton
						component='a'
						href={project.liveUrl}
						target='_blank'
						rel='noreferrer'
						data-cursor='hover'
						aria-label={`Open live demo for ${project.title}`}
						color='inherit'
					>
						<OutboundRoundedIcon />
					</IconButton>
				)}
				{project.repoUrl && (
					<IconButton
						component='a'
						href={project.repoUrl}
						target='_blank'
						rel='noreferrer'
						data-cursor='hover'
						aria-label={`Open repository for ${project.title}`}
						color='inherit'
					>
						<GitHubIcon />
					</IconButton>
				)}
			</Stack>
		</Box>
	);
}

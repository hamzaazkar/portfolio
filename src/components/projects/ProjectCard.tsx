import GitHubIcon from '@mui/icons-material/GitHub';
import OutboundRoundedIcon from '@mui/icons-material/OutboundRounded';
import {
	Box,
	Card,
	CardActions,
	CardContent,
	Chip,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Project } from './types';

const MotionCard = motion(Card);

interface ProjectCardProps {
	project: Project;
	index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
	return (
		<MotionCard
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(171,241,41,0.15)' }}
			whileTap={{ scale: 0.98 }}
			sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'background.paper' }}
		>
			{project.image ? (
				<Box
					component='img'
					src={project.image}
					alt={project.title}
					sx={{ width: '100%', height: 160, objectFit: 'cover' }}
				/>
			) : (
				<Box
					sx={{
						width: '100%',
						height: 160,
						background: 'linear-gradient(135deg, rgba(171,241,41,0.25), rgba(171,241,41,0.05))',
					}}
				/>
			)}

			<CardContent sx={{ flexGrow: 1 }}>
				<Typography variant='h6' fontWeight={700} gutterBottom>
					{project.title}
				</Typography>
				<Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
					{project.description}
				</Typography>
				<Stack direction='row' flexWrap='wrap' gap={1}>
					{project.tags.map((tag) => (
						<Chip key={tag} label={tag} variant='outlined' color='primary' size='small' />
					))}
				</Stack>
			</CardContent>

			<CardActions>
				{project.liveUrl && (
					<IconButton
						component='a'
						href={project.liveUrl}
						target='_blank'
						rel='noreferrer'
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
						aria-label={`Open repository for ${project.title}`}
						color='inherit'
					>
						<GitHubIcon />
					</IconButton>
				)}
			</CardActions>
		</MotionCard>
	);
}

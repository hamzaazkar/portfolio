import { Container, Grid, Typography } from '@mui/material';
import { ProjectCard } from './ProjectCard';
import { projects } from './projectsData';

export function Projects() {
	return (
		<Container
			id='projects'
			maxWidth='xl'
			sx={{ marginTop: 8, marginBottom: 16 }}
		>
			<Typography
				variant='h2'
				fontWeight='700'
				noWrap
				sx={{ mb: 6 }}
			>
				<span style={{ color: '#abf129' }}>.</span>
				Projects
			</Typography>

			<Grid container spacing={4}>
				{projects.map((project, i) => (
					<Grid item xs={12} sm={6} md={4} key={project.id}>
						<ProjectCard project={project} index={i} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

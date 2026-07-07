import { Container } from '@mui/material';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projects } from './projectsData';

export function Projects() {
	return (
		<Container
			id='projects'
			maxWidth='xl'
			sx={{ marginTop: 8, marginBottom: 16 }}
		>
			<SectionHeading eyebrow='Selected Work' title='Projects' />

			{projects.map((project, i) => (
				<ProjectCard key={project.id} project={project} index={i} />
			))}
		</Container>
	);
}

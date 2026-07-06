import { SOCIAL_LINKS } from '../../constants/links';
import { Project } from './types';

// TODO: replace with real project data
export const projects: Project[] = [
	{
		id: 'portfolio-site',
		title: 'Portfolio Website',
		description: 'This very site — a personal portfolio built with React, TypeScript, and Material UI, showcasing my work, skills, and background.',
		tags: ['React', 'TypeScript', 'MUI', 'Vite'],
		repoUrl: `${SOCIAL_LINKS.github}/portfolio`,
	},
	{
		id: 'placeholder-one',
		title: 'Project One',
		description: 'A frontend web application focused on clean UI design and smooth user interactions, built with a component-driven architecture.',
		tags: ['React', 'Redux', 'Figma'],
	},
	{
		id: 'placeholder-two',
		title: 'Project Two',
		description: 'A full-stack web app combining a MySQL-backed API with a responsive React frontend for managing everyday workflows.',
		tags: ['Next.js', 'Mysql', 'Typescript'],
	},
];

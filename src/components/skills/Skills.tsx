import CircleIcon from '@mui/icons-material/Circle';
import { Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { FigmaSvg } from '../../assets/FigmaSvg';
import { HtmlSvg } from '../../assets/HtmlSvg';
import { JavaScriptSvg } from '../../assets/JavaScriptSvg';
import { MuiSvg } from '../../assets/MuiSvg';
import { MySqlSvg } from '../../assets/MySqlSvg';
import { NextSvg } from '../../assets/NextSvg';
import { ReactSvg } from '../../assets/ReactSvg';
import { ReduxSvg } from '../../assets/ReduxSvg';
import { TypescriptSvg } from '../../assets/TypescriptSvg';
import { SectionHeading } from '../common/SectionHeading';
import { tokens } from '../../theme/tokens';

const buttonCss = {
	p: '5px 20px 5px 20px ',
	borderRadius: 10,
	margin: 1,
	'&:hover': {
		backgroundColor: 'primary.main',
		color: 'black',
		borderColor: 'black',
		boxShadow: 'none',
	},
};

const SkillsArray = ['html', 'CSS', 'javaScript', 'Nodejs', 'Mysql', 'Postgres', 'React', 'Redux', 'Material-UI', 'Typescript', 'Figma'];

const techIcons = [
	<HtmlSvg key='html' />,
	<JavaScriptSvg key='js' />,
	<ReactSvg key='react' />,
	<NextSvg key='next' />,
	<MySqlSvg key='mysql' />,
	<FigmaSvg key='figma' />,
	<ReduxSvg key='redux' />,
	<MuiSvg key='mui' />,
	<TypescriptSvg key='ts' />,
];

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

export const Skills = () => {
	return (
		<>
			<Container
				maxWidth='xl'
				id='skills'
				sx={{ marginTop: 8, marginBottom: 16 }}
			>
				<SectionHeading eyebrow='Skills' title='Skills' />

				<Stack
					direction='row'
					alignItems='center'
					component={motion.div}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
					sx={{ marginTop: 8, marginBottom: 8, maxWidth: '800px', flexWrap: 'wrap' }}
				>
					{SkillsArray.map((row, i) => (
						<motion.div variants={itemVariants} key={i}>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								style={{ all: 'unset', cursor: 'pointer' }}
							>
								<Stack
									component='span'
									direction='row'
									sx={{
										...buttonCss,
										border: '1px solid',
										borderColor: tokens.colors.border,
										display: 'inline-flex',
									}}
								>
									<Typography
										variant='h6'
										fontWeight={500}
									>
										{row}
									</Typography>
								</Stack>
							</motion.button>
						</motion.div>
					))}

				</Stack>

				<Typography
					fontSize={26}
					fontWeight={200}
				>
					frontend
					<span>
						<CircleIcon
							fontSize='small'
							sx={{ color: 'primary.main', marginLeft: 1, marginRight: 1 }}
						/>
					</span>
					web design
					<span>
						<CircleIcon
							fontSize='small'
							sx={{ color: 'primary.main', marginLeft: 1, marginRight: 1 }}
						/>
					</span>
					backend
				</Typography>
			</Container>

			<Stack
				direction='row'
				alignItems='center'
				component={motion.div}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.2 }}
				variants={containerVariants}
				rowGap={5}
				gap={3}
				sx={{ margin: 8, flexWrap: 'wrap', justifyContent: 'space-between' }}
			>
				{techIcons.map((icon) => (
					<motion.div
						key={icon.key}
						variants={itemVariants}
						whileHover={{ scale: 1.3 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						{icon}
					</motion.div>
				))}
			</Stack>
		</>
	);
};

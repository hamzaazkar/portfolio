import CircleIcon from '@mui/icons-material/Circle';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

import { FigmaSvg } from '../../assets/FigmaSvg';
import { HtmlSvg } from '../../assets/HtmlSvg';
import { JavaScriptSvg } from '../../assets/JavaScriptSvg';
import { MuiSvg } from '../../assets/MuiSvg';
import { MySqlSvg } from '../../assets/MySqlSvg';
import { NextSvg } from '../../assets/NextSvg';
import { ReactSvg } from '../../assets/ReactSvg';
import { ReduxSvg } from '../../assets/ReduxSvg';
import { TypescriptSvg } from '../../assets/TypescriptSvg';

const buttonCss = {
	p: '5px 20px 5px 20px ',
	borderRadius: 10,
	margin: 1,
	'&:hover': {
		backgroundColor: '#abf129',
		color: 'black',
		borderColor: 'black',
		boxShadow: 'none',
	},
};

const SkillsArray = ['html', 'CSS', 'javaScript', 'Nodejs', 'Mysql', 'Postgres', 'React', 'Redux', 'Material-UI', 'Typescript', 'Figma'];

export const Skills = () => {
	return (
		<>
			<Container
				maxWidth='xl'
				sx={{ marginTop: 8, marginBottom: 16 }}
			>
				<Typography
					variant='h2'
					fontWeight='700'
					noWrap
				>
					<span style={{ color: '#abf129' }}>.</span>
					Skills
				</Typography>

				<Stack
					direction='row'
					alignItems='center'
					sx={{ marginTop: 8, marginBottom: 8, maxWidth: '800px', flexWrap: 'wrap' }}
				>
					{SkillsArray.map((row, i) => (
						<Button
							variant='outlined'
							color='inherit'
							sx={buttonCss}
							key={i}
						>
							<Typography
								variant='h6'
								fontWeight={500}
							>
								{row}
							</Typography>
						</Button>
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
							sx={{ color: '#abf129', marginLeft: 1, marginRight: 1 }}
						/>
					</span>
					web design
					<span>
						<CircleIcon
							fontSize='small'
							sx={{ color: '#abf129', marginLeft: 1, marginRight: 1 }}
						/>
					</span>
					backend
				</Typography>
			</Container>

			<Stack
				direction='row'
				alignItems='center'
				rowGap={5}
				gap={3}
				sx={{ margin: 8, flexWrap: 'wrap', justifyContent: 'space-between' }}
			>

				<Box
					sx={{
						transition: 'transform 0.3s ease-in-out',
						'&:hover': {
							transform: 'scale(1.3)'
						},
					}}
				>
					<HtmlSvg />
				</Box>
				<Box
					sx={{
						transition: 'transform 0.3s ease-in-out',
						'&:hover': {
							transform: 'scale(1.3)'
						},
					}}
				>
					<JavaScriptSvg />
				</Box>
				<Box
					sx={{
						transition: 'transform 0.3s ease-in-out',
						'&:hover': {
							transform: 'scale(1.3)'
						},
					}}
				>
					<ReactSvg />
				</Box>
				<Box
					sx={{
						transition: 'transform 0.3s ease-in-out',
						'&:hover': {
							transform: 'scale(1.3)'
						},
					}}
				>
					<NextSvg />
				</Box>
				<Box
					sx={{
						transition: 'transform 0.3s ease-in-out',
						'&:hover': {
							transform: 'scale(1.3)'
						},
					}}
				>
					<MySqlSvg />
				</Box>
				<Box
					sx={{
						transition: 'transform 0.3s ease-in-out',
						'&:hover': {
							transform: 'scale(1.3)'
						},
					}}
				>
					<FigmaSvg />
				</Box>
				<Box
					sx={{
						transition: 'transform 0.3s ease-in-out',
						'&:hover': {
							transform: 'scale(1.3)'
						},
					}}
				>
					<ReduxSvg />
				</Box>
				<Box
					sx={{
						transition: 'transform 0.3s ease-in-out',
						'&:hover': {
							transform: 'scale(1.3)'
						},
					}}
				>
					<MuiSvg />
				</Box>
				<Box
					sx={{
						transition: 'transform 0.3s ease-in-out',
						'&:hover': {
							transform: 'scale(1.3)',
						},
					}}
				>
					<TypescriptSvg />
				</Box>
			</Stack>
		</>
	);
};

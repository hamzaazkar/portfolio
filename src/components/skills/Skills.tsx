import { Box, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { RevealDivider } from '../common/RevealDivider';
import { tokens } from '../../theme/tokens';

const COLUMNS = [
	{
		index: '01',
		label: 'AI & AGENTS',
		items: ['Multi-agent architecture', 'Google ADK', 'CopilotKit', 'Conversational data access', 'LLM tool orchestration'],
	},
	{
		index: '02',
		label: 'FRONTEND',
		items: ['React', 'Next.js', 'TypeScript', 'Chart.js · Recharts', 'Data visualization'],
	},
	{
		index: '03',
		label: 'BACKEND',
		items: ['Python', 'API & service design', 'Database CRUD layers', 'System integration', 'Access & data integrity'],
	},
];

export const Skills = () => {
	return (
		<Container id='skills' maxWidth='xl' sx={{ py: { xs: 8, md: 10 } }}>
			<Stack direction='row' alignItems='baseline' justifyContent='space-between' sx={{ mb: 3 }}>
				<Typography
					variant='h2'
					sx={{ fontFamily: tokens.fontFamilyHeading, fontWeight: 600, fontSize: { xs: '30px', md: '52px' }, letterSpacing: '-0.03em' }}
				>
					Capabilities
				</Typography>
				<Typography sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 12, color: tokens.colors.textTertiary }}>
					WHAT I BUILD WITH
				</Typography>
			</Stack>
			<Box sx={{ mb: 4 }}>
				<RevealDivider />
			</Box>

			<Stack direction={{ xs: 'column', sm: 'row' }} sx={{ flexWrap: 'wrap' }}>
				{COLUMNS.map((column, i) => (
					<Box
						key={column.label}
						component={motion.div}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.5, delay: i * 0.1 }}
						sx={{
							flex: 1,
							minWidth: 220,
							p: { xs: 0, sm: i === 0 ? '32px 28px 32px 0' : '32px 28px' },
							pt: { xs: 4, sm: '32px' },
							pb: 4,
							borderBottom: '1px solid',
							borderLeft: { xs: 'none', sm: i > 0 ? '1px solid' : 'none' },
							borderColor: tokens.colors.border,
						}}
					>
						<Typography sx={{ fontFamily: tokens.fontFamilyMono, fontSize: 12, color: tokens.colors.textTertiary, mb: 2.25 }}>
							{column.index} / {column.label}
						</Typography>
						<Stack spacing={1.5} sx={{ fontSize: 18, color: '#dcdcdd' }}>
							{column.items.map((item) => (
								<span key={item}>{item}</span>
							))}
						</Stack>
					</Box>
				))}
			</Stack>
		</Container>
	);
};

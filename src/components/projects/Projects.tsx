import { Box, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { RevealDivider } from '../common/RevealDivider';
import { StatCounter } from '../common/StatCounter';
import { ZoomFrame } from '../common/ZoomFrame';
import { tokens } from '../../theme/tokens';

const monoSmall = {
	fontFamily: tokens.fontFamilyMono,
	fontSize: 12,
	color: tokens.colors.textTertiary,
};

export function Projects() {
	return (
		<Container id='work' maxWidth='xl' sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 4, md: 5 } }}>
			<Stack direction='row' alignItems='baseline' justifyContent='space-between' sx={{ mb: 3 }}>
				<Typography
					variant='h2'
					sx={{ fontFamily: tokens.fontFamilyHeading, fontWeight: 600, fontSize: { xs: '30px', md: '52px' }, letterSpacing: '-0.03em' }}
				>
					Selected Work
				</Typography>
				<Typography sx={{ ...monoSmall }}>02 PROJECTS</Typography>
			</Stack>
			<Box sx={{ mb: 5 }}>
				<RevealDivider />
			</Box>

			{/* Project 01 */}
			<Box
				component={motion.article}
				data-cursor='hover'
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.15 }}
				transition={{ duration: 0.6 }}
				sx={{ borderTop: '1px solid', borderColor: tokens.colors.border, py: { xs: 5, md: 6 } }}
			>
				<Stack spacing={5}>
					<Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' gap={3} flexWrap='wrap'>
						<Box sx={{ flex: 1, minWidth: 280 }}>
							<Typography sx={{ ...monoSmall, mb: 2.25 }}>01 — 2025 · AI PLATFORM</Typography>
							<Typography
								variant='h3'
								sx={{ fontFamily: tokens.fontFamilyHeading, fontWeight: 600, fontSize: { xs: '28px', md: '56px' }, letterSpacing: '-0.03em', lineHeight: 1, mb: 2.75 }}
							>
								Multi-Agent<br />AI System
							</Typography>
							<Typography sx={{ maxWidth: 600, fontSize: 17, lineHeight: 1.6, color: tokens.colors.textSecondary }}>
								A full-stack, multi-agent platform on Google ADK (Python) and Next.js with a CopilotKit-powered conversational UI. Non-technical users query enterprise data in plain language — no SQL, no report tickets.
							</Typography>
						</Box>
						<Stack sx={{ ...monoSmall, fontSize: 11, color: tokens.colors.textSecondary, lineHeight: 2, textAlign: { xs: 'left', md: 'right' } }}>
							<span>PYTHON · GOOGLE ADK</span>
							<span>NEXT.JS · COPILOTKIT</span>
							<span>AGENT ORCHESTRATION</span>
						</Stack>
					</Stack>

					<ZoomFrame label='[ conversational_ui.png — drop screenshot ]' />

					<Stack direction={{ xs: 'column', sm: 'row' }} sx={{ border: '1px solid', borderColor: tokens.colors.border, borderRadius: '6px', overflow: 'hidden' }}>
						{[
							{ title: 'REPORT AGENT', text: 'Parses Crystal Reports and answers complex business queries dynamically — turning static reports into interactive, AI-queryable insight.' },
							{ title: 'CRUD AGENT', text: 'Securely performs inserts, updates, and retrievals via natural language while preserving data integrity and access controls.' },
							{ title: 'BACKEND', text: 'Scalable Python architecture handling agent orchestration, tool execution, and integration with existing production systems.' },
						].map((feature, i) => (
							<Box
								key={feature.title}
								sx={{
									flex: 1,
									p: 3,
									backgroundColor: tokens.colors.backgroundPaper,
									borderLeft: i > 0 ? '1px solid' : 'none',
									borderTop: { xs: i > 0 ? '1px solid' : 'none', sm: 'none' },
									borderColor: tokens.colors.border,
								}}
							>
								<Typography sx={{ ...monoSmall, fontSize: 11, mb: 1.25 }}>{feature.title}</Typography>
								<Typography sx={{ fontSize: 14, lineHeight: 1.55, color: '#c6c6c8' }}>{feature.text}</Typography>
							</Box>
						))}
					</Stack>
				</Stack>
			</Box>

			{/* Project 02 */}
			<Box
				component={motion.article}
				data-cursor='hover'
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.15 }}
				transition={{ duration: 0.6, delay: 0.08 }}
				sx={{ borderTop: '1px solid', borderColor: tokens.colors.border, py: { xs: 5, md: 6 } }}
			>
				<Stack spacing={5}>
					<Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' gap={3} flexWrap='wrap'>
						<Box sx={{ flex: 1, minWidth: 280 }}>
							<Typography sx={{ ...monoSmall, mb: 2.25 }}>02 — INDUSTRIAL SAAS</Typography>
							<Typography
								variant='h3'
								sx={{ fontFamily: tokens.fontFamilyHeading, fontWeight: 600, fontSize: { xs: '28px', md: '56px' }, letterSpacing: '-0.03em', lineHeight: 1, mb: 2.75 }}
							>
								Sooperwizer
							</Typography>
							<Typography sx={{ maxWidth: 600, fontSize: 17, lineHeight: 1.6, color: tokens.colors.textSecondary }}>
								Textile industrial automation software that records nearly everything on the factory floor. Built and maintained in React &amp; TypeScript with dynamic performance dashboards that put decisions in managers' hands.
							</Typography>
						</Box>
						<Stack sx={{ ...monoSmall, fontSize: 11, color: tokens.colors.textSecondary, lineHeight: 2, textAlign: { xs: 'left', md: 'right' } }}>
							<span>REACT · TYPESCRIPT</span>
							<span>CHART.JS · RECHARTS</span>
							<span>PRODUCTION</span>
						</Stack>
					</Stack>

					<ZoomFrame label='[ dashboard.png — drop screenshot ]' />

					<Stack direction='row' spacing={7} flexWrap='wrap' alignItems='center' useFlexGap>
						<Box>
							<StatCounter target={50} suffix='%' />
							<Typography sx={{ ...monoSmall, mt: 1 }}>FASTER REPORT GENERATION</Typography>
						</Box>
						<Typography sx={{ flex: 1, minWidth: 260, fontSize: 15, lineHeight: 1.6, color: tokens.colors.textSecondary }}>
							Designed and implemented dynamic performance dashboards with Chart.js and Recharts, enabling factory managers to make faster, data-driven decisions.
						</Typography>
					</Stack>
				</Stack>
			</Box>
			<Box sx={{ borderTop: '1px solid', borderColor: tokens.colors.border }} />
		</Container>
	);
}

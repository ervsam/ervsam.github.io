import { Box, Chip, Typography } from '@mui/material'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const experienceData = [
  {
    title: 'ML Research Assistant',
    company: 'Simon Fraser University — Autonomous Intelligence and Robotics Lab',
    period: 'Sep 2022 – Dec 2025',
    tag: 'Research',
    tagColor: 'primary',
    bullets: [
      'Designed and deployed an end-to-end ML automation pipeline — ingesting raw solver traces, training a priority-prediction model, and integrating it into a live C++ planning system — reducing planning latency by up to 95% while maintaining solution quality within 6%.',
      'Built dataset curation logic to correct a ~99% class imbalance via targeted undersampling of rare conflict pairs, enforcing data quality standards that ensured reliable model behavior in production.',
      'Implemented a CNN + multi-head attention model in PyTorch encoding agent observations into learned spatial and coordinate embeddings, cutting search tree expansions by ~97%.',
      'Developed confidence thresholding and fail-focused edge removal so the system degrades gracefully when predictions over-constrain the planner, preserving reliability under distribution shift.',
      "Ran ablation studies across confidence thresholds and edge-removal strategies to validate each system component's contribution and establish reliable evaluation metrics.",
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'Simon Fraser University',
    period: 'May 2023 – Dec 2025',
    tag: 'Part-time',
    tagColor: 'default',
    bullets: [
      'Supported 100+ students in AI and Data Structures & Algorithms through office hours and grading.',
    ],
  },
  {
    title: 'Machine Learning Engineer Intern',
    company: 'Neurelli',
    period: 'Feb 2022 – May 2022',
    location: 'Linkou, Taiwan',
    tag: 'Internship',
    tagColor: 'secondary',
    bullets: [
      'Built an end-to-end ML automation pipeline — ingestion, cleaning, data governance, feature engineering, and XGBoost model training — to predict logistics delivery delays from structured operational data.',
      'Monitored model outputs against production outcomes to detect and correct feature drift, iterating on feature design and revalidating on updated data to maintain reliability.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'HTC Corporation',
    period: 'Jun 2021 – Aug 2021',
    location: 'Taipei, Taiwan',
    tag: 'Internship',
    tagColor: 'secondary',
    bullets: [
      'Built REST API validation tooling using Robot Framework, automating integration testing across backend services and reducing manual QA effort for a VR platform shipped to millions of users.',
    ],
  },
]

const Experience = () => (
  <SectionWrapper id="experience" bgcolor="background.default">
    <SectionHeader title="Experience" />

    <Box sx={{ position: 'relative', pl: { xs: 0, sm: 3 } }}>
      {/* vertical timeline line */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
          position: 'absolute',
          left: 0,
          top: 8,
          bottom: 8,
          width: 2,
          bgcolor: 'divider',
          borderRadius: 1,
        }}
      />

      {experienceData.map((exp, i) => (
        <Box
          key={i}
          sx={{
            position: 'relative',
            mb: i < experienceData.length - 1 ? 5 : 0,
            '&::before': {
              content: '""',
              display: { xs: 'none', sm: 'block' },
              position: 'absolute',
              left: -3 - 5,
              top: 10,
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: 'primary.main',
              border: '2px solid white',
              boxShadow: '0 0 0 2px',
              color: 'primary.light',
              zIndex: 1,
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
            <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.3 }}>
              {exp.title}
            </Typography>
            <Chip
              label={exp.tag}
              color={exp.tagColor}
              size="small"
              sx={{ fontWeight: 600, fontSize: '0.7rem' }}
            />
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, fontWeight: 500 }}>
            {exp.company}
            {exp.location ? ` · ${exp.location}` : ''}
            {' · '}
            {exp.period}
          </Typography>

          <ul className="bullets">
            {exp.bullets.map((b, j) => (
              <li key={j}>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                  {b}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  </SectionWrapper>
)

export default Experience

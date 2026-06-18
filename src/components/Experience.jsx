import { Container, Box, Typography, Divider, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const experienceData = [
  {
    title: 'ML Research Assistant',
    company: 'Simon Fraser University — Autonomous Intelligence and Robotics Lab',
    period: 'Sep 2022 – Dec 2025',
    tag: 'Research',
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
    bullets: [
      'Built REST API validation tooling using Robot Framework, automating integration testing across backend services and reducing manual QA effort for a VR platform shipped to millions of users.',
    ],
  },
]

const tagColors = {
  Research: 'primary',
  'Part-time': 'default',
  Internship: 'secondary',
}

const Experience = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <div id="experience" style={{ paddingTop: 75 }} />
      <Container maxWidth="lg">
        <Box sx={{ my: 10, mx: isDesktop ? 5 : 0 }}>
          <Typography
            variant="h3"
            align="left"
            sx={{ mb: isDesktop ? 4 : 2, fontSize: isDesktop ? '3rem' : '2rem' }}
          >
            Experience
          </Typography>

          {experienceData.map((exp, i) => (
            <Box key={i} sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                <Typography variant="h5" component="span">{exp.title}</Typography>
                <Chip label={exp.tag} color={tagColors[exp.tag]} size="small" variant="outlined" />
              </Box>
              <Typography variant="subtitle1" color="text.secondary">
                {exp.company}
                {exp.location ? ` · ${exp.location}` : ''}
                {' · '}
                {exp.period}
              </Typography>
              <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ marginBottom: 4 }}>
                    <Typography variant="body1">{b}</Typography>
                  </li>
                ))}
              </ul>
              {i < experienceData.length - 1 && <Divider sx={{ mt: 3 }} />}
            </Box>
          ))}
        </Box>
      </Container>
    </>
  )
}

export default Experience

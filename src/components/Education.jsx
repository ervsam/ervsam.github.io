import { Box, Typography } from '@mui/material'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const schools = [
  {
    logo: '/images/SFU-block-logo.png',
    name: 'Simon Fraser University',
    degree: 'Master of Science in Computing Science',
    years: 'Sep 2022 – Dec 2025',
    gpa: 'GPA 3.84 / 4.33',
    detail: 'Thesis: "Learning to Prioritize: Accelerating Priority-Based Search for Lifelong Multi-Agent Path Finding"',
  },
  {
    logo: '/images/NTHU_Round_Seal.png',
    name: 'National Tsing Hua University',
    degree: 'Bachelor of Science in Computer Science',
    years: 'Sep 2018 – Jun 2022',
    gpa: 'GPA 3.94 / 4.3',
  },
]

const Education = () => (
  <SectionWrapper id="education" bgcolor="background.paper">
    <SectionHeader title="Education" />

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {schools.map(({ logo, name, degree, years, gpa, detail }) => (
        <Box key={name} sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, alignItems: 'flex-start' }}>
          {/* Logo as plain image — not shoehorned into a circular Avatar */}
          <Box
            sx={{
              width: { xs: 52, sm: 64 },
              height: { xs: 52, sm: 64 },
              flexShrink: 0,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: '#F8FAFC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              p: 0.75,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt={name}
              sx={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </Box>

          <Box>
            <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.3, mb: 0.25 }}>
              {name}
            </Typography>
            <Typography variant="body1" color="text.secondary" fontWeight={500} sx={{ mb: 0.5 }}>
              {degree}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {years} · {gpa}
            </Typography>
            {detail && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.75, fontStyle: 'italic', lineHeight: 1.6 }}
              >
                {detail}
              </Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  </SectionWrapper>
)

export default Education

import { Avatar, Box, Button, Container, Stack, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import SpeedIcon from '@mui/icons-material/Speed'
import SchoolIcon from '@mui/icons-material/School'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'

const stats = [
  { Icon: SpeedIcon, value: '95%', label: 'planning latency reduced' },
  { Icon: SchoolIcon, value: '3.84', label: 'M.Sc. GPA at SFU' },
  { Icon: WorkHistoryIcon, value: '3 yrs', label: 'ML research' },
]

const Intro = () => (
  <Box
    sx={{
      pt: { xs: '64px', md: '96px' },
      pb: { xs: 4, md: 6 },
      background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)',
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: { xs: 3, md: 6 },
        }}
      >
        {/* Photo */}
        <Box sx={{ flexShrink: 0 }}>
          <Avatar
            src="/images/face_img.jpg"
            alt="Ervin Samuel"
            sx={{
              width: { xs: 100, md: 168 },
              height: { xs: 100, md: 168 },
              border: '3px solid',
              borderColor: 'primary.light',
              boxShadow: '0 8px 32px rgba(37,99,235,0.15)',
            }}
          />
        </Box>

        {/* Bio — capped at 520px so desktop right side has room for stats */}
        <Box sx={{ flex: 1, minWidth: 0, maxWidth: { md: 520 } }}>
          {/* Status indicator */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1.5 }}>
            <FiberManualRecordIcon sx={{ color: '#22c55e', fontSize: 10 }} />
            <Typography variant="caption" color="text.secondary" fontWeight={500} letterSpacing="0.02em">
              Open to ML engineer roles · Vancouver, BC
            </Typography>
          </Box>

          {/* Name */}
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2rem', sm: '2.75rem', md: '3.25rem' }, mb: 0.5 }}
          >
            Ervin Samuel
          </Typography>

          {/* Credential + role on one line — M.Sc. is a credential, not a footnote */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            <Typography variant="body1" fontWeight={700} color="text.primary">
              M.Sc. in Computing Science
            </Typography>
            <Typography variant="body1" color="text.disabled">·</Typography>
            <Typography variant="body1" fontWeight={600} color="primary">
              ML Engineer
            </Typography>
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.8 }}
          >
            I build end-to-end ML pipelines, train and deploy models, and integrate AI into
            production systems. Most recently reduced large-scale multi-agent planning latency
            by{' '}
            <Typography component="span" fontWeight={700} color="text.primary">
              95%
            </Typography>{' '}
            using a CNN + attention model in PyTorch.
          </Typography>

          {/* CTA buttons — equal-width on mobile so all 3 fit in one row */}
          <Stack direction="row" spacing={1.5} useFlexGap flexWrap="nowrap">
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ flex: { xs: '1 1 0', sm: '0 0 auto' }, minWidth: 0, px: { xs: 1, sm: 2.5 } }}
            >
              Resume
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/ervinsamuel/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ flex: { xs: '1 1 0', sm: '0 0 auto' }, minWidth: 0, px: { xs: 1, sm: 2 } }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/ervsam"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ flex: { xs: '1 1 0', sm: '0 0 auto' }, minWidth: 0, px: { xs: 1, sm: 2 } }}
            >
              GitHub
            </Button>
          </Stack>
        </Box>

        {/* Stats panel — desktop only, fills the right side of the hero */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            gap: 1.5,
            ml: 'auto',
            flexShrink: 0,
            width: 210,
          }}
        >
          {stats.map(({ Icon, value, label }) => (
            <Box
              key={label}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                p: 1.5,
                borderRadius: 2,
                bgcolor: 'rgba(37,99,235,0.05)',
                border: '1px solid rgba(37,99,235,0.1)',
              }}
            >
              <Icon sx={{ color: 'primary.main', fontSize: 20, flexShrink: 0 }} />
              <Box>
                <Typography variant="h6" fontWeight={800} color="primary.dark" sx={{ lineHeight: 1.1 }}>
                  {value}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.3 }}>
                  {label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
)

export default Intro

import { Avatar, Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const Intro = () => (
  <Box
    sx={{
      pt: { xs: '80px', md: '96px' },
      pb: { xs: 8, md: 12 },
      background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)',
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Photo */}
        <Box sx={{ flexShrink: 0 }}>
          <Avatar
            src="/images/face_img.jpg"
            alt="Ervin Samuel"
            sx={{
              width: { xs: 120, md: 168 },
              height: { xs: 120, md: 168 },
              border: '3px solid',
              borderColor: 'primary.light',
              boxShadow: '0 8px 32px rgba(37,99,235,0.15)',
            }}
          />
        </Box>

        {/* Bio */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Status indicator */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1.5 }}>
            <FiberManualRecordIcon sx={{ color: '#22c55e', fontSize: 10 }} />
            <Typography variant="caption" color="text.secondary" fontWeight={500} letterSpacing="0.02em">
              Open to ML engineer roles · Vancouver, BC
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2rem', sm: '2.75rem', md: '3.25rem' }, mb: 0.5 }}
          >
            Ervin Samuel
            <Typography
              component="span"
              sx={{ display: 'block', fontSize: '0.55em', fontWeight: 500, color: 'text.secondary', mt: 0.5 }}
            >
              M.Sc. in Computing Science
            </Typography>
          </Typography>

          <Typography
            variant="h5"
            color="primary"
            sx={{ fontWeight: 600, mb: 2.5, fontSize: { xs: '1rem', md: '1.15rem' } }}
          >
            ML Engineer
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 520, mb: 3.5, lineHeight: 1.8 }}
          >
            I build end-to-end ML pipelines, train and deploy models, and integrate AI into
            production systems. Most recently reduced large-scale multi-agent planning latency
            by{' '}
            <Typography component="span" fontWeight={600} color="text.primary">
              95%
            </Typography>{' '}
            using a CNN + attention model in PyTorch.
          </Typography>

          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ px: 2.5 }}
            >
              Resume
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/ervinsamuel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/ervsam"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  </Box>
)

export default Intro

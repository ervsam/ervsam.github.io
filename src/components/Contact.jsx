import { Box, Container, IconButton, Stack, Typography, Tooltip } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const contactItems = [
  {
    Icon: EmailIcon,
    label: 'Email',
    value: 'ervsml@gmail.com',
    href: 'mailto:ervsml@gmail.com',
  },
  {
    Icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ervinsamuel',
    href: 'https://www.linkedin.com/in/ervinsamuel/',
  },
  {
    Icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/ervsam',
    href: 'https://github.com/ervsam',
  },
]

const Contact = () => (
  <>
    <Box id="contact" sx={{ scrollMarginTop: '80px' }} />
    <Box sx={{ bgcolor: '#0F172A', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              color: '#F8FAFC',
            }}
          >
            Get in Touch
          </Typography>
          <Box sx={{ mt: 1.5, width: 40, height: 3, bgcolor: 'primary.main', borderRadius: 1 }} />
        </Box>

        <Typography
          variant="body1"
          sx={{ color: 'rgba(248,250,252,0.6)', mb: 5, maxWidth: 480, lineHeight: 1.8 }}
        >
          I'm actively looking for ML engineer roles. Whether you have an opportunity, a question,
          or just want to connect — my inbox is open.
        </Typography>

        <Stack spacing={3}>
          {contactItems.map(({ Icon, label, value, href }) => (
            <Box
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                textDecoration: 'none',
                color: 'inherit',
                width: 'fit-content',
                '&:hover .contact-label': { color: 'primary.light' },
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  bgcolor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 20 }} />
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', lineHeight: 1.2 }}>
                  {label}
                </Typography>
                <Typography
                  className="contact-label"
                  variant="body2"
                  sx={{ color: 'rgba(248,250,252,0.85)', fontWeight: 500, transition: 'color 0.15s' }}
                >
                  {value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  </>
)

export default Contact

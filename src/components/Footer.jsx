import { Box, Container, Typography, IconButton, Stack } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

const Footer = () => (
  <Box sx={{ bgcolor: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.06)', py: 4 }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)' }}>
          © {new Date().getFullYear()} Ervin Samuel
        </Typography>
        <Stack direction="row" spacing={0.5}>
          {[
            { icon: <EmailIcon fontSize="small" />, href: 'mailto:ervsml@gmail.com', label: 'Email' },
            { icon: <LinkedInIcon fontSize="small" />, href: 'https://linkedin.com/in/ervinsamuel', label: 'LinkedIn' },
            { icon: <GitHubIcon fontSize="small" />, href: 'https://github.com/ervsam', label: 'GitHub' },
          ].map(({ icon, href, label }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              aria-label={label}
              sx={{ color: 'rgba(255,255,255,0.4)', '&:hover': { color: 'rgba(255,255,255,0.8)' } }}
            >
              {icon}
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Container>
  </Box>
)

export default Footer

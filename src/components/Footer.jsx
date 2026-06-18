import { Box, Container, Typography } from '@mui/material'

const Footer = () => (
  <Box sx={{ bgcolor: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.06)', py: 3 }}>
    <Container maxWidth="lg">
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.35)' }}>
        © {new Date().getFullYear()} Ervin Samuel
      </Typography>
    </Container>
  </Box>
)

export default Footer

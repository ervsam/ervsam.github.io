import { Box, Typography } from '@mui/material'

const SectionHeader = ({ title }) => (
  <Box sx={{ mb: 5 }}>
    <Typography variant="h3" fontWeight={700}>
      {title}
    </Typography>
    <Box sx={{ mt: 1.5, width: 56, height: 4, bgcolor: 'primary.main', borderRadius: 1 }} />
  </Box>
)

export default SectionHeader

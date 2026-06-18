import { Box, Typography } from '@mui/material'

const SectionHeader = ({ title }) => (
  <Box sx={{ mb: 5 }}>
    <Typography
      variant="h3"
      sx={{ fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.25rem' } }}
    >
      {title}
    </Typography>
    <Box
      sx={{
        mt: 1.5,
        width: 40,
        height: 3,
        bgcolor: 'primary.main',
        borderRadius: 1,
      }}
    />
  </Box>
)

export default SectionHeader

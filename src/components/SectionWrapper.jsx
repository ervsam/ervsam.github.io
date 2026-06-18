import { Box, Container } from '@mui/material'

const SectionWrapper = ({ id, bgcolor, children, py = { xs: 8, md: 12 } }) => (
  <>
    <Box id={id} sx={{ scrollMarginTop: '80px' }} />
    <Box sx={{ bgcolor: bgcolor || 'background.default', py }}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  </>
)

export default SectionWrapper

import { Box, Container } from '@mui/material'

const SectionWrapper = ({ id, bgcolor, children, py = { xs: 5, md: 7 } }) => (
  <>
    <Box id={id} sx={{ scrollMarginTop: '80px' }} />
    <Box sx={{ bgcolor: bgcolor || 'background.default', py }}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  </>
)

export default SectionWrapper

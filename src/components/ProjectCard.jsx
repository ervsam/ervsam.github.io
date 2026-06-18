import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const ProjectCard = ({ img, title, desc, link }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardActionArea
      {...(link ? { component: 'a', href: link, target: '_blank', rel: 'noopener noreferrer' } : {})}
      sx={{ flexGrow: 1 }}
    >
      {img ? (
        <CardMedia sx={{ height: 0, paddingTop: '75%' }} image={img} title={title} />
      ) : (
        <Box
          sx={{
            height: 160,
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {link && <OpenInNewIcon sx={{ color: 'white', fontSize: 40, opacity: 0.8 }} />}
        </Box>
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 6,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {desc}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)

export default ProjectCard

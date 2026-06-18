import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'

const ProjectCard = ({ img, title, desc, link }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardActionArea
      {...(link ? { component: 'a', href: link, target: '_blank', rel: 'noopener noreferrer' } : {})}
      sx={{ flexGrow: 1 }}
    >
      <CardMedia sx={{ height: 0, paddingTop: '75%' }} image={img} title={title} />
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
            WebkitLineClamp: 5,
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

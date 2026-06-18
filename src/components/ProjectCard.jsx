import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const ProjectCard = ({ img, title, desc, link, tags = [] }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
      },
    }}
  >
    <CardActionArea
      {...(link ? { component: 'a', href: link, target: '_blank', rel: 'noopener noreferrer' } : {})}
      sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
    >
      {img ? (
        <CardMedia sx={{ height: 0, paddingTop: '56.25%' }} image={img} title={title} />
      ) : (
        <Box
          sx={{
            height: 140,
            background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {link && <OpenInNewIcon sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 36 }} />}
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Typography variant="subtitle1" fontWeight={700} sx={{ lineHeight: 1.3 }}>
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            flexGrow: 1,
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {desc}
        </Typography>

        {tags.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto', pt: 0.5 }}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  bgcolor: '#F8FAFC',
                  color: 'text.secondary',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </CardActionArea>
  </Card>
)

export default ProjectCard

import { Box, Container, Typography } from '@mui/material'
import SpeedIcon from '@mui/icons-material/Speed'
import LaunchIcon from '@mui/icons-material/Launch'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'

const cards = [
  {
    Icon: SpeedIcon,
    stat: '95%',
    title: 'Planning latency reduced',
    desc: 'CNN + attention model in PyTorch deployed in a live C++ multi-agent path-finding system at SFU.',
    href: null,
  },
  {
    Icon: LaunchIcon,
    stat: null,
    title: 'Job Match Intelligence',
    desc: 'End-to-end RAG pipeline — Gmail ingestion, GPT-4o ranking, LLM-as-judge eval across 157 postings.',
    href: 'https://job-match-intelligence.streamlit.app',
  },
  {
    Icon: AutoStoriesIcon,
    stat: null,
    title: 'M.Sc. Thesis',
    desc: '"Learning to Prioritize: Accelerating Priority-Based Search for Lifelong Multi-Agent Path Finding"',
    href: null,
  },
]

const Highlights = () => (
  <Box sx={{ bgcolor: '#EFF6FF', borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE', py: { xs: 4, md: 5 } }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: { xs: 2, md: 3 },
        }}
      >
        {cards.map(({ Icon, stat, title, desc, href }) => (
          <Box
            key={title}
            component={href ? 'a' : 'div'}
            href={href || undefined}
            target={href ? '_blank' : undefined}
            rel={href ? 'noopener noreferrer' : undefined}
            sx={{
              display: 'flex',
              gap: 2,
              p: { xs: 2, md: 2.5 },
              bgcolor: 'white',
              borderRadius: 2,
              border: '1px solid #DBEAFE',
              textDecoration: 'none',
              transition: 'box-shadow 0.2s, transform 0.2s',
              ...(href && {
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(37,99,235,0.12)',
                  transform: 'translateY(-2px)',
                },
              }),
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 1.5,
                bgcolor: '#EFF6FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon sx={{ color: 'primary.main', fontSize: 20 }} />
            </Box>
            <Box>
              {stat && (
                <Typography
                  variant="h5"
                  fontWeight={800}
                  color="primary.dark"
                  sx={{ lineHeight: 1, mb: 0.25 }}
                >
                  {stat}
                </Typography>
              )}
              <Typography variant="body2" fontWeight={700} color="text.primary" sx={{ mb: 0.5, lineHeight: 1.3 }}>
                {title}
                {href && (
                  <LaunchIcon sx={{ fontSize: 12, ml: 0.5, verticalAlign: 'middle', color: 'primary.main' }} />
                )}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                {desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
)

export default Highlights

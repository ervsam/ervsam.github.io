import ProjectCard from './ProjectCard'
import useReveal from '../useReveal'

const projects = [
  {
    title: 'Job Match Intelligence',
    desc: 'End-to-end RAG pipeline that ranks job postings by fit. GPT-4o scoring with LLM-as-judge evaluation across 157 postings.',
    tags: ['RAG', 'GPT-4o', 'ChromaDB', 'Python'],
    href: 'https://job-match-intelligence.streamlit.app',
    fig: 'Fig. 01 — Retrieval ranking',
    visual: 'bars',
  },
  {
    title: '3D Tic-Tac-Toe AI',
    desc: 'Monte Carlo Tree Search with UCB on a 4×4×4 board. Beats random agents better than 100% of the time.',
    tags: ['MCTS', 'UCB', 'Python'],
    href: 'https://github.com/ervsam',
    fig: 'Fig. 02 — 4×4×4 tree search',
    visual: 'grid',
  },
]

const SelectedWork = () => {
  const headerRef = useReveal()

  return (
    <section id="work" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '78px var(--pad-side) 0' }}>
      <div
        ref={headerRef}
        className="reveal"
        style={{
          borderTop: '1px solid var(--ink)',
          paddingTop: 24,
          marginBottom: 40,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <span className="section-num">01</span>
          <h2 className="section-title">Selected work</h2>
        </div>
        <a
          href="https://github.com/ervsam"
          target="_blank"
          rel="noopener noreferrer"
          className="mono hover-accent"
          style={{ fontSize: 12.5, letterSpacing: '0.04em', color: 'var(--ink)', paddingBottom: 7, borderBottom: '1px solid var(--border-mid)' }}
        >
          2 projects — more on GitHub ↗
        </a>
      </div>

      <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={i === 1 ? '.1s' : '0s'} />
        ))}
      </div>
    </section>
  )
}

export default SelectedWork

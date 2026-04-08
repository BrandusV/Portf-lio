'use strict';

const express = require('express');
const router = express.Router();

// In-memory project data (replace with a database in production)
const PROJECTS = [
  {
    id: 'omnicore-v4',
    code: '001',
    category: 'system',
    title: 'PROJECT_OMNICORE_V4',
    description: 'Integrated neuro-link interface for real-time data visualization of distributed server clusters across the Neo-Tokyo quadrant.',
    tags: ['REACT_JS', 'WASM', 'THREE_JS'],
    contract: 'Level 5',
    status: 'Archived',
    url: null,
  },
  {
    id: 'crypto-pulse',
    code: '002',
    category: 'web3',
    title: 'CRYPTO_PULSE_MONITOR',
    description: 'Automated sentinel for tracking high-frequency trading anomalies within decentralized liquidity pools.',
    tags: ['PYTHON', 'RUST'],
    contract: 'Level 3',
    status: 'Archived',
    url: null,
  },
  {
    id: 'dark-ledger',
    code: '003',
    category: 'system',
    title: 'DARK_LEDGER_CORE',
    description: 'Zero-knowledge proof validation layer for high-throughput on-chain settlement with sub-50ms finality.',
    tags: ['SOLIDITY', 'ZK-SNARK'],
    contract: 'Level 4',
    status: 'Archived',
    url: null,
  },
  {
    id: 'neural-dream',
    code: '004',
    category: 'ai',
    title: 'NEURAL_DREAM',
    description: 'Generative interface for latent space navigation using transformer-based diffusion models and WebGL rendering.',
    tags: ['PYTHON', 'WEBGL', 'TORCH'],
    contract: 'Level 2',
    status: 'Archived',
    url: null,
  },
  {
    id: 'core-interface',
    code: '005',
    category: 'hud',
    title: 'CORE_INTERFACE_KIT',
    description: 'Design system and UI kit for high-fidelity data visualization dashboards. 200+ components, Figma library, Tailwind plugin.',
    tags: ['TAILWIND', 'FIGMA', 'STORYBOOK'],
    contract: 'Level 1',
    status: 'Archived',
    url: null,
  },
];

/* ============================================================
   GET /api/projects
   Query params: ?category=web3 (optional filter)
   ============================================================ */
router.get('/', (req, res) => {
  const { category } = req.query;
  const result = category && category !== 'all'
    ? PROJECTS.filter(p => p.category === category)
    : PROJECTS;

  res.json({ total: result.length, projects: result });
});

/* ============================================================
   GET /api/projects/:id
   ============================================================ */
router.get('/:id', (req, res) => {
  const project = PROJECTS.find(p => p.id === req.params.id);
  if (!project) return res.status(404).json({ error: 'PROJECT_NOT_FOUND' });
  res.json(project);
});

module.exports = router;

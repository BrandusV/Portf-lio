# NEURAL_ARCHIVE // Portfolio

Portfólio pessoal com estética cyberpunk/brutalista, construído com HTML, Tailwind CSS e JavaScript vanilla no front-end, e Node.js/Express no back-end.

## Páginas

| Página | Rota | Descrição |
|---|---|---|
| Home | `/` | Hero section, prévia de projetos |
| Career | `/career.html` | Skill matrix, dados biométricos, credenciais |
| Projects | `/projects.html` | Arquivo de projetos com filtro por categoria |
| Status | `/status.html` | Streams ativos com progresso em tempo real |
| Contact | `/contact.html` | Formulário de contato com validação |

## Estrutura

```
├── frontend/           # Arquivos estáticos
│   ├── *.html
│   ├── css/styles.css
│   └── js/             # main.js (compartilhado) + por página
└── backend/            # API Node.js/Express
    ├── server.js
    ├── routes/
    │   ├── contact.js  # POST /api/contact
    │   ├── cv.js       # GET  /api/cv/download
    │   └── projects.js # GET  /api/projects
    └── data/           # cv.pdf (não versionado)
```

## Como rodar

```bash
cd backend
cp .env.example .env   # configure SMTP se quiser receber emails
npm install
npm start              # http://localhost:3000
```

## Variáveis de ambiente

Veja [`backend/.env.example`](backend/.env.example) para configurar porta, CORS e SMTP.

## Tecnologias

- **Front-end:** HTML5 · Tailwind CSS (CDN) · Space Grotesk · Material Symbols · JavaScript ES2020
- **Back-end:** Node.js · Express · Nodemailer · express-rate-limit

/**
 * NEURAL_ARCHIVE — Internationalization (i18n)
 * Languages: en · pt · de · es · it · fr · zh
 */

const LANGUAGES = {
  en: { label: 'English',   code: 'EN', flag: '🇬🇧' },
  pt: { label: 'Português', code: 'PT', flag: '🇧🇷' },
  de: { label: 'Deutsch',   code: 'DE', flag: '🇩🇪' },
  es: { label: 'Español',   code: 'ES', flag: '🇪🇸' },
  it: { label: 'Italiano',  code: 'IT', flag: '🇮🇹' },
  fr: { label: 'Français',  code: 'FR', flag: '🇫🇷' },
  zh: { label: '中文',       code: 'ZH', flag: '🇨🇳' },
};

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {

  /* ── ENGLISH ─────────────────────────────────────────────── */
  en: {
    // nav
    'nav.home':     'Home',
    'nav.career':   'Career',
    'nav.projects': 'Projects',
    'nav.status':   'Status',
    // sidebar
    'sidebar.index':          'SYSTEM_INDEX',
    'sidebar.coretemp':       'Core Temp',
    'sidebar.coretemp.ok':    'Optimal',
    'sidebar.mem':            'Memory Usage',
    // bottom nav
    'bnav.home':     'Home',
    'bnav.career':   'Career',
    'bnav.projects': 'Projects',
    'bnav.status':   'Status',
    'bnav.code':     'Code',
    'bnav.self':     'Self',
    'bnav.dev':      'Dev',
    'bnav.arch':     'Arch',
    'bnav.streams':  'Streams',
    'bnav.agent':    'Agent',
    // ── INDEX ──
    'hero.badge':        'SYSTEM_STATUS: ONLINE',
    'hero.desc':         'Full-stack operative specializing in <span class="text-primary">high-frequency neural interfaces</span> and distributed ledger core architecture. Decrypting the future of the web, one protocol at a time.',
    'hero.cta.projects': 'INITIALIZE_PROJECTS',
    'hero.cta.contact':  '> CONTACT_DEV',
    'hero.hud.lat':      'LATITUDE',
    'hero.hud.lon':      'LONGITUDE',
    'hero.hud.uptime':   'UPTIME',
    'hero.hud.target':   'TARGET_LOCKED',
    'hero.typewriter':   ['Full-stack operative.', 'Neural interface architect.', 'Protocol decryptor.', 'Distributed ledger engineer.'],
    'preview.title':     'ARCHIVED_EXPEDITIONS',
    'preview.viewall':   'VIEW_ALL_RECORDS',
    'preview.p1.tag':    '001 // WEB3',
    'preview.p1.desc':   'Decentralized exchange aggregator with real-time liquidity tracking across 12 chains.',
    'preview.p2.tag':    '002 // AI',
    'preview.p2.desc':   'Generative interface for latent space navigation using transformer-based models.',
    'preview.p3.tag':    '003 // HUD',
    'preview.p3.desc':   'Design system and UI kit for high-fidelity data visualization dashboards.',
    // ── CAREER ──
    'career.accessing':       'Accessing Profile_01',
    'career.title':           'CAREER_PATH',
    'career.desc':            'Architecting digital ecosystems at the intersection of brutalist design and high-frequency data structures. Senior interface engineer focused on neural-adaptive UI frameworks.',
    'career.net.status':      'Network Status',
    'career.bio.title':       'Biometric Data',
    'career.bio.codename':    'Codename',
    'career.bio.location':    'Base_Location',
    'career.bio.clearance':   'Clearance',
    'career.cv.btn':          'DOWNLOAD_CV',
    'career.skills.title':    'Skill Matrix',
    'career.skills.sub':      'Cognitive Load Assessment',
    'career.skill.ui':        'Neural UI Engineering',
    'career.skill.brutalist':  'Brutalist Frameworks',
    'career.skill.datavis':   'Data Visualization',
    'career.skill.subgrid':   'Sub-grid Logic',
    'career.training.title':  'Training Modules',
    'career.training.sub':    'Core Educational Tracks',
    'career.training.m1':     'Advanced Neural Interaction Design',
    'career.training.m1.desc':'Specialized training in BCI (Brain-Computer Interface) layout ergonomics and cognitive mapping.',
    'career.training.m2':     'Brutalist Component Architecture',
    'career.training.m2.desc':'Engineering high-performance structural systems with 0ms latency and hard-edge design tokens.',
    'career.training.status': 'Status',
    'career.training.synced': 'Synchronized',
    'career.cred.title':      'Credential DB',
    'career.cred.c1':         'Master Interface Specialist',
    'career.cred.c1.auth':    'Auth: Global Design Consortium',
    'career.cred.c2':         'Full-Stack Decryptor',
    'career.cred.c2.auth':    'Auth: Neural Net Security',
    'career.cred.c3':         'System Architect Prime',
    'career.cred.c3.auth':    'Auth: Core Systems Institute',
    'career.validation':      ['Validation Sequence Running', 'Decryption in Progress', 'Access Protocol Active'],
    // ── PROJECTS ──
    'projects.log':          'Operation Log: ACTIVE',
    'projects.title.span':   'COMPLETED_OPERATIONS',
    'projects.desc':         'Decrypted historical data clusters representing successfully deployed architectural nodes and tactical interfaces. All systems nominal.',
    'projects.filter.all':   'ALL',
    'projects.filter.web3':  'WEB3',
    'projects.filter.ai':    'AI',
    'projects.filter.hud':   'HUD',
    'projects.filter.system':'SYSTEM',
    'projects.access':       'ACCESS LINK',
    'projects.copy':         'COPY LINK',
    'projects.p1.desc':      'Integrated neuro-link interface for real-time data visualization of distributed server clusters across the Neo-Tokyo quadrant.',
    'projects.p2.desc':      'Automated sentinel for tracking high-frequency trading anomalies within decentralized liquidity pools.',
    'projects.p3.desc':      'Zero-knowledge proof validation layer for high-throughput on-chain settlement with sub-50ms finality.',
    'projects.p4.desc':      'Generative interface for latent space navigation using transformer-based diffusion models and WebGL rendering.',
    'projects.p5.desc':      'Design system and UI kit for high-fidelity data visualization dashboards. 200+ components, Figma library, Tailwind plugin.',
    'projects.p6.desc':      'Secure archival protocol for multi-signature hardware wallet encryption keys.',
    'projects.p7.desc':      'Intrusion detection system utilizing heuristic behavioral analysis in virtual environments.',
    'projects.p8.desc':      'Machine learning model for predicting urban growth patterns using synthetic data.',
    'projects.footer.ops':   'TOTAL_OPS',
    'projects.footer.data':  'DATA_SIZE',
    'projects.footer.uptime':'UPTIME',
    'projects.footer.sync':  'SYSTEMS_SYNCHRONIZED',
    // ── STATUS ──
    'status.system':       'System_Active_Interface',
    'status.title.span':   'IN_PROGRESS',
    'status.p1.id':        'ID: ALPHA_772',
    'status.uptime.label': 'Global_Uptime',
    'status.nodes':        'Nodes Active',
    'status.threat':       'Threat Level',
    'status.latency':      'Latency (ms)',
    'status.decrypting':   'Decrypting...',
    'status.optimizing':   'Optimizing...',
    'status.stable':       'STABLE',
    'status.urgent':       'URGENT',
    'status.inspect':      'INSPECT',
    'status.pause':        'PAUSE',
    'status.resume':       'RESUME',
    'status.cta.title':    'INITIATE_NEW_STREAM?',
    'status.cta.desc':     'Provision additional compute nodes for encrypted freelance engagement.',
    'status.cta.btn':      'Establish Connection >',
    'status.log.title':    'LIVE_SYSTEM_LOG',
    'status.processing':   ['Processing...', 'Optimizing...', 'Syncing...', 'Encrypting...'],
    // ── CONTACT ──
    'contact.channel':          'Secure Transmission Channel',
    'contact.title.span':       'DEV',
    'contact.desc':             'Initiate an encrypted transmission. All communications are logged and processed within 24 system cycles.',
    'contact.name.label':       'Operative Name *',
    'contact.name.ph':          'Your name',
    'contact.email.label':      'Transmission Address *',
    'contact.email.ph':         'your@email.com',
    'contact.subject.label':    'Subject / Protocol',
    'contact.subject.ph':       'Project inquiry, collaboration, etc.',
    'contact.message.label':    'Encrypted Message *',
    'contact.message.ph':       'Describe your mission parameters...',
    'contact.submit':           'TRANSMIT >',
    'contact.status.title':     'Transmission Status',
    'contact.status.channel':   'Channel',
    'contact.status.sla':       'Response SLA',
    'contact.status.avail':     'Availability',
    'contact.direct.title':     'Direct Channels',
    'contact.ch.email':         'Email',
    'contact.ch.github':        'GitHub',
    'contact.ch.linkedin':      'LinkedIn',
    'contact.node.title':       'System Node',
    'contact.node.tz':          'Timezone',
    'contact.node.loc':         'Location',
    'contact.node.clear':       'Clearance',
    'contact.node.status':      'Status',
  },

  /* ── PORTUGUÊS ───────────────────────────────────────────── */
  pt: {
    'nav.home': 'Início', 'nav.career': 'Carreira', 'nav.projects': 'Projetos', 'nav.status': 'Status',
    'sidebar.index': 'ÍNDICE_DO_SISTEMA', 'sidebar.coretemp': 'Temp. Central', 'sidebar.coretemp.ok': 'Ideal', 'sidebar.mem': 'Uso de Memória',
    'bnav.home': 'Início', 'bnav.career': 'Carreira', 'bnav.projects': 'Projetos', 'bnav.status': 'Status',
    'bnav.code': 'Código', 'bnav.self': 'Perfil', 'bnav.dev': 'Dev', 'bnav.arch': 'Arquivo', 'bnav.streams': 'Fluxos', 'bnav.agent': 'Agente',
    'hero.badge': 'STATUS_DO_SISTEMA: ONLINE',
    'hero.desc': 'Operativo full-stack especializado em <span class="text-primary">interfaces neurais de alta frequência</span> e arquitetura de ledger distribuído. Desencriptando o futuro da web, um protocolo de cada vez.',
    'hero.cta.projects': 'INICIALIZAR_PROJETOS', 'hero.cta.contact': '> CONTATAR_DEV',
    'hero.hud.lat': 'LATITUDE', 'hero.hud.lon': 'LONGITUDE', 'hero.hud.uptime': 'UPTIME', 'hero.hud.target': 'ALVO_BLOQUEADO',
    'hero.typewriter': ['Operativo full-stack.', 'Arquiteto de interfaces neurais.', 'Decriptador de protocolos.', 'Engenheiro de ledger distribuído.'],
    'preview.title': 'EXPEDIÇÕES_ARQUIVADAS', 'preview.viewall': 'VER_TODOS_OS_REGISTROS',
    'preview.p1.tag': '001 // WEB3', 'preview.p1.desc': 'Agregador de exchange descentralizado com rastreamento de liquidez em tempo real em 12 blockchains.',
    'preview.p2.tag': '002 // IA', 'preview.p2.desc': 'Interface generativa para navegação em espaço latente usando modelos baseados em transformers.',
    'preview.p3.tag': '003 // HUD', 'preview.p3.desc': 'Sistema de design e kit de UI para dashboards de visualização de dados de alta fidelidade.',
    'career.accessing': 'Acessando Perfil_01', 'career.title': 'TRAJETÓRIA_PROFISSIONAL',
    'career.desc': 'Arquitetando ecossistemas digitais na interseção do design brutalista e estruturas de dados de alta frequência. Engenheiro de interface sênior focado em frameworks de UI neuroadaptativas.',
    'career.net.status': 'Status da Rede', 'career.bio.title': 'Dados Biométricos',
    'career.bio.codename': 'Codinome', 'career.bio.location': 'Base_Localização', 'career.bio.clearance': 'Nível de Acesso',
    'career.cv.btn': 'BAIXAR_CV', 'career.skills.title': 'Matriz de Habilidades', 'career.skills.sub': 'Avaliação de Carga Cognitiva',
    'career.skill.ui': 'Engenharia de UI Neural', 'career.skill.brutalist': 'Frameworks Brutalistas',
    'career.skill.datavis': 'Visualização de Dados', 'career.skill.subgrid': 'Lógica de Sub-grade',
    'career.training.title': 'Módulos de Treinamento', 'career.training.sub': 'Trilhas Educacionais Principais',
    'career.training.m1': 'Design de Interação Neural Avançado', 'career.training.m1.desc': 'Treinamento especializado em ergonomia de layout BCI e mapeamento cognitivo.',
    'career.training.m2': 'Arquitetura de Componentes Brutalistas', 'career.training.m2.desc': 'Engenharia de sistemas estruturais de alto desempenho com latência 0ms e tokens de design de borda rígida.',
    'career.training.status': 'Status', 'career.training.synced': 'Sincronizado',
    'career.cred.title': 'Banco de Credenciais',
    'career.cred.c1': 'Especialista Master em Interface', 'career.cred.c1.auth': 'Auth: Consórcio Global de Design',
    'career.cred.c2': 'Decriptador Full-Stack', 'career.cred.c2.auth': 'Auth: Segurança Neural Net',
    'career.cred.c3': 'Arquiteto de Sistemas Prime', 'career.cred.c3.auth': 'Auth: Instituto de Sistemas Core',
    'career.validation': ['Sequência de Validação em Execução', 'Decriptação em Progresso', 'Protocolo de Acesso Ativo'],
    'projects.log': 'Log de Operação: ATIVO', 'projects.title.span': 'OPERAÇÕES_CONCLUÍDAS',
    'projects.desc': 'Clusters de dados históricos decriptografados representando nós arquitetônicos implantados com sucesso e interfaces táticas. Todos os sistemas nominais.',
    'projects.filter.all': 'TODOS', 'projects.filter.web3': 'WEB3', 'projects.filter.ai': 'IA', 'projects.filter.hud': 'HUD', 'projects.filter.system': 'SISTEMA',
    'projects.access': 'ACESSAR LINK', 'projects.copy': 'COPIAR LINK',
    'projects.p1.desc': 'Interface neuro-link integrada para visualização de dados em tempo real de clusters de servidores distribuídos no quadrante Neo-Tóquio.',
    'projects.p2.desc': 'Sentinela automatizado para rastrear anomalias de negociação de alta frequência em pools de liquidez descentralizados.',
    'projects.p3.desc': 'Camada de validação de prova de conhecimento zero para liquidação on-chain de alto rendimento com finalidade sub-50ms.',
    'projects.p4.desc': 'Interface generativa para navegação em espaço latente usando modelos de difusão baseados em transformers e renderização WebGL.',
    'projects.p5.desc': 'Sistema de design e kit de UI para dashboards de visualização de dados. 200+ componentes, biblioteca Figma, plugin Tailwind.',
    'projects.p6.desc': 'Protocolo de arquivamento seguro para chaves de criptografia de carteiras de hardware com múltiplas assinaturas.',
    'projects.p7.desc': 'Sistema de detecção de intrusão utilizando análise comportamental heurística em ambientes virtuais.',
    'projects.p8.desc': 'Modelo de machine learning para prever padrões de crescimento urbano usando dados sintéticos.',
    'projects.footer.ops': 'TOTAL_OPS', 'projects.footer.data': 'TAMANHO_DADOS', 'projects.footer.uptime': 'UPTIME', 'projects.footer.sync': 'SISTEMAS_SINCRONIZADOS',
    'status.system': 'Interface_Ativa_do_Sistema', 'status.title.span': 'EM_PROGRESSO', 'status.p1.id': 'ID: ALPHA_772',
    'status.uptime.label': 'Uptime_Global', 'status.nodes': 'Nós Ativos', 'status.threat': 'Nível de Ameaça', 'status.latency': 'Latência (ms)',
    'status.decrypting': 'Decriptando...', 'status.optimizing': 'Otimizando...', 'status.stable': 'ESTÁVEL', 'status.urgent': 'URGENTE',
    'status.inspect': 'INSPECIONAR', 'status.pause': 'PAUSAR', 'status.resume': 'RETOMAR',
    'status.cta.title': 'INICIAR_NOVO_FLUXO?', 'status.cta.desc': 'Provisionar nós de computação adicionais para engajamento freelance criptografado.',
    'status.cta.btn': 'Estabelecer Conexão >', 'status.log.title': 'LOG_DO_SISTEMA_AO_VIVO',
    'status.processing': ['Processando...', 'Otimizando...', 'Sincronizando...', 'Criptografando...'],
    'contact.channel': 'Canal de Transmissão Segura', 'contact.title.span': 'DEV',
    'contact.desc': 'Inicie uma transmissão criptografada. Todas as comunicações são registradas e processadas dentro de 24 ciclos do sistema.',
    'contact.name.label': 'Nome do Operativo *', 'contact.name.ph': 'Seu nome',
    'contact.email.label': 'Endereço de Transmissão *', 'contact.email.ph': 'seu@email.com',
    'contact.subject.label': 'Assunto / Protocolo', 'contact.subject.ph': 'Consulta de projeto, colaboração, etc.',
    'contact.message.label': 'Mensagem Criptografada *', 'contact.message.ph': 'Descreva os parâmetros da sua missão...',
    'contact.submit': 'TRANSMITIR >',
    'contact.status.title': 'Status da Transmissão', 'contact.status.channel': 'Canal', 'contact.status.sla': 'SLA de Resposta', 'contact.status.avail': 'Disponibilidade',
    'contact.direct.title': 'Canais Diretos', 'contact.ch.email': 'E-mail', 'contact.ch.github': 'GitHub', 'contact.ch.linkedin': 'LinkedIn',
    'contact.node.title': 'Nó do Sistema', 'contact.node.tz': 'Fuso Horário', 'contact.node.loc': 'Localização', 'contact.node.clear': 'Acesso', 'contact.node.status': 'Status',
  },

  /* ── DEUTSCH ─────────────────────────────────────────────── */
  de: {
    'nav.home': 'Startseite', 'nav.career': 'Karriere', 'nav.projects': 'Projekte', 'nav.status': 'Status',
    'sidebar.index': 'SYSTEM_INDEX', 'sidebar.coretemp': 'Kerntemperatur', 'sidebar.coretemp.ok': 'Optimal', 'sidebar.mem': 'Speichernutzung',
    'bnav.home': 'Start', 'bnav.career': 'Karriere', 'bnav.projects': 'Projekte', 'bnav.status': 'Status',
    'bnav.code': 'Code', 'bnav.self': 'Profil', 'bnav.dev': 'Dev', 'bnav.arch': 'Archiv', 'bnav.streams': 'Streams', 'bnav.agent': 'Agent',
    'hero.badge': 'SYSTEM_STATUS: ONLINE',
    'hero.desc': 'Full-Stack-Spezialist für <span class="text-primary">hochfrequente neuronale Schnittstellen</span> und dezentrale Ledger-Kernarchitektur. Die Zukunft des Webs entschlüsseln – ein Protokoll nach dem anderen.',
    'hero.cta.projects': 'PROJEKTE_INITIALISIEREN', 'hero.cta.contact': '> ENTWICKLER_KONTAKTIEREN',
    'hero.hud.lat': 'BREITENGRAD', 'hero.hud.lon': 'LÄNGENGRAD', 'hero.hud.uptime': 'LAUFZEIT', 'hero.hud.target': 'ZIEL_GESPERRT',
    'hero.typewriter': ['Full-Stack-Spezialist.', 'Neuronaler Schnittstellenarchitekt.', 'Protokoll-Entschlüssler.', 'Dezentraler Ledger-Ingenieur.'],
    'preview.title': 'ARCHIVIERTE_EXPEDITIONEN', 'preview.viewall': 'ALLE_EINTRÄGE_ANZEIGEN',
    'preview.p1.tag': '001 // WEB3', 'preview.p1.desc': 'Dezentraler Exchange-Aggregator mit Echtzeit-Liquiditätsverfolgung über 12 Blockchains.',
    'preview.p2.tag': '002 // KI', 'preview.p2.desc': 'Generative Schnittstelle zur Navigation im latenten Raum mit transformerbasierten Modellen.',
    'preview.p3.tag': '003 // HUD', 'preview.p3.desc': 'Design-System und UI-Kit für hochauflösende Datenvisualisierungs-Dashboards.',
    'career.accessing': 'Profil_01 wird abgerufen', 'career.title': 'KARRIEREWEG',
    'career.desc': 'Entwicklung digitaler Ökosysteme an der Schnittstelle von brutalistischem Design und hochfrequenten Datenstrukturen. Senior Interface Engineer mit Fokus auf neuroadaptive UI-Frameworks.',
    'career.net.status': 'Netzwerkstatus', 'career.bio.title': 'Biometrische Daten',
    'career.bio.codename': 'Codename', 'career.bio.location': 'Basis_Standort', 'career.bio.clearance': 'Freigabe',
    'career.cv.btn': 'LEBENSLAUF_HERUNTERLADEN', 'career.skills.title': 'Fähigkeitsmatrix', 'career.skills.sub': 'Kognitive Lastbewertung',
    'career.skill.ui': 'Neuronale UI-Entwicklung', 'career.skill.brutalist': 'Brutalistische Frameworks',
    'career.skill.datavis': 'Datenvisualisierung', 'career.skill.subgrid': 'Subgitter-Logik',
    'career.training.title': 'Trainingsmodule', 'career.training.sub': 'Grundlegende Bildungspfade',
    'career.training.m1': 'Erweitertes Neuronales Interaktionsdesign', 'career.training.m1.desc': 'Spezialisiertes Training in BCI-Layout-Ergonomie und kognitiver Kartierung.',
    'career.training.m2': 'Brutalistische Komponentenarchitektur', 'career.training.m2.desc': 'Entwicklung hochleistungsfähiger Struktursysteme mit 0ms Latenz und harten Design-Tokens.',
    'career.training.status': 'Status', 'career.training.synced': 'Synchronisiert',
    'career.cred.title': 'Anmeldedatenbank',
    'career.cred.c1': 'Master-Schnittstellenspezialist', 'career.cred.c1.auth': 'Auth: Globales Design-Konsortium',
    'career.cred.c2': 'Full-Stack-Entschlüssler', 'career.cred.c2.auth': 'Auth: Neuronale Netz-Sicherheit',
    'career.cred.c3': 'Systemarchitekt Prime', 'career.cred.c3.auth': 'Auth: Core Systems Institut',
    'career.validation': ['Validierungssequenz läuft', 'Entschlüsselung läuft', 'Zugriffsprotokoll aktiv'],
    'projects.log': 'Operationsprotokoll: AKTIV', 'projects.title.span': 'ABGESCHLOSSENE_OPERATIONEN',
    'projects.desc': 'Entschlüsselte historische Datencluster, die erfolgreich eingesetzte Architekturknoten und taktische Schnittstellen repräsentieren. Alle Systeme nominal.',
    'projects.filter.all': 'ALLE', 'projects.filter.web3': 'WEB3', 'projects.filter.ai': 'KI', 'projects.filter.hud': 'HUD', 'projects.filter.system': 'SYSTEM',
    'projects.access': 'LINK ÖFFNEN', 'projects.copy': 'LINK KOPIEREN',
    'projects.p1.desc': 'Integrierte Neuro-Link-Schnittstelle zur Echtzeit-Datenvisualisierung von verteilten Server-Clustern im Neo-Tokio-Quadranten.',
    'projects.p2.desc': 'Automatischer Sentinel zur Verfolgung von Hochfrequenz-Handelsanomalien in dezentralen Liquiditätspools.',
    'projects.p3.desc': 'Zero-Knowledge-Proof-Validierungsschicht für hochdurchsatzfähige On-Chain-Abwicklung mit Sub-50ms-Finalität.',
    'projects.p4.desc': 'Generative Schnittstelle zur Navigation im latenten Raum mit transformerbasierten Diffusionsmodellen und WebGL-Rendering.',
    'projects.p5.desc': 'Design-System und UI-Kit für Datenvisualisierungs-Dashboards. 200+ Komponenten, Figma-Bibliothek, Tailwind-Plugin.',
    'projects.p6.desc': 'Sicheres Archivierungsprotokoll für Hardware-Wallet-Verschlüsselungsschlüssel mit mehreren Signaturen.',
    'projects.p7.desc': 'Intrusion-Detection-System mit heuristischer Verhaltensanalyse in virtuellen Umgebungen.',
    'projects.p8.desc': 'Machine-Learning-Modell zur Vorhersage städtischer Wachstumsmuster mithilfe synthetischer Daten.',
    'projects.footer.ops': 'GESAMT_OPS', 'projects.footer.data': 'DATENGRÖSSE', 'projects.footer.uptime': 'LAUFZEIT', 'projects.footer.sync': 'SYSTEME_SYNCHRONISIERT',
    'status.system': 'System_Aktive_Schnittstelle', 'status.title.span': 'IN_BEARBEITUNG', 'status.p1.id': 'ID: ALPHA_772',
    'status.uptime.label': 'Globale_Laufzeit', 'status.nodes': 'Aktive Knoten', 'status.threat': 'Bedrohungsstufe', 'status.latency': 'Latenz (ms)',
    'status.decrypting': 'Entschlüssle...', 'status.optimizing': 'Optimiere...', 'status.stable': 'STABIL', 'status.urgent': 'DRINGEND',
    'status.inspect': 'PRÜFEN', 'status.pause': 'ANHALTEN', 'status.resume': 'FORTSETZEN',
    'status.cta.title': 'NEUEN_STREAM_INITIIEREN?', 'status.cta.desc': 'Zusätzliche Rechenknoten für verschlüsselte Freelance-Aufträge bereitstellen.',
    'status.cta.btn': 'Verbindung herstellen >', 'status.log.title': 'LIVE_SYSTEMPROTOKOLL',
    'status.processing': ['Verarbeite...', 'Optimiere...', 'Synchronisiere...', 'Verschlüssle...'],
    'contact.channel': 'Sicherer Übertragungskanal', 'contact.title.span': 'DEV',
    'contact.desc': 'Starten Sie eine verschlüsselte Übertragung. Alle Nachrichten werden protokolliert und innerhalb von 24 Systemzyklen bearbeitet.',
    'contact.name.label': 'Operativname *', 'contact.name.ph': 'Ihr Name',
    'contact.email.label': 'Übertragungsadresse *', 'contact.email.ph': 'ihre@email.de',
    'contact.subject.label': 'Betreff / Protokoll', 'contact.subject.ph': 'Projektanfrage, Zusammenarbeit, etc.',
    'contact.message.label': 'Verschlüsselte Nachricht *', 'contact.message.ph': 'Beschreiben Sie Ihre Missionsparameter...',
    'contact.submit': 'ÜBERTRAGEN >',
    'contact.status.title': 'Übertragungsstatus', 'contact.status.channel': 'Kanal', 'contact.status.sla': 'Antwort-SLA', 'contact.status.avail': 'Verfügbarkeit',
    'contact.direct.title': 'Direkte Kanäle', 'contact.ch.email': 'E-Mail', 'contact.ch.github': 'GitHub', 'contact.ch.linkedin': 'LinkedIn',
    'contact.node.title': 'Systemknoten', 'contact.node.tz': 'Zeitzone', 'contact.node.loc': 'Standort', 'contact.node.clear': 'Freigabe', 'contact.node.status': 'Status',
  },

  /* ── ESPAÑOL ─────────────────────────────────────────────── */
  es: {
    'nav.home': 'Inicio', 'nav.career': 'Carrera', 'nav.projects': 'Proyectos', 'nav.status': 'Estado',
    'sidebar.index': 'ÍNDICE_DEL_SISTEMA', 'sidebar.coretemp': 'Temp. Central', 'sidebar.coretemp.ok': 'Óptimo', 'sidebar.mem': 'Uso de Memoria',
    'bnav.home': 'Inicio', 'bnav.career': 'Carrera', 'bnav.projects': 'Proyectos', 'bnav.status': 'Estado',
    'bnav.code': 'Código', 'bnav.self': 'Perfil', 'bnav.dev': 'Dev', 'bnav.arch': 'Archivo', 'bnav.streams': 'Flujos', 'bnav.agent': 'Agente',
    'hero.badge': 'ESTADO_SISTEMA: ONLINE',
    'hero.desc': 'Operativo full-stack especializado en <span class="text-primary">interfaces neurales de alta frecuencia</span> y arquitectura central de ledger distribuido. Descifrando el futuro de la web, un protocolo a la vez.',
    'hero.cta.projects': 'INICIALIZAR_PROYECTOS', 'hero.cta.contact': '> CONTACTAR_DEV',
    'hero.hud.lat': 'LATITUD', 'hero.hud.lon': 'LONGITUD', 'hero.hud.uptime': 'UPTIME', 'hero.hud.target': 'OBJETIVO_BLOQUEADO',
    'hero.typewriter': ['Operativo full-stack.', 'Arquitecto de interfaces neurales.', 'Descifrador de protocolos.', 'Ingeniero de ledger distribuido.'],
    'preview.title': 'EXPEDICIONES_ARCHIVADAS', 'preview.viewall': 'VER_TODOS_LOS_REGISTROS',
    'preview.p1.tag': '001 // WEB3', 'preview.p1.desc': 'Agregador de exchange descentralizado con seguimiento de liquidez en tiempo real en 12 cadenas.',
    'preview.p2.tag': '002 // IA', 'preview.p2.desc': 'Interfaz generativa para navegación en espacio latente usando modelos basados en transformers.',
    'preview.p3.tag': '003 // HUD', 'preview.p3.desc': 'Sistema de diseño y kit de UI para dashboards de visualización de datos de alta fidelidad.',
    'career.accessing': 'Accediendo a Perfil_01', 'career.title': 'TRAYECTORIA_PROFESIONAL',
    'career.desc': 'Arquitectura de ecosistemas digitales en la intersección del diseño brutalista y estructuras de datos de alta frecuencia. Ingeniero de interfaz senior enfocado en frameworks de UI neuroadaptativos.',
    'career.net.status': 'Estado de Red', 'career.bio.title': 'Datos Biométricos',
    'career.bio.codename': 'Nombre Clave', 'career.bio.location': 'Base_Ubicación', 'career.bio.clearance': 'Nivel de Acceso',
    'career.cv.btn': 'DESCARGAR_CV', 'career.skills.title': 'Matriz de Habilidades', 'career.skills.sub': 'Evaluación de Carga Cognitiva',
    'career.skill.ui': 'Ingeniería UI Neural', 'career.skill.brutalist': 'Frameworks Brutalistas',
    'career.skill.datavis': 'Visualización de Datos', 'career.skill.subgrid': 'Lógica de Subcuadrícula',
    'career.training.title': 'Módulos de Entrenamiento', 'career.training.sub': 'Pistas Educativas Principales',
    'career.training.m1': 'Diseño de Interacción Neural Avanzado', 'career.training.m1.desc': 'Entrenamiento especializado en ergonomía de diseño BCI y mapeo cognitivo.',
    'career.training.m2': 'Arquitectura de Componentes Brutalistas', 'career.training.m2.desc': 'Ingeniería de sistemas estructurales de alto rendimiento con latencia 0ms y tokens de diseño de borde duro.',
    'career.training.status': 'Estado', 'career.training.synced': 'Sincronizado',
    'career.cred.title': 'Base de Credenciales',
    'career.cred.c1': 'Especialista Master en Interfaz', 'career.cred.c1.auth': 'Auth: Consorcio Global de Diseño',
    'career.cred.c2': 'Descifrador Full-Stack', 'career.cred.c2.auth': 'Auth: Seguridad Neural Net',
    'career.cred.c3': 'Arquitecto de Sistemas Prime', 'career.cred.c3.auth': 'Auth: Instituto de Sistemas Core',
    'career.validation': ['Secuencia de Validación en Ejecución', 'Descifrado en Progreso', 'Protocolo de Acceso Activo'],
    'projects.log': 'Registro de Operación: ACTIVO', 'projects.title.span': 'OPERACIONES_COMPLETADAS',
    'projects.desc': 'Clusters de datos históricos descifrados que representan nodos arquitectónicos desplegados con éxito e interfaces tácticas. Todos los sistemas nominales.',
    'projects.filter.all': 'TODOS', 'projects.filter.web3': 'WEB3', 'projects.filter.ai': 'IA', 'projects.filter.hud': 'HUD', 'projects.filter.system': 'SISTEMA',
    'projects.access': 'ACCEDER ENLACE', 'projects.copy': 'COPIAR ENLACE',
    'projects.p1.desc': 'Interfaz neuro-link integrada para visualización de datos en tiempo real de clústeres de servidores distribuidos en el cuadrante Neo-Tokio.',
    'projects.p2.desc': 'Centinela automatizado para rastrear anomalías de trading de alta frecuencia en pools de liquidez descentralizados.',
    'projects.p3.desc': 'Capa de validación de prueba de conocimiento cero para liquidación on-chain de alto rendimiento con finalidad sub-50ms.',
    'projects.p4.desc': 'Interfaz generativa para navegación en espacio latente usando modelos de difusión basados en transformers y renderizado WebGL.',
    'projects.p5.desc': 'Sistema de diseño y kit de UI para dashboards de visualización de datos. 200+ componentes, biblioteca Figma, plugin Tailwind.',
    'projects.p6.desc': 'Protocolo de archivado seguro para claves de cifrado de monederos hardware con múltiples firmas.',
    'projects.p7.desc': 'Sistema de detección de intrusiones utilizando análisis de comportamiento heurístico en entornos virtuales.',
    'projects.p8.desc': 'Modelo de machine learning para predecir patrones de crecimiento urbano usando datos sintéticos.',
    'projects.footer.ops': 'TOTAL_OPS', 'projects.footer.data': 'TAMAÑO_DATOS', 'projects.footer.uptime': 'UPTIME', 'projects.footer.sync': 'SISTEMAS_SINCRONIZADOS',
    'status.system': 'Interfaz_Activa_del_Sistema', 'status.title.span': 'EN_PROGRESO', 'status.p1.id': 'ID: ALPHA_772',
    'status.uptime.label': 'Uptime_Global', 'status.nodes': 'Nodos Activos', 'status.threat': 'Nivel de Amenaza', 'status.latency': 'Latencia (ms)',
    'status.decrypting': 'Descifrando...', 'status.optimizing': 'Optimizando...', 'status.stable': 'ESTABLE', 'status.urgent': 'URGENTE',
    'status.inspect': 'INSPECCIONAR', 'status.pause': 'PAUSAR', 'status.resume': 'REANUDAR',
    'status.cta.title': '¿INICIAR_NUEVO_FLUJO?', 'status.cta.desc': 'Aprovisionar nodos de cómputo adicionales para compromiso freelance cifrado.',
    'status.cta.btn': 'Establecer Conexión >', 'status.log.title': 'REGISTRO_EN_VIVO_DEL_SISTEMA',
    'status.processing': ['Procesando...', 'Optimizando...', 'Sincronizando...', 'Cifrando...'],
    'contact.channel': 'Canal de Transmisión Segura', 'contact.title.span': 'DEV',
    'contact.desc': 'Inicia una transmisión cifrada. Todas las comunicaciones son registradas y procesadas dentro de 24 ciclos del sistema.',
    'contact.name.label': 'Nombre del Operativo *', 'contact.name.ph': 'Tu nombre',
    'contact.email.label': 'Dirección de Transmisión *', 'contact.email.ph': 'tu@email.com',
    'contact.subject.label': 'Asunto / Protocolo', 'contact.subject.ph': 'Consulta de proyecto, colaboración, etc.',
    'contact.message.label': 'Mensaje Cifrado *', 'contact.message.ph': 'Describe los parámetros de tu misión...',
    'contact.submit': 'TRANSMITIR >',
    'contact.status.title': 'Estado de Transmisión', 'contact.status.channel': 'Canal', 'contact.status.sla': 'SLA de Respuesta', 'contact.status.avail': 'Disponibilidad',
    'contact.direct.title': 'Canales Directos', 'contact.ch.email': 'Correo', 'contact.ch.github': 'GitHub', 'contact.ch.linkedin': 'LinkedIn',
    'contact.node.title': 'Nodo del Sistema', 'contact.node.tz': 'Zona Horaria', 'contact.node.loc': 'Ubicación', 'contact.node.clear': 'Acceso', 'contact.node.status': 'Estado',
  },

  /* ── ITALIANO ────────────────────────────────────────────── */
  it: {
    'nav.home': 'Home', 'nav.career': 'Carriera', 'nav.projects': 'Progetti', 'nav.status': 'Stato',
    'sidebar.index': 'INDICE_SISTEMA', 'sidebar.coretemp': 'Temp. Core', 'sidebar.coretemp.ok': 'Ottimale', 'sidebar.mem': 'Uso Memoria',
    'bnav.home': 'Home', 'bnav.career': 'Carriera', 'bnav.projects': 'Progetti', 'bnav.status': 'Stato',
    'bnav.code': 'Codice', 'bnav.self': 'Profilo', 'bnav.dev': 'Dev', 'bnav.arch': 'Archivio', 'bnav.streams': 'Flussi', 'bnav.agent': 'Agente',
    'hero.badge': 'STATO_SISTEMA: ONLINE',
    'hero.desc': 'Operativo full-stack specializzato in <span class="text-primary">interfacce neurali ad alta frequenza</span> e architettura core del registro distribuito. Decifrando il futuro del web, un protocollo alla volta.',
    'hero.cta.projects': 'INIZIALIZZA_PROGETTI', 'hero.cta.contact': '> CONTATTA_DEV',
    'hero.hud.lat': 'LATITUDINE', 'hero.hud.lon': 'LONGITUDINE', 'hero.hud.uptime': 'UPTIME', 'hero.hud.target': 'OBIETTIVO_BLOCCATO',
    'hero.typewriter': ['Operativo full-stack.', 'Architetto di interfacce neurali.', 'Decifratore di protocolli.', 'Ingegnere di registro distribuito.'],
    'preview.title': 'SPEDIZIONI_ARCHIVIATE', 'preview.viewall': 'VEDI_TUTTI_I_RECORD',
    'preview.p1.tag': '001 // WEB3', 'preview.p1.desc': 'Aggregatore di exchange decentralizzato con tracciamento della liquidità in tempo reale su 12 chain.',
    'preview.p2.tag': '002 // IA', 'preview.p2.desc': 'Interfaccia generativa per la navigazione nello spazio latente usando modelli basati su transformer.',
    'preview.p3.tag': '003 // HUD', 'preview.p3.desc': 'Sistema di design e kit UI per dashboard di visualizzazione dati ad alta fedeltà.',
    'career.accessing': 'Accesso a Profilo_01', 'career.title': 'PERCORSO_PROFESSIONALE',
    'career.desc': 'Progettazione di ecosistemi digitali all\'intersezione del design brutalista e strutture dati ad alta frequenza. Ingegnere di interfaccia senior focalizzato su framework UI neuroadattativi.',
    'career.net.status': 'Stato della Rete', 'career.bio.title': 'Dati Biometrici',
    'career.bio.codename': 'Nome in Codice', 'career.bio.location': 'Base_Posizione', 'career.bio.clearance': 'Livello di Accesso',
    'career.cv.btn': 'SCARICA_CV', 'career.skills.title': 'Matrice delle Competenze', 'career.skills.sub': 'Valutazione del Carico Cognitivo',
    'career.skill.ui': 'Ingegneria UI Neurale', 'career.skill.brutalist': 'Framework Brutalisti',
    'career.skill.datavis': 'Visualizzazione Dati', 'career.skill.subgrid': 'Logica Sub-griglia',
    'career.training.title': 'Moduli di Formazione', 'career.training.sub': 'Percorsi Formativi Principali',
    'career.training.m1': 'Design di Interazione Neurale Avanzato', 'career.training.m1.desc': 'Formazione specializzata in ergonomia del layout BCI e mappatura cognitiva.',
    'career.training.m2': 'Architettura di Componenti Brutalisti', 'career.training.m2.desc': 'Ingegneria di sistemi strutturali ad alte prestazioni con latenza 0ms e design token a bordo rigido.',
    'career.training.status': 'Stato', 'career.training.synced': 'Sincronizzato',
    'career.cred.title': 'Database Credenziali',
    'career.cred.c1': 'Specialista Master di Interfaccia', 'career.cred.c1.auth': 'Auth: Consorzio Globale di Design',
    'career.cred.c2': 'Decifratore Full-Stack', 'career.cred.c2.auth': 'Auth: Sicurezza Neural Net',
    'career.cred.c3': 'Architetto di Sistema Prime', 'career.cred.c3.auth': 'Auth: Istituto Core Systems',
    'career.validation': ['Sequenza di Validazione in Esecuzione', 'Decifratura in Corso', 'Protocollo di Accesso Attivo'],
    'projects.log': 'Log Operazione: ATTIVO', 'projects.title.span': 'OPERAZIONI_COMPLETATE',
    'projects.desc': 'Cluster di dati storici decifrati che rappresentano nodi architetturali distribuiti con successo e interfacce tattiche. Tutti i sistemi nominali.',
    'projects.filter.all': 'TUTTI', 'projects.filter.web3': 'WEB3', 'projects.filter.ai': 'IA', 'projects.filter.hud': 'HUD', 'projects.filter.system': 'SISTEMA',
    'projects.access': 'ACCEDI LINK', 'projects.copy': 'COPIA LINK',
    'projects.p1.desc': 'Interfaccia neuro-link integrata per la visualizzazione in tempo reale dei cluster di server distribuiti nel quadrante Neo-Tokyo.',
    'projects.p2.desc': 'Sentinella automatizzato per il monitoraggio delle anomalie di trading ad alta frequenza nei pool di liquidità decentralizzati.',
    'projects.p3.desc': 'Livello di validazione zero-knowledge proof per la liquidazione on-chain ad alto throughput con finalità sub-50ms.',
    'projects.p4.desc': 'Interfaccia generativa per la navigazione nello spazio latente con modelli di diffusione basati su transformer e rendering WebGL.',
    'projects.p5.desc': 'Sistema di design e kit UI per dashboard di visualizzazione dati. 200+ componenti, libreria Figma, plugin Tailwind.',
    'projects.p6.desc': 'Protocollo di archiviazione sicura per chiavi di crittografia di wallet hardware con firme multiple.',
    'projects.p7.desc': 'Sistema di rilevamento intrusioni che utilizza l\'analisi comportamentale euristica in ambienti virtuali.',
    'projects.p8.desc': 'Modello di machine learning per prevedere i pattern di crescita urbana usando dati sintetici.',
    'projects.footer.ops': 'TOTALE_OPS', 'projects.footer.data': 'DIMENSIONE_DATI', 'projects.footer.uptime': 'UPTIME', 'projects.footer.sync': 'SISTEMI_SINCRONIZZATI',
    'status.system': 'Interfaccia_Attiva_Sistema', 'status.title.span': 'IN_CORSO', 'status.p1.id': 'ID: ALPHA_772',
    'status.uptime.label': 'Uptime_Globale', 'status.nodes': 'Nodi Attivi', 'status.threat': 'Livello Minaccia', 'status.latency': 'Latenza (ms)',
    'status.decrypting': 'Decifrando...', 'status.optimizing': 'Ottimizzando...', 'status.stable': 'STABILE', 'status.urgent': 'URGENTE',
    'status.inspect': 'ISPEZIONA', 'status.pause': 'PAUSA', 'status.resume': 'RIPRENDI',
    'status.cta.title': 'AVVIARE_NUOVO_FLUSSO?', 'status.cta.desc': 'Provisioning di nodi di calcolo aggiuntivi per incarico freelance cifrato.',
    'status.cta.btn': 'Stabilisci Connessione >', 'status.log.title': 'LOG_SISTEMA_IN_DIRETTA',
    'status.processing': ['Elaborazione...', 'Ottimizzazione...', 'Sincronizzazione...', 'Cifratura...'],
    'contact.channel': 'Canale di Trasmissione Sicura', 'contact.title.span': 'DEV',
    'contact.desc': 'Avvia una trasmissione crittografata. Tutte le comunicazioni vengono registrate ed elaborate entro 24 cicli di sistema.',
    'contact.name.label': 'Nome Operativo *', 'contact.name.ph': 'Il tuo nome',
    'contact.email.label': 'Indirizzo di Trasmissione *', 'contact.email.ph': 'tuo@email.it',
    'contact.subject.label': 'Oggetto / Protocollo', 'contact.subject.ph': 'Richiesta di progetto, collaborazione, ecc.',
    'contact.message.label': 'Messaggio Cifrato *', 'contact.message.ph': 'Descrivi i parametri della tua missione...',
    'contact.submit': 'TRASMETTI >',
    'contact.status.title': 'Stato Trasmissione', 'contact.status.channel': 'Canale', 'contact.status.sla': 'SLA Risposta', 'contact.status.avail': 'Disponibilità',
    'contact.direct.title': 'Canali Diretti', 'contact.ch.email': 'Email', 'contact.ch.github': 'GitHub', 'contact.ch.linkedin': 'LinkedIn',
    'contact.node.title': 'Nodo di Sistema', 'contact.node.tz': 'Fuso Orario', 'contact.node.loc': 'Posizione', 'contact.node.clear': 'Accesso', 'contact.node.status': 'Stato',
  },

  /* ── FRANÇAIS ────────────────────────────────────────────── */
  fr: {
    'nav.home': 'Accueil', 'nav.career': 'Carrière', 'nav.projects': 'Projets', 'nav.status': 'Statut',
    'sidebar.index': 'INDEX_SYSTÈME', 'sidebar.coretemp': 'Temp. Cœur', 'sidebar.coretemp.ok': 'Optimal', 'sidebar.mem': 'Mémoire Utilisée',
    'bnav.home': 'Accueil', 'bnav.career': 'Carrière', 'bnav.projects': 'Projets', 'bnav.status': 'Statut',
    'bnav.code': 'Code', 'bnav.self': 'Profil', 'bnav.dev': 'Dev', 'bnav.arch': 'Archive', 'bnav.streams': 'Flux', 'bnav.agent': 'Agent',
    'hero.badge': 'STATUT_SYSTÈME : EN LIGNE',
    'hero.desc': 'Opérateur full-stack spécialisé dans les <span class="text-primary">interfaces neurales haute fréquence</span> et l\'architecture centrale de registre distribué. Décryptage du futur du web, un protocole à la fois.',
    'hero.cta.projects': 'INITIALISER_PROJETS', 'hero.cta.contact': '> CONTACTER_DEV',
    'hero.hud.lat': 'LATITUDE', 'hero.hud.lon': 'LONGITUDE', 'hero.hud.uptime': 'DISPONIBILITÉ', 'hero.hud.target': 'CIBLE_VERROUILLÉE',
    'hero.typewriter': ['Opérateur full-stack.', 'Architecte d\'interfaces neurales.', 'Décrypteur de protocoles.', 'Ingénieur de registre distribué.'],
    'preview.title': 'EXPÉDITIONS_ARCHIVÉES', 'preview.viewall': 'VOIR_TOUS_LES_DOSSIERS',
    'preview.p1.tag': '001 // WEB3', 'preview.p1.desc': 'Agrégateur d\'exchange décentralisé avec suivi de liquidité en temps réel sur 12 chaînes.',
    'preview.p2.tag': '002 // IA', 'preview.p2.desc': 'Interface générative pour la navigation dans l\'espace latent via des modèles basés sur des transformeurs.',
    'preview.p3.tag': '003 // HUD', 'preview.p3.desc': 'Système de design et kit UI pour tableaux de bord de visualisation de données haute fidélité.',
    'career.accessing': 'Accès au Profil_01', 'career.title': 'PARCOURS_PROFESSIONNEL',
    'career.desc': 'Conception d\'écosystèmes numériques à l\'intersection du design brutaliste et des structures de données haute fréquence. Ingénieur d\'interface senior spécialisé dans les frameworks UI neuroadaptatifs.',
    'career.net.status': 'Statut Réseau', 'career.bio.title': 'Données Biométriques',
    'career.bio.codename': 'Nom de Code', 'career.bio.location': 'Base_Localisation', 'career.bio.clearance': 'Niveau d\'Accès',
    'career.cv.btn': 'TÉLÉCHARGER_CV', 'career.skills.title': 'Matrice des Compétences', 'career.skills.sub': 'Évaluation de la Charge Cognitive',
    'career.skill.ui': 'Ingénierie UI Neurale', 'career.skill.brutalist': 'Frameworks Brutalistes',
    'career.skill.datavis': 'Visualisation de Données', 'career.skill.subgrid': 'Logique de Sous-grille',
    'career.training.title': 'Modules de Formation', 'career.training.sub': 'Parcours de Formation Principaux',
    'career.training.m1': 'Conception d\'Interaction Neurale Avancée', 'career.training.m1.desc': 'Formation spécialisée en ergonomie de disposition BCI et cartographie cognitive.',
    'career.training.m2': 'Architecture de Composants Brutalistes', 'career.training.m2.desc': 'Ingénierie de systèmes structuraux haute performance avec latence 0ms et design tokens à bords durs.',
    'career.training.status': 'Statut', 'career.training.synced': 'Synchronisé',
    'career.cred.title': 'Base de Données Identifiants',
    'career.cred.c1': 'Spécialiste Interface Master', 'career.cred.c1.auth': 'Auth : Consortium Mondial du Design',
    'career.cred.c2': 'Décrypteur Full-Stack', 'career.cred.c2.auth': 'Auth : Sécurité Neural Net',
    'career.cred.c3': 'Architecte Système Prime', 'career.cred.c3.auth': 'Auth : Institut Core Systems',
    'career.validation': ['Séquence de Validation en Cours', 'Décryptage en Cours', 'Protocole d\'Accès Actif'],
    'projects.log': 'Journal d\'Opération : ACTIF', 'projects.title.span': 'OPÉRATIONS_TERMINÉES',
    'projects.desc': 'Clusters de données historiques décryptés représentant des nœuds architecturaux déployés avec succès et des interfaces tactiques. Tous les systèmes nominaux.',
    'projects.filter.all': 'TOUS', 'projects.filter.web3': 'WEB3', 'projects.filter.ai': 'IA', 'projects.filter.hud': 'HUD', 'projects.filter.system': 'SYSTÈME',
    'projects.access': 'ACCÉDER LIEN', 'projects.copy': 'COPIER LIEN',
    'projects.p1.desc': 'Interface neuro-link intégrée pour la visualisation de données en temps réel des clusters de serveurs distribués dans le quadrant Néo-Tokyo.',
    'projects.p2.desc': 'Sentinelle automatisée pour le suivi des anomalies de trading haute fréquence dans les pools de liquidité décentralisés.',
    'projects.p3.desc': 'Couche de validation par preuve à connaissance nulle pour la liquidation on-chain à haut débit avec finalité sub-50ms.',
    'projects.p4.desc': 'Interface générative pour la navigation dans l\'espace latent via des modèles de diffusion basés sur des transformeurs et un rendu WebGL.',
    'projects.p5.desc': 'Système de design et kit UI pour tableaux de bord de visualisation. 200+ composants, bibliothèque Figma, plugin Tailwind.',
    'projects.p6.desc': 'Protocole d\'archivage sécurisé pour les clés de chiffrement de portefeuilles matériels multi-signatures.',
    'projects.p7.desc': 'Système de détection d\'intrusion utilisant l\'analyse comportementale heuristique dans des environnements virtuels.',
    'projects.p8.desc': 'Modèle de machine learning pour prédire les modèles de croissance urbaine à l\'aide de données synthétiques.',
    'projects.footer.ops': 'TOTAL_OPS', 'projects.footer.data': 'TAILLE_DONNÉES', 'projects.footer.uptime': 'DISPONIBILITÉ', 'projects.footer.sync': 'SYSTÈMES_SYNCHRONISÉS',
    'status.system': 'Interface_Active_Système', 'status.title.span': 'EN_COURS', 'status.p1.id': 'ID: ALPHA_772',
    'status.uptime.label': 'Disponibilité_Globale', 'status.nodes': 'Nœuds Actifs', 'status.threat': 'Niveau de Menace', 'status.latency': 'Latence (ms)',
    'status.decrypting': 'Décryptage...', 'status.optimizing': 'Optimisation...', 'status.stable': 'STABLE', 'status.urgent': 'URGENT',
    'status.inspect': 'INSPECTER', 'status.pause': 'PAUSE', 'status.resume': 'REPRENDRE',
    'status.cta.title': 'INITIER_NOUVEAU_FLUX ?', 'status.cta.desc': 'Provisionner des nœuds de calcul supplémentaires pour un engagement freelance chiffré.',
    'status.cta.btn': 'Établir la Connexion >', 'status.log.title': 'JOURNAL_SYSTÈME_EN_DIRECT',
    'status.processing': ['Traitement...', 'Optimisation...', 'Synchronisation...', 'Chiffrement...'],
    'contact.channel': 'Canal de Transmission Sécurisé', 'contact.title.span': 'DEV',
    'contact.desc': 'Initiez une transmission chiffrée. Toutes les communications sont enregistrées et traitées dans les 24 cycles système.',
    'contact.name.label': 'Nom de l\'Opérateur *', 'contact.name.ph': 'Votre nom',
    'contact.email.label': 'Adresse de Transmission *', 'contact.email.ph': 'votre@email.fr',
    'contact.subject.label': 'Objet / Protocole', 'contact.subject.ph': 'Demande de projet, collaboration, etc.',
    'contact.message.label': 'Message Chiffré *', 'contact.message.ph': 'Décrivez les paramètres de votre mission...',
    'contact.submit': 'TRANSMETTRE >',
    'contact.status.title': 'Statut de Transmission', 'contact.status.channel': 'Canal', 'contact.status.sla': 'SLA de Réponse', 'contact.status.avail': 'Disponibilité',
    'contact.direct.title': 'Canaux Directs', 'contact.ch.email': 'E-mail', 'contact.ch.github': 'GitHub', 'contact.ch.linkedin': 'LinkedIn',
    'contact.node.title': 'Nœud Système', 'contact.node.tz': 'Fuseau Horaire', 'contact.node.loc': 'Localisation', 'contact.node.clear': 'Accès', 'contact.node.status': 'Statut',
  },

  /* ── 中文 ─────────────────────────────────────────────────── */
  zh: {
    'nav.home': '首页', 'nav.career': '职业', 'nav.projects': '项目', 'nav.status': '状态',
    'sidebar.index': '系统_索引', 'sidebar.coretemp': '核心温度', 'sidebar.coretemp.ok': '最优', 'sidebar.mem': '内存使用',
    'bnav.home': '首页', 'bnav.career': '职业', 'bnav.projects': '项目', 'bnav.status': '状态',
    'bnav.code': '代码', 'bnav.self': '个人', 'bnav.dev': '开发', 'bnav.arch': '档案', 'bnav.streams': '流', 'bnav.agent': '代理',
    'hero.badge': '系统_状态：在线',
    'hero.desc': '全栈工程师，专注于<span class="text-primary">高频神经接口</span>和分布式账本核心架构。一次解密一个协议，解码网络的未来。',
    'hero.cta.projects': '初始化_项目', 'hero.cta.contact': '> 联系_开发者',
    'hero.hud.lat': '纬度', 'hero.hud.lon': '经度', 'hero.hud.uptime': '运行时间', 'hero.hud.target': '目标_锁定',
    'hero.typewriter': ['全栈工程师。', '神经接口架构师。', '协议解密专家。', '分布式账本工程师。'],
    'preview.title': '已归档_远征', 'preview.viewall': '查看_所有记录',
    'preview.p1.tag': '001 // WEB3', 'preview.p1.desc': '去中心化交易所聚合器，支持12条链的实时流动性追踪。',
    'preview.p2.tag': '002 // 人工智能', 'preview.p2.desc': '基于Transformer模型的潜在空间导航生成式界面。',
    'preview.p3.tag': '003 // HUD', 'preview.p3.desc': '高保真数据可视化仪表板的设计系统和UI工具包。',
    'career.accessing': '正在访问 档案_01', 'career.title': '职业_路径',
    'career.desc': '在暴力主义设计和高频数据结构的交汇处构建数字生态系统。专注于神经自适应UI框架的高级界面工程师。',
    'career.net.status': '网络状态', 'career.bio.title': '生物特征数据',
    'career.bio.codename': '代号', 'career.bio.location': '基地_位置', 'career.bio.clearance': '许可级别',
    'career.cv.btn': '下载_简历', 'career.skills.title': '技能矩阵', 'career.skills.sub': '认知负荷评估',
    'career.skill.ui': '神经UI工程', 'career.skill.brutalist': '暴力主义框架',
    'career.skill.datavis': '数据可视化', 'career.skill.subgrid': '子网格逻辑',
    'career.training.title': '训练模块', 'career.training.sub': '核心教育轨迹',
    'career.training.m1': '高级神经交互设计', 'career.training.m1.desc': 'BCI布局人机工程学和认知映射专项培训。',
    'career.training.m2': '暴力主义组件架构', 'career.training.m2.desc': '构建0ms延迟的高性能结构系统和硬边缘设计令牌。',
    'career.training.status': '状态', 'career.training.synced': '已同步',
    'career.cred.title': '凭证数据库',
    'career.cred.c1': '界面专家大师', 'career.cred.c1.auth': '认证：全球设计联盟',
    'career.cred.c2': '全栈解密员', 'career.cred.c2.auth': '认证：神经网络安全',
    'career.cred.c3': '系统架构师Prime', 'career.cred.c3.auth': '认证：核心系统研究院',
    'career.validation': ['验证序列运行中', '解密进行中', '访问协议激活中'],
    'projects.log': '操作日志：活跃', 'projects.title.span': '已完成_任务',
    'projects.desc': '解密的历史数据集群，代表成功部署的架构节点和战术接口。所有系统正常。',
    'projects.filter.all': '全部', 'projects.filter.web3': 'WEB3', 'projects.filter.ai': '人工智能', 'projects.filter.hud': 'HUD', 'projects.filter.system': '系统',
    'projects.access': '访问链接', 'projects.copy': '复制链接',
    'projects.p1.desc': '集成神经链路接口，用于Neo-Tokyo象限分布式服务器集群的实时数据可视化。',
    'projects.p2.desc': '自动哨兵，用于追踪去中心化流动性池中的高频交易异常。',
    'projects.p3.desc': '零知识证明验证层，实现sub-50ms最终性的高吞吐量链上结算。',
    'projects.p4.desc': '基于Transformer扩散模型和WebGL渲染的潜在空间导航生成式接口。',
    'projects.p5.desc': '数据可视化仪表板设计系统和UI工具包，200+组件、Figma库和Tailwind插件。',
    'projects.p6.desc': '多签名硬件钱包加密密钥的安全归档协议。',
    'projects.p7.desc': '利用虚拟环境中启发式行为分析的入侵检测系统。',
    'projects.p8.desc': '使用合成数据预测城市增长模式的机器学习模型。',
    'projects.footer.ops': '总操作数', 'projects.footer.data': '数据大小', 'projects.footer.uptime': '运行时间', 'projects.footer.sync': '系统_已同步',
    'status.system': '系统_活跃_接口', 'status.title.span': '进行中', 'status.p1.id': 'ID: ALPHA_772',
    'status.uptime.label': '全局_运行时间', 'status.nodes': '活跃节点', 'status.threat': '威胁级别', 'status.latency': '延迟 (ms)',
    'status.decrypting': '解密中...', 'status.optimizing': '优化中...', 'status.stable': '稳定', 'status.urgent': '紧急',
    'status.inspect': '检查', 'status.pause': '暂停', 'status.resume': '恢复',
    'status.cta.title': '启动_新流？', 'status.cta.desc': '为加密自由职业项目配置额外计算节点。',
    'status.cta.btn': '建立连接 >', 'status.log.title': '实时_系统_日志',
    'status.processing': ['处理中...', '优化中...', '同步中...', '加密中...'],
    'contact.channel': '安全传输频道', 'contact.title.span': 'DEV',
    'contact.desc': '启动加密传输。所有通信将在24个系统周期内记录和处理。',
    'contact.name.label': '操作员姓名 *', 'contact.name.ph': '您的姓名',
    'contact.email.label': '传输地址 *', 'contact.email.ph': 'your@email.com',
    'contact.subject.label': '主题 / 协议', 'contact.subject.ph': '项目咨询、合作等',
    'contact.message.label': '加密消息 *', 'contact.message.ph': '描述您的任务参数...',
    'contact.submit': '发送传输 >',
    'contact.status.title': '传输状态', 'contact.status.channel': '频道', 'contact.status.sla': '响应SLA', 'contact.status.avail': '可用性',
    'contact.direct.title': '直接频道', 'contact.ch.email': '邮件', 'contact.ch.github': 'GitHub', 'contact.ch.linkedin': 'LinkedIn',
    'contact.node.title': '系统节点', 'contact.node.tz': '时区', 'contact.node.loc': '位置', 'contact.node.clear': '许可', 'contact.node.status': '状态',
  },
};

/* ============================================================
   CORE ENGINE
   ============================================================ */
const DEFAULT_LANG = 'en';
let currentLang = localStorage.getItem('na_lang') || DEFAULT_LANG;

/** Expose translations and helpers globally for other JS files */
window.__i18n = translations;
window.__langs = LANGUAGES;
window.getLang = () => currentLang;
window.t = (key) => (translations[currentLang]?.[key]) ?? (translations[DEFAULT_LANG]?.[key]) ?? key;

function applyTranslations(lang) {
  const t = translations[lang] || translations[DEFAULT_LANG];

  // textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined && !Array.isArray(v)) el.textContent = v;
  });

  // innerHTML (for strings containing HTML like <span>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v) el.innerHTML = v;
  });

  // placeholder attributes
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t[el.dataset.i18nPh];
    if (v) el.placeholder = v;
  });

  // aria-label
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const v = t[el.dataset.i18nAria];
    if (v) el.setAttribute('aria-label', v);
  });
}

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('na_lang', lang);

  // Update switcher UI
  const codeEl = document.getElementById('lang-code');
  if (codeEl) codeEl.textContent = LANGUAGES[lang].code;

  // Mark active option
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Apply to DOM
  applyTranslations(lang);

  // Notify page-specific scripts
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));

  // Update <html lang> attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;
}

/* ============================================================
   LANGUAGE SWITCHER UI
   ============================================================ */
function buildSwitcher() {
  const switcher = document.getElementById('lang-switcher');
  if (!switcher) return;

  const btn = document.getElementById('lang-btn');
  const dropdown = document.getElementById('lang-dropdown');
  if (!btn || !dropdown) return;

  // Populate dropdown options
  Object.entries(LANGUAGES).forEach(([code, meta]) => {
    const opt = document.createElement('button');
    opt.className = 'lang-option w-full text-left';
    opt.dataset.lang = code;
    opt.setAttribute('type', 'button');
    opt.innerHTML = `<span>${meta.flag}</span><span>${meta.label}</span>`;
    opt.addEventListener('click', () => {
      setLang(code);
      dropdown.classList.add('hidden');
    });
    dropdown.appendChild(opt);
  });

  // Toggle dropdown
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('hidden');
  });

  // Close on outside click
  document.addEventListener('click', () => dropdown.classList.add('hidden'));
  dropdown.addEventListener('click', (e) => e.stopPropagation());

  // Set initial code label
  const codeEl = document.getElementById('lang-code');
  if (codeEl) codeEl.textContent = LANGUAGES[currentLang]?.code || 'EN';
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildSwitcher();
  setLang(currentLang);
});

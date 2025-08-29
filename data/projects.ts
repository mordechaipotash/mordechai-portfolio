export interface Project {
  id: string;
  name: string;
  problem: string;  // One-line problem statement
  solution: string; // What I built to solve it
  techStack: string[];
  screenshots: string[]; // Multiple screenshots
}

export const projects: Project[] = [
  {
    id: 'wotc-system',
    name: 'WOTC Tax Credit System',
    problem: 'Companies leaving $20K tax credits on the table per employee',
    solution: 'Python pipeline that extracts, validates, and files forms in 30 seconds',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'Supabase'],
    screenshots: ['/screenshots/wotc-system.png', '/screenshots/partner-portal.png']
  },
  {
    id: 'dental-imaging',
    name: 'Dental Image Processor',
    problem: 'Dentists waiting 45 minutes for X-ray enhancement',
    solution: 'Python OpenCV pipeline for instant edge detection and contrast',
    techStack: ['Python', 'OpenCV', 'PIL', 'NumPy'],
    screenshots: ['/screenshots/dental.png']
  },
  {
    id: 'mikopro',
    name: 'Mikopro Inventory',
    problem: 'Israeli warehouse losing track of Hebrew-labeled inventory',
    solution: 'RTL-supported real-time inventory system with barcode scanning',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    screenshots: ['/screenshots/mikopro.png']
  },
  {
    id: 'youtube-pipeline',
    name: 'YouTube Data Analysis',
    problem: 'No way to analyze 5 years of YouTube watch history',
    solution: 'Python pipeline that processes and visualizes viewing patterns',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Supabase'],
    screenshots: ['/screenshots/youtube-analytics.png']
  },
  {
    id: 'pdf-processing',
    name: 'PDF Webhook System',
    problem: 'Manual data entry from 1000+ PDFs per day',
    solution: 'Distributed Python workers processing PDFs in parallel',
    techStack: ['Python', 'Railway', 'Celery', 'FastAPI'],
    screenshots: ['/screenshots/tcs-processing.png', '/screenshots/form-automation.png']
  },
  {
    id: 'address-validation',
    name: 'Address Zone Validator',
    problem: 'Need to verify if addresses qualify for tax incentives',
    solution: 'PostGIS spatial queries checking empowerment zones',
    techStack: ['Python', 'PostGIS', 'PostgreSQL', 'Geocoding APIs'],
    screenshots: ['/screenshots/wotc-system.png']
  },
  {
    id: 'chat-importer',
    name: 'Claude Chat Importer',
    problem: '500+ AI conversations stuck in JSON files',
    solution: 'Python script to bulk import and index chat history',
    techStack: ['Python', 'JSON', 'Pandas', 'Supabase'],
    screenshots: []
  },
  {
    id: 'citycar-scraper',
    name: 'Vehicle Price Tracker',
    problem: 'Used car dealers need daily market price updates',
    solution: 'Python scraper monitoring 10+ sites with price alerts',
    techStack: ['Python', 'BeautifulSoup', 'Selenium', 'MongoDB'],
    screenshots: ['/screenshots/citycar.png']
  },
  {
    id: 'talmud-app',
    name: 'Talmud Study Platform',
    problem: 'Students can\'t find cross-references in ancient texts',
    solution: 'Hebrew text search engine with reference linking',
    techStack: ['Python', 'FastAPI', 'MongoDB', 'React'],
    screenshots: ['/screenshots/talmud.png']
  },
  {
    id: 'utility-tax',
    name: 'Utility Tax Recovery',
    problem: 'Businesses overpaying utility taxes by 15-30%',
    solution: 'Automated Python system finding and filing refunds',
    techStack: ['Python', 'BeautifulSoup', 'PostgreSQL', 'Selenium'],
    screenshots: []
  },
  {
    id: 'knowledge-compress',
    name: 'Knowledge Compression',
    problem: 'Losing context after hyperfocus coding sessions',
    solution: 'System to capture and compress knowledge into retrievable layers',
    techStack: ['Python', 'SQLAlchemy', 'FastAPI', 'PostgreSQL'],
    screenshots: []
  },
  {
    id: 'automate-anything',
    name: 'AutomateAnything',
    problem: 'Non-coders need to build automation workflows',
    solution: 'Visual workflow builder with Python execution engine',
    techStack: ['Python', 'Celery', 'Redis', 'React', 'PostgreSQL'],
    screenshots: ['/screenshots/automate-anything.png']
  },
  {
    id: 'personal-accounting',
    name: 'Multi-Currency Accounting',
    problem: 'Managing finances across 3 countries and 4 currencies',
    solution: 'Custom accounting system with real-time conversion',
    techStack: ['Python', 'SQLAlchemy', 'Vue.js', 'PostgreSQL'],
    screenshots: ['/screenshots/personal-accounting.png']
  },
  {
    id: 'google-automation',
    name: 'Google Workspace Automation',
    problem: 'Team wasting 2 hours daily on spreadsheet updates',
    solution: 'Python scripts automating Google Sheets workflows',
    techStack: ['Python', 'Google Apps Script', 'Sheets API', 'Drive API'],
    screenshots: ['/screenshots/google-scripts.png']
  },
  {
    id: 'audio-processing',
    name: 'Audio Batch Processor',
    problem: 'Podcast needs 100+ audio files converted weekly',
    solution: 'Python pipeline for format conversion and metadata',
    techStack: ['Python', 'PyDub', 'FFmpeg', 'Express'],
    screenshots: ['/screenshots/audio.png']
  },
  {
    id: 'cause-fund',
    name: 'Crowdfunding Platform',
    problem: 'Charities losing 8% to payment processor fees',
    solution: 'Custom platform with optimized payment routing',
    techStack: ['Python', 'FastAPI', 'Stripe', 'React', 'PostgreSQL'],
    screenshots: ['/screenshots/cause-fund.png']
  },
  {
    id: 'haturim',
    name: 'Hebrew Content CMS',
    problem: 'WordPress can\'t handle complex Hebrew text layouts',
    solution: 'RTL-first CMS with proper Hebrew typography',
    techStack: ['Python', 'Django', 'PostgreSQL', 'Vue.js'],
    screenshots: ['/screenshots/haturim.png']
  },
  {
    id: 'space-platform',
    name: 'Team Collaboration Space',
    problem: 'Remote team needs better than Slack for deep work',
    solution: 'Real-time collaboration with context preservation',
    techStack: ['Python', 'Django', 'WebSockets', 'React', 'Redis'],
    screenshots: ['/screenshots/the-space.png']
  },
  {
    id: 'form-automation',
    name: 'Government Form Filler',
    problem: 'HR spends 4 hours per new hire on government forms',
    solution: 'Auto-fill system with validation and error checking',
    techStack: ['Python', 'Selenium', 'React', 'Supabase'],
    screenshots: ['/screenshots/form-automation.png']
  },
  {
    id: 'ocr-processor',
    name: 'OCR Document Pipeline',
    problem: 'Law firm processing 500 scanned documents daily',
    solution: 'Python OCR pipeline with 98% accuracy',
    techStack: ['Python', 'PyPDF2', 'Tesseract', 'FastAPI'],
    screenshots: ['/screenshots/tcs-processing.png']
  },
  {
    id: 'webhook-orchestrator',
    name: 'Webhook Orchestrator',
    problem: 'Microservices need reliable event distribution',
    solution: 'Python service handling 1M+ webhooks per day',
    techStack: ['Python', 'FastAPI', 'Redis', 'PostgreSQL'],
    screenshots: []
  }
];
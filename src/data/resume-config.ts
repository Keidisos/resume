import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Mateo Hirsch',
    photoBackEmoji: '🛡️',
    title: {
      fr: 'Futur Ingénieur Cybersécurité',
      en: 'Future Cybersecurity Engineer',
    },
    subtitle: {
      fr: 'Alternant RSSI chez EDF',
      en: 'CISO Apprentice at EDF',
    },
    location: 'Couthenans, France',
  },
  seo: {
    title: 'Mateo Hirsch — Futur Ingénieur Cybersécurité',
    description: 'CV interactif de Mateo Hirsch, spécialisé en Cybersécurité, Systèmes et Réseaux.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'Matéo Hirsch', href: 'https://www.linkedin.com/in/matéo-hirsch' },
    { type: 'email', label: 'hirschmateo.mh@gmail.com' },
    { type: 'phone', label: '06 79 96 79 56' },
    { type: 'location', label: 'Couthenans, France' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B1', en: 'B1' } },
        { name: { fr: 'Espagnol', en: 'Spanish' }, level: { fr: 'B1', en: 'B1' } },
      ],
    },
    {
      title: { fr: 'Cybersécurité', en: 'Cybersecurity' },
      type: 'badges',
      items: [
        { name: 'Red Team' },
        { name: 'Blue Team' },
        { name: 'PenTest' },
        { name: 'OSINT' },
        { name: 'Forensic' },
        { name: 'Cryptographie' },
      ],
    },
    {
      title: { fr: 'Programmation', en: 'Programming' },
      type: 'badges',
      items: [
        { name: 'Python' },
        { name: 'HTML' },
        { name: 'PHP' },
        { name: 'C++' },
      ],
    },
    {
      title: { fr: 'Systèmes & Réseaux', en: 'Systems & Networks' },
      type: 'badges',
      items: [
        { name: 'Administration SI' },
        { name: '4G Privée' },
      ],
    },
    {
      title: { fr: 'Soft Skills', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Motivation, Attention, Respect, Curiosité, Organisation', en: 'Motivation, Attention, Respect, Curiosity, Organization' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'edf-rssi',
      company: { fr: 'EDF', en: 'EDF' },
      role: { fr: 'Alternant RSSI', en: 'CISO Apprentice' },
      type: { fr: 'Alternance', en: 'Apprenticeship' },
      period: { fr: '08/2024 - Présent', en: '08/2024 - Present' },
      description: {
        fr: 'Gestion des incidents de sécurité et prévention des risques au sein de l\'équipe cybersécurité.',
        en: 'Security incident management and risk prevention within the cybersecurity team.',
      },
      techs: ['Analyse de risque', 'Gestion de crise'],
      isHighlighted: true,
      details: {
        tasks: {
          fr: [
            'Gestion d\'incidents SI',
            'Organisation d\'exercice de crise cyber',
            'Formation des utilisateurs aux bonnes pratiques',
            'Analyse de risque cybersécurité',
          ],
          en: [
            'IT incident management',
            'Organization of cyber crisis exercises',
            'User training on best practices',
            'Cybersecurity risk analysis',
          ],
        },
      },
    },
    {
      id: 'edf-pilote',
      company: { fr: 'EDF', en: 'EDF' },
      role: { fr: 'Pilote d\'exploitation', en: 'Operations Pilot' },
      type: { fr: 'Alternance', en: 'Apprenticeship' },
      period: { fr: '09/2021 - 08/2024', en: '09/2021 - 08/2024' },
      description: {
        fr: 'Administration des infrastructures systèmes et réseaux, et gestion de projets de déploiement.',
        en: 'Systems and networks infrastructure administration, and deployment project management.',
      },
      techs: ['Réseaux', 'Systèmes', '4G Privée'],
      details: {
        tasks: {
          fr: [
            'Gestion des incidents',
            'Administration systèmes & réseaux',
            'Gestion de projets',
            'Déploiement d\'une infrastructure 4G privée',
          ],
          en: [
            'Incident management',
            'Systems & networks administration',
            'Project management',
            'Deployment of a private 4G infrastructure',
          ],
        },
      },
    },
    {
      id: 'bricodepot',
      company: { fr: 'Bricodépôt', en: 'Bricodépôt' },
      role: { fr: 'Vendeur', en: 'Salesperson' },
      type: { fr: 'Job étudiant', en: 'Student Job' },
      period: { fr: '07/2021 - 08/2021', en: '07/2021 - 08/2021' },
      description: {
        fr: 'Accompagnement client et gestion des rayons pendant la période estivale.',
        en: 'Customer support and department management during the summer period.',
      },
      techs: [],
      details: {
        tasks: {
          fr: [
            'Gestion des stocks',
            'Création et étude de devis',
          ],
          en: [
            'Stock management',
            'Creation and study of quotes',
          ],
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'Sup de Vinci Bordeaux', en: 'Sup de Vinci Bordeaux' },
      degree: { fr: 'Master Cybersécurité', en: 'Master in Cybersecurity' },
      specialty: { fr: 'Red Team, Blue Team, PenTest, OSINT, Forensic, Cryptographie', en: 'Red Team, Blue Team, PenTest, OSINT, Forensic, Cryptography' },
      period: '09/2024 - Présent',
    },
    {
      school: { fr: 'IUT Montbéliard', en: 'IUT Montbéliard' },
      degree: { fr: 'BUT Réseaux et Télécommunications', en: 'Bachelor in Networks and Telecommunications' },
      specialty: { fr: 'Administration systèmes & réseaux, Sécurisation du SI, Gestion de crise', en: 'Systems & networks administration, IT security, Crisis management' },
      period: '09/2021 - 08/2024',
    },
    {
      school: { fr: 'Lycée Raoul Follereau Belfort', en: 'Raoul Follereau High School, Belfort' },
      degree: { fr: 'BAC Général (Mention)', en: 'High School Diploma (with Honors)' },
      specialty: { fr: 'Spécialité Maths & Numérique Sciences de l\'Informatique', en: 'Specialty in Maths & Computer Science' },
      period: '2019 - 2021',
    },
  ],
  projects: [],
  hobbies: [
    {
      title: { fr: 'Handball', en: 'Handball' },
      details: [
        { fr: '10 ans en club + arbitrage', en: '10 years in a club + refereeing' },
      ],
    },
    {
      title: { fr: 'Jeux Vidéos', en: 'Video Games' },
      details: [
        { fr: 'Jeux d\'équipes', en: 'Team games' },
      ],
    },
    {
      title: { fr: 'Informatique', en: 'Computer Science' },
    },
  ],
  theme: { preset: 'slate' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'WORK EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech env.:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}

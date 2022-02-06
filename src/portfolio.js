const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://blog.itsmesovit.com',
  title: 'Blog',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sovit Lekhak',
  role: 'Machine Learning Enthusiast & a Python Developer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://drive.google.com/file/d/1E04dizC_JrwEy2jGbag5rllZMuCbw3Ud/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/sovitlekhak',
    github: 'https://github.com/sovitpy',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'AdAstra',
    description:
      'AdAstra is an API that uses a machine learning model to predict imminent heart diseases. The project won the regional finals of “Provathon”, a nation-wide hackathon.',
    stack: ['Python', 'Javascript', 'Jupyter Notebook'],
    sourceCode: 'https://github.com/sovitpy/heart-disease-api',
    livePreview: 'https://drive.google.com/file/d/13oPDZHhX0qg4HF8QsbAsJMs-dahsa2IS/view?usp=sharing',
  },
  {
    name: 'Briksha',
    description:
      'Briksha is an Android app that can detect plant diseases from leaf images. It uses flask-based API to deliver predictions made by a deep-learning model on a flutter frontend.',
    stack: ['Python', 'Flutter', 'Jupyter Notebook'],
    sourceCode: 'https://github.com/sovitpy/Briksha',
    livePreview: 'https://user-images.githubusercontent.com/53575561/131122198-5d0effb6-837a-4795-9f77-f047b58da05a.mp4',
  },
  {
    name: 'ISKUL',
    description:
      "ISKUL is a web-based school administration application built with Django. It's a fully functional CRUD app that can manage students, teachers, classes, and other administrative tasks.",
    stack: ['Python', 'JavaScript', 'SQLite'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'NEPSE API',
    description:
      'This is an unofficial API for Nepal Stock Exchange(NEPSE). It can be used to fetch real-time stock prices and floor sheets.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const certifications = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Certificate 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Certificate 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Certificate 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact, certifications }

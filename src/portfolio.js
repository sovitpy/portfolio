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
    facebook: 'https://www.facebook.com/sovitpy',
    instagram: 'https://www.instagram.com/sovit.py',
    tweet: 'https://twitter.com/sovitpy',
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
    sourceCode: 'https://github.com/geekyarthurs/iskul',
    livePreview: 'https://youtu.be/uJxau-BqFfE?t=1960',
  },
  {
    name: 'NEPSE API',
    description:
      'This is an unofficial API for Nepal Stock Exchange(NEPSE). It can be used to fetch real-time stock prices and floor sheets.',
    stack: ['Python', 'JavaScript'],
    sourceCode: 'https://github.com/scifisatan/nepse',
    livePreview: 'https://api-nepse.herokuapp.com/',
  },
  {
    name: 'COVID-19 BOT Nepal',
    description:
      'This bot tweets the daily updates on COVID-19 cases in Nepal. It uses the official API MoHP, Nepal to fetch the data.',
    stack: ['Python',],
    sourceCode: 'https://github.com/scifisatan/covidbot',
    livePreview: 'https://twitter.com/NepalCovid19Bot',
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
  'Python',
  'Machine Learning',
  'Penetration Testing',
  'Microcontroller Programming',
  'Cloud Computing',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sovitlekhak@gmail.com',
  phone: '+9779841234567',
  address: 'Kathmandu, Nepal',
}

export { header, about, projects, skills, contact, certifications }

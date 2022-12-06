import { IconType } from 'react-icons'
import {
  SiDotNet,
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiGraphql,
  SiApollographql,
  SiPhp,
  SiReact,
  SiNextDotJs,
  SiRedux,
  SiStyledComponents,
  SiGhost,
  SiVueDotJs,
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiRancher,
  SiGitlab,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSocketDotIo,
  SiMaterialUi,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiUnity,
  SiMicrosoft,
  SiElectron,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiTailwindcss,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { FaSourcetree } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'
  | 'desktop'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Node',
      icon: SiNodeDotJs,
    },
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
  ],
  frontend: [
    {
      name: 'React, RecoilJS',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextDotJs,
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'Figma',
      icon: SiFigma,
    },
  ],
  database: [
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'SocketIO',
      icon: SiSocketDotIo,
    },
    {
      name: 'Firebase',
      icon: SiFirebase,
    },
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledComponents,
    },
    {
      name: 'MaterialUI',
      icon: SiMaterialUi,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'Web PWA',
      icon: IoLogoPwa,
    },
    {
      name: 'Flutter',
      icon: SiFlutter,
    },
  ],
 
  desktop: [
    {
      name: 'Electron',
      icon: SiElectron,
    },
  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}

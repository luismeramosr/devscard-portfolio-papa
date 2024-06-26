import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const kuka = createSkillFactory({
    name: 'KUKA',
    url: 'https://www.kuka.com/es-es',
});

export const solidworks = createSkillFactory({
    name: 'Solidworks',
    url: 'https://www.solidworks.com/es',
});

export const arduino = createSkillFactory({
    name: 'Arduino',
    url: 'https://www.arduino.cc/',
});

export const cypress = createSkillFactory({
    name: 'Cypress',
    icon: 'simple-icons:cypress',
    iconColor: '#17202C',
    url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
    name: 'ESLint',
    icon: 'simple-icons:eslint',
    iconColor: '#4B32C3',
    url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
    name: 'Firebase',
    icon: 'simple-icons:firebase',
    iconColor: '#FFCA28',
    url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
    name: 'Jest',
    icon: 'simple-icons:jest',
    iconColor: '#C21325',
    url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
    name: 'MongoDB',
    icon: 'simple-icons:mongodb',
    iconColor: '#47A248',
    url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
    name: 'NestJS',
    icon: 'simple-icons:nestjs',
    iconColor: '#E0234E',
    url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
    name: 'Next.js',
    icon: 'simple-icons:nextdotjs',
    iconColor: '#000000',
    url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
    name: 'Nx',
    icon: 'simple-icons:nx',
    iconColor: '#143055',
    url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
    name: 'pnpm',
    icon: 'simple-icons:pnpm',
    iconColor: '#F69220',
    url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
    name: 'PostgreSQL',
    icon: 'simple-icons:postgresql',
    iconColor: '#4169E1',
    url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
    name: 'Prettier',
    icon: 'simple-icons:prettier',
    iconColor: '#F7B93E',
    url: 'https://prettier.io/',
});

export const react = createSkillFactory({
    name: 'React.js',
    icon: 'simple-icons:react',
    iconColor: '#61DAFB',
    url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
    name: 'React Query',
    icon: 'simple-icons:reactquery',
    iconColor: '#FF4154',
    url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
    name: 'SASS',
    icon: 'simple-icons:sass',
    iconColor: '#CC6699',
    url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
    name: 'Supabase',
    icon: 'simple-icons:supabase',
    iconColor: '#3ECF8E',
    url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
    name: 'Tailwind CSS',
    icon: 'simple-icons:tailwindcss',
    iconColor: '#06B6D4',
    url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
    name: 'TypeScript',
    icon: 'simple-icons:typescript',
    iconColor: '#3178C6',
    url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
    name: 'Vue.js',
    icon: 'simple-icons:vuedotjs',
    iconColor: '#4FC08D',
    url: 'https://vuejs.org/',
});

export const siemens = {
    level: 4,
    name: "Siemens",
    src: import('@/assets/logos/siemens.png'),
    url: "https://www.siemens.com/pe/es.html",
    width: 60,
    height: 10,
    description: "Programación de PLC's, integración con pantallas HMI mediante protocolo de comunicación PROFINET, programación de LOGO.",
    style: ""
}

export const unitronics = {
    level: 5,
    name: "Unitronics",
    src: import('@/assets/logos/unitronics.webp'),
    url: "https://www.unitronics.com/",
    width: 70,
    height: 30,
    description: "Programación de PLC's, integración con pantallas HMI mediante protocolo de comunicación MODBUS.",
    style: "margin-bottom: 4px;"
}

export const allen_bradley = {
    level: 3,
    name: "Allen Bradley",
    src: import('@/assets/logos/allen-bradley.png'),
    url: "https://www.rockwellautomation.com/es-mx/products/hardware/allen-bradley.html",
    width: 60,
    height: 30,
    description: "Programación de PLC's, integración con pantallas HMI mediante protocolo de comunicación MODBUS.",
    style: ""
}

export const delta = {
    level: 3,
    name: "Delta",
    src: import('@/assets/logos/delta.png'),
    url: "https://www.deltaww.com/en-US/index",
    width: 60,
    height: 30,
    description: "Diseño e implementación de pantallas HMI.",
    style: ""
}

export const schneider = {
    level: 5,
    name: "Schneider",
    src: import('@/assets/logos/schneider.png'),
    url: "https://www.se.com/pe/es/",
    width: 60,
    height: 30,
    description: "Instalación y configuración de variadores. Programación de micro-PLC Zelio.",
    style: ""
}

export const danfoss = {
    level: 5,
    name: "Danfoss",
    src: import('@/assets/logos/danfoss.png'),
    url: "https://www.danfoss.com/en/",
    width: 60,
    height: 30,
    description: "Instalación y configuración de variadores.",
    style: ""
}

export const autonics = {
    level: 5,
    name: "Autonics",
    src: import('@/assets/logos/autonics.png'),
    url: "https://autonics.com.pe/",
    width: 60,
    height: 30,
    description: "Configuración de controladores de temperatura, nivel, presión, velocidad y de proximidad.",
    style: ""
}

export const omron = {
    level: 4,
    name: "Omron",
    src: import('@/assets/logos/omron.png'),
    url: "https://www.omron.com/global/en/",
    width: 60,
    height: 30,
    description: "Instalación y configuración de variadores. Programación de PLC's.",
    style: ""
}

export const unitronics_tag = createSkillFactory({
    name: 'Unitronics',
    url: 'https://www.unitronics.com/',
});

export const siemens_tag = createSkillFactory({
    name: 'Siemens',
    url: 'https://www.siemens.com/pe/es.html',
});

export const allen_bradley_tag = createSkillFactory({
    name: 'Allen Bradley',
    url: 'https://www.rockwellautomation.com/es-mx/products/hardware/allen-bradley.html',
});

export const delta_tag = createSkillFactory({
    name: 'Delta',
    url: 'https://www.deltaww.com/en-US/index',
});

export const autonics_tag = createSkillFactory({
    name: 'Autonics',
    url: 'https://autonics.com.pe/',
});

export const festo_tag = createSkillFactory({
    name: 'Festo',
    url: 'https://www.festo.com/pe/es/',
});

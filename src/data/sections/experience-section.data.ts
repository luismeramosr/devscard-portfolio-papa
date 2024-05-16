import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
    allen_bradley_tag,
    autonics_tag,
    delta_tag,
    eslint,
    festo_tag,
    firebase,
    nextJs,
    nx,
    pnpm,
    react,
    reactQuery,
    siemens_tag,
    tailwindCss,
    typescript,
    unitronics_tag,
    vue,
} from '../helpers/skills';

const experienceSectionData = {
    config: {
        title: 'Experiencia laboral',
        slug: 'experiencia',
        icon: 'fa6-solid:suitcase',
        visible: true,
    },
    jobs: [
        {
            role: 'Técnico Electro-Instrumentista',
            company: 'Aris Industrial',
            image: import('@/assets/logos/aris.png'),
            dates: [new Date('2010-02'), new Date("2024-05")],
            description: `
        Automatización de 9 máquinas continuas COGNETEX-FL14.
        Se mejoró el sistema de control pasando de usar relés y contactores a un control por PLC Unitronics V-350
        e interfaz HMI lo que permitió que la máquina pueda realizar algunas secuencias que antes no podía.
        \\
        Automatización y puesta en producción de 3 máquinas GUILL'S NSC donde se reemplazo el sistema cambia botes
        que estaba implementado con 2 PLC SIEMENS S5 (tecnología legacy) y que no funcionaba correctamente
        por 2 PLC SIMATIC S7-1200 lo cual permitió luego cambiar el sistema electro-neumático del cambia tacho
        por un sistema electro-mécanico presente en otras máquinas que si funcionaban, como resultado
        se pudo integrar estas 3 máquinas a la línea de producción.
        \\
        Automatización de una máquina CONVERTER con PLC Unitronics V-700 y 7 variadores de velocidad Delta,
        donde se reemplazó todo el sistema de control de velocidad manual de la máquina por un sistema
        de control de velocidad automático basado en recetas por tipo de material, como resultado
        la eficiencia de la máquina aumentó un 280%.
        \\
        Diseño de planos eléctricos e implementación en los respectivos tableros de control.
        Mantenimiento preventivo y correctivo del sistema eléctrico de máquinas textiles.
      `,
            tagsList: {
                title: 'Tecnologías',
                tags: [unitronics_tag(), siemens_tag(), delta_tag(), autonics_tag()],
            },
            links: [website({ url: 'https://www.aris.com.pe/' }), linkedin({ url: 'https://www.linkedin.com/company/aris-com-pe/' })],
        },
        {
            role: 'Instructor de la carrera de electricidad industrial',
            company: 'Senati U.O Huánuco',
            image: import('@/assets/logos/senati.png'),
            dates: [new Date('2005-03'), new Date('2008-12')],
            description: `
        Instructor de sistema dual en los cursos de electrónica básica, electrónica digital, electro neumática,
        electro hidráulica, automatización por contactores, automatización por PLC, instrumentacion y control industrial.
        \\
        Asesor de proyectos de innovación.
        \\
        Instructor de cursos de capacitación continua (gente que trabaja) en los cursos de automatización por LOGO Siemens, control industrial con PLC, mandos electro neumáticos.
        \\
        Responsable del sistema SINFO Senati.
      `,
            tagsList: {
                title: 'Tecnologías',
                tags: [siemens_tag(), allen_bradley_tag(), festo_tag()],
            },
            links: [website({ url: 'https://www.senati.edu.pe/' }), facebook({ url: 'https://www.facebook.com/SenatiOficial' })],
        },
    ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

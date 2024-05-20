import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
    delta_tag,
    unitronics_tag,
} from '../helpers/skills';

const portfolioSectionData = {
    config: {
        title: 'Proyectos',
        slug: 'proyectos',
        icon: 'fa6-solid:rocket',
        visible: true,
        screenshots: {
            title: 'Imágenes',
            icon: 'fa6-solid:images',
        },
    },
    projects: [
        {
            name: 'Automatización de máquina converter',
            image: import('@/assets/portfolio/project-1.jpeg'),
            dates: [new Date('2020-03'), null],
            details: [
                { label: 'Tamaño del equipo', value: '1 persona' },
                { label: 'Mis roles', value: ['Diseñador', 'Programador', 'Instalador'] },
                { label: 'Compañía', value: 'Aris Industrial' },
                { label: 'Categoría', value: ['Automatización', 'Mejora'] },
            ],
            pdfDetails: [
                { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
                { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
            ],
            screenshots: [
                { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
                { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
                { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
            ],
            description:
                `Resultado del proyecto: Incrementó la velocidad de funcionamiento en hasta un 280%.
                  \\
                  Para esto se diseñó, programó e instaló un sistema de control de velocidad analógico controlado por 1 PLC
                  Unitronics vision-700 el cual posee una pantalla HMI de 7" y controla la velocidad de 7 variadores
                  de velocidad Delta.
                  \\
                  Se implementó en el HMI del PLC las siguientes Pantallas:
                  - Recetas según el material.
                  - Alarmas por paro a causa de atoros y roturas de material.
                  - Alarmas por fallas eléctricas.
                  - Gestión de velocidad de cada variador.
                  - Gestión de metraje y eficiencia por turnos.
                  - Información de estado de entradas y salidas del plc.
                  \\
                  También se agrego a la máquina un sistema cambia tacho automático el cual es controlado
                  por el PLC. Adicionalmente se elaboró los planos eléctricos de los 3 tableros de control que tiene
                  la máquina y manual de manejo de las pantallas del HMI.
                  \\
                  Finalmente se realizó la capacitación del personal a cargo del manejo y operación de la máquina.
                `,
            tagsList: {
                title: 'Tecnologías',
                tags: [unitronics_tag(), delta_tag()],
            },
            links: [],
        },
        {
            name: 'Automatización de máquinas barca de teñido',
            image: import('@/assets/portfolio/project-2.jpeg'),
            dates: [new Date('2019-06'), new Date('2020-02')],
            details: [
                { label: 'Tamaño del equipo', value: '1 persona' },
                { label: 'Mis roles', value: ['Diseñador', 'Programador', 'Instalador'] },
                { label: 'Compañía', value: 'Aris Industrial' },
                { label: 'Categoría', value: ['Automatización', 'Mejora'] },
            ],
            pdfDetails: [
                { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
                { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
            ],
            description:
                `Resultado del proyecto: Mejor control de temperatura por PID y por gradientes.
                Para esto se diseñó, programó e instaló un sistema de control temperatura en lazo cerrado
                con 1 PLC Unitronics vision - 350, 1 convertidor I/P y una válvula proporcional.
                \\
                Se creó en el PLC las siguientes subrutinas:
                - Control de temperatura on - off.
                - Control de temperatura PID.
                - Autosintonía.
                - Lectura escritura de recetas.
                - Control de temperatura por gradientes con algoritmos.
                \\
                En el HMI se crearon las siguientes pantallas:
                - Lectura y escritura de recetas.
                - Selección de tipo de gradientes, tiempos de calentamiento, enfriamiento, etc.
                \\
              Se elaboraron los planos eléctricos de los 2 tableros de control.
                Y manual de manejo de las pantallas del HMI.
                \\
                Finalmente se realizó la capacitación del personal a cargo del manejo y operación de la máquina.`
            ,
            tagsList: {
                title: 'Tecnologías',
                tags: [unitronics_tag()],
            },
            links: [],
        },
        {
            name: 'Mejora del equipo de laboratorio AXIAL LOAD CMC KUNHKE',
            image: import('@/assets/portfolio/project-3.jpeg'),
            dates: [new Date('2018-01'), new Date('2020-12')],
            details: [
                { label: 'Tamaño del equipo', value: '1 persona' },
                { label: 'Mis roles', value: ['Diseñador', 'Programador', 'Instalador'] },
                { label: 'Compañía', value: 'Epinsa' },
                { label: 'Categoría', value: ['Mejora'] },
            ],
            pdfDetails: [
                { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
                { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
            ],
            description:
                `
                  Resultado del proyecto: Sustitución del sistema de control antiguo por un nuevo
                  sistema de control mediante PLC lo cual permitió el correcto funcionamiento del equipo.
                  \\
                  Para esto se diseñó, programó e instaló un tablero de control con PLC Unitronics Vision-350
                  el cual, junto a una celda de carga y transmisor de presión hacian las pruebas de carga axial
                  (axial load) e implosión de los envases metálicos. Los datos de las pruebas se almacenaban
                  en una tabla de datos y posteriormente se exportaban a un archivo Excel.
                  \\
                  También se entregaron los planos eléctricos y el manual de manejo de las pantallas del HMI.
                `,
            tagsList: {
                title: 'Tecnologías',
                tags: [unitronics_tag()],
            },
            links: [],
        },
    ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;

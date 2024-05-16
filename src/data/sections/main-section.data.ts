import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, linkedin, youtube } from '../helpers/links';

const mainSectionData = {
    config: {
        icon: 'fa6-solid:user',
        title: 'Perfil',
        slug: 'perfil',
        visible: true,
    },
    image: import('@/assets/my-image.jpg'),
    fullName: 'Luis Ramos',
    role: 'Electricista Especializado en Automatización Industrial',
    details: [
        { label: 'Phone', value: '+51923522345', url: 'https://wa.me/51923522345' },
        { label: 'Email', value: 'luisramos.6798@gmail.com', url: 'mailto:luisramos.6798@gmail.com' },
        { label: 'From', value: 'Lima, Perú' },
    ],
    pdfDetails: [
        { label: 'Phone', value: '605 475 6961' },
        { label: 'Email', value: 'mark.freeman.dev@gmail.com' },
        { label: 'LinkedIn', value: '/in/mark-freeman', url: 'https://linkedin.com' },
        { label: 'GitHub', value: '/mark-freeman', url: 'https://github.com' },
        // { label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
    ],
    description:
        'Soy un líder natural que guía a mi equipo hacia el éxito, inspirando confianza y fomentando la colaboración. Mi enfoque en la responsabilidad garantiza tareas de alta calidad y seguridad, mientras que mi proactividad me permite anticipar problemas y buscar soluciones innovadoras. Destaco por mi disciplina y organización, gestionando proyectos de manera eficiente y dentro de los plazos establecidos. Comprometido con la mejora continua, amplío constantemente mis conocimientos y habilidades en automatización industrial para ofrecer soluciones efectivas y de alta calidad.',
    tags: [{ name: 'Disponible para freelance' }, { name: 'Disponible para mentorías y/o capacitaciones' }, { name: 'Abierto a proyectos independientes' }],
    action: {
        label: 'Descargar CV',
        url: '/cv.pdf',
        downloadedFileName: 'cv.pdf',
    },
    links: [linkedin({ url: 'https://www.linkedin.com/in/luis-ramos-6b2081196' }), facebook({ url: 'https://www.facebook.com/profile.php?id=100066839790828' }), youtube({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;

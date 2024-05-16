import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
    allen_bradley,
    arduino,
    autonics,
    danfoss,
    delta,
    kuka,
    omron,
    schneider,
    siemens,
    solidworks,
    unitronics,
} from '../helpers/skills';

const skillsSectionData = {
    config: {
        title: 'Habilidades',
        slug: 'habilidades',
        icon: 'fa6-solid:bars-progress',
        visible: true,
    },
    skillSets: [
        {
            title: 'Tengo experiencia',
            skills: [
                unitronics,
                siemens,
                allen_bradley,
                delta,
                schneider,
                danfoss,
                autonics,
                omron
            ],
        },
        {
            title: 'Quiero aprender',
            skills: [kuka(), solidworks(), arduino()],
        },
        {
            title: 'Idiomas',
            skills: [
                { icon: 'circle-flags:es-variant', name: 'Español - nativo' },
                { icon: 'circle-flags:us', name: 'Inglés - Básico' },
            ],
        },
    ],
} as ReadonlyDeep<SkillsSection>;

export default skillsSectionData;

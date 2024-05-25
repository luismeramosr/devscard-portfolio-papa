import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'Favoritos',
    slug: 'favoritos',
    icon: 'fa6-solid:star',
    visible: true,
  },
  people: {
    title: 'Personas de quienes he aprendido',
    data: [
      {
        image: import('@/assets/favorites/people/man.png'),
        name: 'Ing. José Kawai Hasebe',
        url: '',
      },
      {
        image: import('@/assets/favorites/people/man.png'),
        name: 'Ing. Peter Schimitsheck',
        url: '',
      },
      {
        image: import('@/assets/favorites/people/w_lertora.png'),
        name: 'William Lertora',
        url: '',
      },
      {
        image: import('@/assets/favorites/people/a_banguero.jpg'),
        name: 'Andrés Felipe Hurtado Banguero',
        url: 'https://www.youtube.com/channel/UCUW5LnhKutcLWfRYD0dT0pA',
      },
    ],
  },
  medias: {
    title: 'Páginas que sigo',
    data: [
      {
        image: import('@/assets/favorites/media/infoplc.png'),
        title: 'infoPLC',
        type: 'Blog',
        url: 'https://www.infoplc.net/',
      },
      {
        image: import('@/assets/favorites/media/udemy.png'),
        title: 'Udemy',
        type: 'Cursos online',
        url: 'https://www.udemy.com/es/',
      },
      {
        image: import('@/assets/favorites/media/channel.jpg'),
        title: 'Automatización Industrial',
        type: 'Canal de YouTube',
        url: 'https://www.youtube.com/c/AUTOMATIZACI%C3%93NINDUSTRIAL',
      },
      {
        image: import('@/assets/favorites/media/blog.png'),
        title: 'Automatización Industrial',
        type: 'Blog',
        url: 'https://automatizacioncavanilles.blogspot.com',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;

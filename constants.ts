
import { AcademicPublication, Project, AppItem } from './types';

export const ACADEMIC_PUBLICATIONS: AcademicPublication[] = [
  {
    id: '2026a',
    authors: 'Trocado, A.',
    year: '2026',
    title: 'Learning Quadratic Functions with ChatGPT: An Innovative Experience in High School Mathematics Education',
    journalOrVenue: 'International Journal of Education in Mathematics, Science and Technology, 14(1), 296-314',
    doi: '10.46328/ijemst.5074',
    category: 'Journal'
  },
  {
    id: '2024a',
    authors: 'Breda, A., Trocado, A., & Dos Santos, J.',
    year: '2024',
    title: 'Topological Properties of the Intersection Curves Between a Torus and Families of Parabolic or Elliptical Cylinders',
    journalOrVenue: 'Axioms, 13(12), 852',
    doi: '10.3390/axioms13120852',
    category: 'Journal'
  },
  {
    id: '2024b',
    authors: 'Santos, J.M.D.S.D., Breda, A.M.R.D., Lavicza, Z., Correia, L.M., Trocado, A.E.B.d.S.',
    year: '2024',
    title: 'Casa da Música: A Lever for STEAM Projects',
    journalOrVenue: 'ICGG 2024 - Proceedings of the 21st International Conference on Geometry and Graphics. Springer, Cham',
    doi: '10.1007/978-3-031-71225-8_17',
    category: 'Conference'
  },
  {
    id: '2024c',
    authors: 'Breda, A., Trocado, A., & Dos Santos, J. M.',
    year: '2024',
    title: 'The Intersection Curve of an Hyperbolic Cylinder with a Torus Sharing the Same Center',
    journalOrVenue: 'International Electronic Journal of Geometry, 17(2), 336-347',
    doi: '10.36890/iejg.1318186',
    category: 'Journal'
  },
  {
    id: '2024d',
    authors: 'Trocado, Alexandre, et al.',
    year: '2024',
    title: 'Time Learning on Analog Clocks in an Automatic Feedback Context',
    journalOrVenue: 'The International Journal of Science, Mathematics and Technology Learning 32 (1): 29-52',
    doi: '10.18848/2327-7971/CGP/v32i01/29-52',
    category: 'Journal'
  },
  {
    id: '2022a',
    authors: 'Trocado, A., Dos Santos, J. M., Lavicza, Zsolt',
    year: '2022',
    title: 'Develop Computational Thinking in Portuguese Mathematics Curricula with Collatz Conjecture',
    journalOrVenue: 'ATCM 2022 - Proceedings of the 27th Asian Technology Conference in Mathematics',
    url: 'https://atcm.mathandtech.org/EP2022/regular/21972.pdf',
    category: 'Conference'
  },
  {
    id: '2021a',
    authors: 'Gonzalez-Vega, L. and Trocado, A.',
    year: '2021',
    title: 'Tools for analyzing the intersection curve between two quadrics through projection and lifting',
    journalOrVenue: 'Journal of Computational and Applied Mathematics (Web of Science Q1)',
    doi: '10.1016/j.cam.2021.113522',
    category: 'Journal'
  },
  {
    id: '2013-imat',
    authors: 'Costa, A.; Dos Santos, J.; Oliveira, A.; Sales, M.; Teixeira, H.; Trocado, A.',
    year: '2013-2014',
    title: 'iMat12 Collection - Mathematics A (High School)',
    journalOrVenue: 'School Manuals: Mathematics, Linear Programming, Limits, Sequences, Probabilities',
    category: 'Book'
  },
  {
    id: '2012-geogebra',
    authors: 'Dos Santos, J. Trocado, A.',
    year: '2013',
    title: 'GeoGebra 3D - MinhoMat2013 Course 1',
    journalOrVenue: 'EB 3/S Arcos de Valdevez School',
    url: 'http://www.geogebra.org.pt/ficheiros_on_line/pdf/geogebra3d-MinhoMat2013_pub.pdf',
    category: 'Course'
  }
];

export const PROJECTS: Project[] = [];

export const INTERACTIVE_APPS: AppItem[] = [
  {
    id: 'clocks-l1',
    title: 'Analog Clocks - Level 1',
    geogebraId: 'd4fqmf9q',
    width: 866,
    height: 576,
    description: 'Introductory level for learning time concepts on analog clocks.',
    category: 'Education'
  },
  {
    id: 'clocks-l2',
    title: 'Analog Clocks - Level 2',
    geogebraId: 'vpgugypf',
    width: 987,
    height: 673,
    description: 'Intermediate challenges for mastering analog time reading.',
    category: 'Education'
  },
  {
    id: 'clocks-l3',
    title: 'Analog Clocks - Level 3',
    geogebraId: 'mnsrfpfy',
    width: 1053,
    height: 761,
    description: 'Advanced feedback system for precise time learning.',
    category: 'Education'
  }
];

export const BIO = `
Alexandre Trocado is a Professor and Researcher in Mathematics and Computational Algebra.
His work focuses on developing interactive tools and STEAM education.
He is a co-author of the iMat12 school manuals and one of the driving forces behind GeoGebra in Portugal.
In addition to research, Alexandre is dedicated to Artistic Photography, seeking bridges between the rigor of Algebra and visual expressiveness.
`;

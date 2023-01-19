const BASE_URL = import.meta.env.PUBLIC_BASE_URL;

const name = 'Futurestate Design Co.'

export const SITE = {
  id: `${BASE_URL}#futurestate-design-co`,
  name,
  description: 'A business innovation company',
  url: BASE_URL,
  image: `${BASE_URL}/images/image.png`,
  logo: `${BASE_URL}/logo.svg`,
  email: 'info@futurestatedesign.co',
  themeColor: '#F5FF51',
  backgroundColor: '#000000',
  tel: '+442038658704',
  telephone: '+44 (0)203 865 8704',
  linkedin: 'https://www.linkedin.com/company/wilson-fletcher',
  instagram: 'https://www.instagram.com/_wilsonfletcher',
  medium: 'https://medium.com/thehumanlayer',
  twitter: 'https://twitter.com/wilsonfletcher',
  locale: 'en-GB',
  copyrightYear: 2023,
  address: {
    streetAddress: 'Unit 10 New North House',
    addressLocality: '202-208 New North Road',
    addressRegion: 'London',
    postalCode: 'N1 7BJ',
    addressCountry: 'United Kingdom'
  }
};

export type Site = Mapped<typeof SITE>;

type Mapped<T> = {
  [P in keyof T]?: any;
};

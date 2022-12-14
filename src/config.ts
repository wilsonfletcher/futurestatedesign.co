const BASE_URL = import.meta.env.PUBLIC_BASE_URL;

export const SITE = {
  name: 'Futurestate Design Co.',
  description: 'A business innovation company',
  url: 'https://futurestatedesign.co',
  email: 'info@futurestatedesign.co',
  themeColor: '#F5FF51',
  telephone: '+44 (0)203 865 8704',
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
  medium: 'https://medium.com',
  twitter: 'https://twitter.com',
  copyrightYear: new Date('YYYY'),
  address: {
    streetAddress: '202-208 New North Road',
    addressLocality: 'Unit 10 New North House',
    addressRegion: 'London',
    postalCode: 'N1 7BJ',
    addressCountry: 'United Kingdom'
  }
};

export type Site = Mapped<typeof SITE>;

type Mapped<T> = {
  [P in keyof T]?: any;
};

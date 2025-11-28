interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.abuqi.online',
  logo: 'https://avatars.githubusercontent.com/u/2778934?s=60&v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://abuqi.github.io/blog/',
    },
    {
      name: 'About',
      url: 'https://abuqi.github.io/runnint_page/',
    },
  ],
};

export default data;

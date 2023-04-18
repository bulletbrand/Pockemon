export const getUrlId = (url: string) => {
  const segments = url.split('/');
  return segments[segments.length - 2];
};

export const getFormattedPokyName = (name: string) => name[0].toUpperCase() + name.slice(1);

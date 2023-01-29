const defaultLocale = 'en-GB';

const defaultOptions: Intl.DateTimeFormatOptions =  {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
};

export const formatDate = (date: Date) =>
  date.toLocaleDateString(defaultLocale, defaultOptions);

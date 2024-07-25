export const formatPhoneNumber = (value: string) => {
  const cleaned = ('' + value).replace(/\D/g, '').slice(0, 9);
  const match = cleaned.match(/^(\d{1,2})(\d{0,3})(\d{0,2})(\d{0,2})?$/);

  if (match) {
    const part1 = match[1] || '';
    const part2 = match[2] || '';
    const part3 = match[3] || '';
    const part4 = match[4] || '';

    return `${part1} ${part2} ${part3} ${part4}`.trim();
  }

  return value;
};

export const formatCreditCardNumber = (value: string) => {
  const cleaned = ('' + value).replace(/\D/g, '');
  const match = cleaned.match(/(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/);

  if (match) {
    return [match[1], match[2], match[3], match[4]].filter(Boolean).join(' ');
  }

  return value;
};

export const formatDateForm = (value: string) => {
  const cleaned = ('' + value).replace(/\D/g, '');
  const match = cleaned.match(/(\d{1,2})(\d{0,2})?/);

  if (match) {
    let month = match[1];
    let year = match[2] || '';

    if (parseInt(month, 10) > 12) {
      month = '12';
    }

    if (year) {
      const parsedYear = parseInt(year, 10);

      if (parsedYear < 24) {
        year = '24';
      } else if (parsedYear > 34) {
        year = '34';
      }
    }

    return [month, year].filter(Boolean).join('/');
  }

  return value;
};

export const formatCVV = (value: string) => {
  const cleaned = ('' + value).replace(/\D/g, '');

  return cleaned.slice(0, 3);
};

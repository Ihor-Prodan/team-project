export const formatPhoneNumber = (value: string) => {
  const cleaned = ('' + value).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{2})(\d{2})$/);

  if (match) {
    return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
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
  const match = cleaned.match(/(\d{1,2})(\d{1,2})?/);

  if (match) {
    return [match[1], match[2]].filter(Boolean).join('/');
  }

  return value;
};

export const formatCVV = (value: string) => {
  const cleaned = ('' + value).replace(/\D/g, '');

  return cleaned.slice(0, 3);
};

import Joi from 'joi';

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
    const year = match[2] || '';

    if (parseInt(month, 10) > 12) {
      month = '12';
    }

    return [month, year].filter(Boolean).join('/');
  }

  return value;
};

export const formatCVV = (value: string) => {
  const cleaned = ('' + value).replace(/\D/g, '');

  return cleaned.slice(0, 3);
};

export const schemaCard = Joi.object({
  phoneNumber: Joi.string().length(12).messages({
    'string.empty': 'Phone number cannot be empty',
    'string.length': 'Phone number must be exactly 12 digits long',
  }),
  cardNumber: Joi.string().length(19).messages({
    'string.empty': 'Card number cannot be empty',
    'string.length': 'Card number must be exactly 16 digits long',
  }),
  date: Joi.string().length(5).messages({
    'string.empty': 'Expiration date cannot be empty',
    'string.length': 'Expiration date must be exactly 4 digits long (MM/YY)',
  }),
  cvv: Joi.string().length(3).messages({
    'string.empty': 'CVV cannot be empty',
    'string.length': 'CVV must be exactly 3 digits long',
  }),
  userId: Joi.number(),
});

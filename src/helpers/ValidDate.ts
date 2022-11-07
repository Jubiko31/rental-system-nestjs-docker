export const getDate = () => {
  const currentDate = new Date();
  return currentDate.toISOString().split('T')[0];
};

export const dateDiff = (startDate: string, endDate: string) => {
  const currentDate = getDate();
  if (startDate === currentDate) return 'Start date cannot be current day.';
  if (startDate >= endDate) return 'Invalid date range.';

  return (Date.parse(endDate) - Date.parse(startDate)) / (1000 * 60 * 60 * 24);
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-CA");
};

export const formatDisplayDate = (date: string):string => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

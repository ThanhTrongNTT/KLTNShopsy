export const formatDate = (date: string) => {
  const [day, month, year] = date.split(" ")[0].split("/");
  const dateObj = new Date(`${year}-${month}-${day}`);

  const formattedDate = dateObj.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
  });
  return formattedDate;
};
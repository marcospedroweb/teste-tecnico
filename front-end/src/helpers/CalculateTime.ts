export const calculateTimeDifference = (startTime) => {
  const startDate = new Date(startTime);
  const currentDate = new Date();

  const diffInMilliseconds = currentDate.getTime() - startDate.getTime();

  const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;

  let timeString = '';
  if (hours > 0) {
    timeString += `${hours}h `;
  }
  if (minutes > 0 || hours === 0) {
    timeString += `${minutes}min`;
  }

  return timeString;
};

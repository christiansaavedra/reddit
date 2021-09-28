export const getHourDifferenceBetweenDates = (dateInUnix: number) => {
  const getUnixInMilliseconds = dateInUnix * 1000;
  const getDateFromUnix: any = new Date(getUnixInMilliseconds);
  const dateNow: any = new Date(Date.now());
  const dateDifference: number = Math.abs(
    dateNow.getHours() - getDateFromUnix.getHours()
  );

  return dateDifference;
};

export const replaceCharacterInString = (
  string: string,
  currentValue: string,
  newValue: string
) => {
  return string.replace(currentValue, newValue);
};

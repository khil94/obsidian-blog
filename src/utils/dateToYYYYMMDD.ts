export function dateToYYYYMMDD(date: string) {
  const newDate = new Date(date);

  return `${newDate.getFullYear()}년 ${makeZeroNumber(
    newDate.getMonth()
  )}월 ${makeZeroNumber(newDate.getDate())}일`;
}

export function makeZeroNumber(target: number) {
  return `${target > 10 ? target : "0" + target}`;
}

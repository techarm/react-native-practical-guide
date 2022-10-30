export function getFormattedDate(date) {
  // var y = date.getFullYear();
  // var m = ("00" + (date.getMonth() + 1)).slice(-2);
  // var d = ("00" + date.getDate()).slice(-2);
  // return y + "-" + m + "-" + d;
  return date.toISOString().slice(0, 10);
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

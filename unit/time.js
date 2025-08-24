// ✅ Properly formats date using local timezone instead of UTC
export function getFormattedDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // ✅ +1 because months are 0-based
  const year = date.getFullYear();
  return `${year}-${month}-${day}`; // yyyy-mm-dd
}

// ✅ Properly calculates a date N days before today
export function calculateDay(currentDay, days) {
  const newDate = new Date(currentDay); // ✅ create a copy to avoid mutating original
  newDate.setDate(currentDay.getDate() - days); // ✅ automatically handles month changes
  return newDate;
}

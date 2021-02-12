export default function caloriesMen(birthYear, weight, height, activityIndex) {
  // BMR = 66.5 + ( 13.75 x vekt i kg ) + ( 5.003 x høyde i cm ) – ( 6.755 x alder i år )
  return (65.5 + (13.75 * weight)+(5.003 * height)-(6.755 * (Date.getYear()-birthYear))) * activityIndex;
}

export default function caloriesWomen(age, weight, height, activityIndex) {
  calories = (655.1 + (9.563 * weight)+(1.850 * height)-(4.676 * age)) * activityIndex
  // BMR = 655.1 + ( 9.563 x vekt i kg) + ( 1.850* x høyde i cm ) – ( 4.676 x alder i år )
  return calories;
}

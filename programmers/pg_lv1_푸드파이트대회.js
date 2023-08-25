function solution(food) {
  let halfFood = "";

  for (i = 1; i < food.length; i++) {
    halfFood += (i + "").repeat(Math.floor(food[i] / 2));
  }

  return halfFood + "0" + halfFood.split("").reverse().join("");
}

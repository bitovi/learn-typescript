export function bonusMaker(multiplier: number, ...names: string[]) {
  let total = 0;
    for(var i = 0; i < names.length; i++) {
      total = total + names[i].length;
  }
  return multiplier*total;
}

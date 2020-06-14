function toNumberArray(values) {
  if (Array.isArray(values)) {
    return values.map(Number);
  }
  return values.split(',')
      .filter(value => value)
      .map(Number);
}

console.log(toNumberArray('0,2'));
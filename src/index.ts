interface NumbersResponse {
  avg: number;
  sum: number;
  max: number;
  min: number;
}

export const numbersInformation = (numbers: number[]): NumbersResponse | null => {
  if(numbers.length === 0) {
    return null;
  }
  return {
    avg: numbers.reduce((a,b) => a+b) / numbers.length,
    sum: numbers.reduce((a,b) => a+b),
    max: Math.max(...numbers),
    min: Math.min(...numbers)
  }
};

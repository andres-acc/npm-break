interface NumbersResponse {
    avg: number;
    sum: number;
    max: number;
    min: number;
}
export declare const numbersInformation: (numbers: number[]) => NumbersResponse | null;
export {};

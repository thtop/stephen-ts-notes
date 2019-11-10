export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rigthtIndex: number): boolean {
    return this.data[leftIndex] > this.data[rigthtIndex];
  }

  swap(leftIndex: number, rigthtIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rigthtIndex];
    this.data[rigthtIndex] = leftHand;
  }
}

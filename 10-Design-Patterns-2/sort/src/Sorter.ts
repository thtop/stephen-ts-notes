interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public conllection: Sortable) {}

  sort(): void {
    const { length } = this.conllection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.conllection.compare(j, j + 1)) {
          this.conllection.swap(j, j + 1);
        }
      }
    }
  }
}

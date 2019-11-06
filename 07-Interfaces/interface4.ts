// Name & Types
interface Reportable {
  summary(): string;
}

// Model
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

// Logic
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

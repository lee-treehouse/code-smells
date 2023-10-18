export interface IOperator {
  execute(oldValue: number, newValue: number): number;
  describeOperation(oldValue: number, newValue: number): string;
  getName(): string;
}

export abstract class Operator implements IOperator {
  abstract execute(oldValue: number, newValue: number): number;
  abstract doVerbs(): string;

  describeOperation(oldValue: number, newValue: number): string {
    return `${oldValue} ${this.doVerbs()} ${newValue}`;
  }

  getName(): string {
    return this.constructor.name;
  }
}

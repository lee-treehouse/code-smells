import { Operator } from "./operator";

export class Divide extends Operator {
  execute(oldValue: number, newValue: number): number {
    if (newValue === 0) {
      throw new Error("cannot divide by zero");
    }
    return oldValue / newValue;
  }
  doVerbs(): string {
    return "divided by";
  }
}

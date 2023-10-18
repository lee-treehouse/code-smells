import { Operator } from "./operator";

export class Multiply extends Operator {
  execute(oldValue: number, newValue: number): number {
    return oldValue * newValue;
  }
  doVerbs(): string {
    return "multiplied by";
  }
}

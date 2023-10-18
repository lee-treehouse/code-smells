import { Operator } from "./operator";

export class Subtract extends Operator {
  execute(oldValue: number, newValue: number): number {
    return oldValue - newValue;
  }
  doVerbs(): string {
    return "minus";
  }
}

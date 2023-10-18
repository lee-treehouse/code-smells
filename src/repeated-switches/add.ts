import { Operator } from "./operator";

export class Add extends Operator {
  execute(oldValue: number, newValue: number): number {
    return oldValue + newValue;
  }
  doVerbs(): string {
    return "plus";
  }
}

import { Add } from "./add";
import { Divide } from "./divide";
import { Multiply } from "./multiply";
import { Subtract } from "./subtract";

export const getOperator = (operatorName: string) => {
  switch (operatorName) {
    case "add":
      return new Add();
    case "subtract":
      return new Subtract();
    case "multiply":
      return new Multiply();
    case "divide":
      return new Divide();
    default:
      throw new Error("Unsupported operation");
  }
};

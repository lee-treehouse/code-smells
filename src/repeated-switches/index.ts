import { IOperator } from "./operator";
import { getOperator } from "./operatorFactory";

export class Calculator {
  private _operations: { operation: string; oldValue: number; value: number }[] = [];
  private _currentValue: number;

  constructor(initialValue: number) {
    this._currentValue = initialValue;
  }

  outputCurrentValue() {
    console.log(`current value is: ${this._currentValue}`);
  }

  execute(operation: string, newValue: number) {
    this._operations.push({ operation, oldValue: this._currentValue, value: newValue });

    const operator: IOperator = getOperator(operation);
    this._currentValue = operator.execute(this._currentValue, newValue);
    return this;
  }

  printOperations() {
    for (const operationObj of this._operations) {
      const operator: IOperator = getOperator(operationObj.operation);
      console.log(operator.describeOperation(operationObj.oldValue, operationObj.value));
    }
    console.log("-----------");
    console.log(`Total: ${this._currentValue}`);
  }
}

const calculator = new Calculator(0);

calculator
  .execute("add", 10)
  .execute("add", 20)
  .execute("subtract", 15)
  .execute("multiply", 3)
  .execute("divide", 2)
  .printOperations();

export {};

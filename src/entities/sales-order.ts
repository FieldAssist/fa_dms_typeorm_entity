export class SalesOrder {
  module: string;
  name: string;

  constructor(module: string, name: string) {
    this.module = module;
    this.name = name;
  }

  public getHelloFromSalesOrderInstance(): string {
    return "Hello from SalesOrder instance!";
  }
}

export class SalesInvoice {
  module: string;
  name: string;

  constructor(module: string, name: string) {
    this.module = module;
    this.name = name;
  }

  public getHelloFromSalesInvoiceInstance(): string {
    return "Hello from SalesInvoice instance!";
  }
}

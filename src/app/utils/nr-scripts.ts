export class NrScripts {
  private constructor() { }

  public static sleep(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  public static nullifyFalsey(val: any): any {
    val = (!val) ? null : val;
    return val;
  }

}


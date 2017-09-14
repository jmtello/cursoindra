export class User {
  firstName: string;
  secondName: string;

  public getFullName():string{
      return this.firstName +"-"+ this.secondName  
  }

}
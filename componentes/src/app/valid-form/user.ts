export class User {
  firstName: string;
  secondName: string;

  constructor(firstName: string, secondName: string){
    this.firstName = firstName;
    this.secondName = secondName;
  }

  public getFullName():string{
      return this.firstName +"-"+ this.secondName  
  }

}
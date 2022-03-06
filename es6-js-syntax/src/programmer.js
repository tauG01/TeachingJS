import { Human } from './human';

//Child class | Inherits from class Human
export class Programmer extends Human {
    constructor(name, degree){
      super(name);
      this.degree = degree;
    }
  
    code() {
      console.log('code');
    }
  }

  
  
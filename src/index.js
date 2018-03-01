class SmartCalculator {
  constructor(initialValue) {
    this.stack1 = [initialValue];
    this.stack2 = [];
    SmartCalculator.prototype.valueOf = function() {
      return this.result();
    }
    SmartCalculator.prototype.toString = function() {
      return this.result();
    }
    SmartCalculator.prototype.result = function() {
      var t2 = this.stack2.length;
      for(let i = 0; i < t2; i++) {
        this.stack1.push(this.stack2.pop());
        t2--;
      }
      // var t = this.stack1.length;
      // for(let i = 0; i < t;) {
      //     switch(this.stack1[i]) {
      //       case '+': 
      //         this.stack1[i-2] = this.stack1[i-2] + this.stack1[i-1];
      //         this.stack1.splice(this.stack1[i-1],2);
      //         t -= 2;
      //         i -= 1;
      //         break;
      //       case '-': 
      //         this.stack1[i-2] = this.stack1[i-2] - this.stack1[i-1];
      //         this.stack1.splice(this.stack1[i-1],2);
      //         t -= 2;
      //         i -= 1;
      //         break;
      //       case '*': 
      //         this.stack1[i-2] = this.stack1[i-2] * this.stack1[i-1];
      //         this.stack1.splice(this.stack1[i-1],2);
      //         t -= 2;
      //         i -= 1;
      //         break;
      //       case '^': 
      //         this.stack1[i-2] = Math.pow(this.stack1[i-2], this.stack1[i-1]);
      //         this.stack1.splice(this.stack1[i-1],2);
      //         t -= 2;
      //         i -= 1;
      //         break;
      //       default:
      //         i += 1;
      //         break;
      //     }
      // }
      console.log(this.stack1);
    }
  }

  // result() {
  //   for(let i = 0; i < this.stack2.length; i++) {
  //     this.stack1.push(this.stack2.pop());
  //   }
  //   for(let i = 0; i < this.stack1.length; i++) {
  //     if (this.stack1[i] === '-' || this.stack1[i] === '+' || this.stack1[i] === '*' || this.stack1[i] === '/' || this.stack1[i] === '^') {
  //       switch(this.stack1[i]) {
  //         case '+': 
  //           this.stack1[i-2] = this.stack1[i-2] + this.stack1[i-1];
  //           this.stack1.splice(this.stack1[i-1],2);
  //           i -= 2;
  //           break;
  //         case '-': 
  //           this.stack1[i-2] = this.stack1[i-2] - this.stack1[i-1];
  //           this.stack1.splice(this.stack1[i-1],2);
  //           i -= 2;
  //           break;
  //         case '*': 
  //           this.stack1[i-2] = this.stack1[i-2] * this.stack1[i-1];
  //           this.stack1.splice(this.stack1[i-1],2);
  //           i -= 2;
  //           break;
  //         case '^': 
  //           this.stack1[i-2] = Math.pow(this.stack1[i-2], this.stack1[i-1]);
  //           this.stack1.splice(this.stack1[i-1],2);
  //           i -= 2;
  //           break;
  //         default: 
  //           break;
  //       }
  //     }
  //   }
  //   console.log(this.stack1);
  //   return this
  // }

  add(number) {
    
    this.stack1.push(number);
    this.stack2.push('+');
    return this;
  }
  
  subtract(number) {
    // for(let i = 0; i < stack2.length; i++) {
    //   this.stack1.push(stack2.pop());
    // }
    this.stack1.push(-number);
    this.stack2.push('+');
    return this;
  }

  multiply(number) {
    this.stack1.push(number);
    this.stack1.push('*');
    return this;
  }

  devide(number) {
    this.stack1.push(number);
    this.stack1.push('/');
    return this;
  }

  pow(number) {
    if (this.stack1[this.stack1.length-1] === '^') {
      this.stack2.push(this.stack1.pop());
    }

    if (this.stack1[this.stack1.length-1] === '*' || this.stack1[this.stack1.length-1] === '/') {
      this.stack2.push(this.stack1.pop());
      this.stack1.push(number);
      this.stack1.push('^');
      this.stack1.push(this.stack2.pop());
    }
    else {
      this.stack1.push(number);
      this.stack1.push('^');
    }
      
    if (this.stack2[this.stack2.length-1] === '^') {
      this.stack1.push(this.stack2.pop());
    }
     
    return this;
  }
}

module.exports = SmartCalculator;

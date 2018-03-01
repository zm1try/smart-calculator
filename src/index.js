class SmartCalculator {
  constructor(initialValue) {
    this.stack1 = [initialValue];
    this.stack2 = [];
    SmartCalculator.prototype.valueOf = function() {
      return this.result();
    }
    // SmartCalculator.prototype.toString = function() {
    //   return this.result();
    // }
    SmartCalculator.prototype.result = function() {
      console.log(this.stack1);
      console.log(this.stack2);
      let t2 = this.stack2.length;
      while (t2 > 0) {
        this.stack1.push(this.stack2.pop());
        t2--;
      }
      let t = this.stack1.length;
      for(let i = 0; i < t; i++) {
          switch(this.stack1[i]) {
            case '+': { 
              //console.log(this.stack1);
              this.stack1[i-2] = this.stack1[i-2] + this.stack1[i-1];
              this.stack1.splice(i-1,2);
              t -= 2;
              i -= 2; 
              //console.log(this.stack1);
              break; 
            }
            case '-': { 
              //console.log(this.stack1);
              this.stack1[i-2] = this.stack1[i-2] - this.stack1[i-1];
              this.stack1.splice(i-1,2);
              t -= 2;
              i -= 2; 
              //console.log(this.stack1);
              break; 
            }
            case '*': {
              //console.log(this.stack1);
              if (this.stack1[i-2] < 0 && this.stack1[i-1] < 0) 
                this.stack1[i-2] = - this.stack1[i-2] * this.stack1[i-1];
              else
                this.stack1[i-2] = this.stack1[i-2] * this.stack1[i-1];
              this.stack1.splice(i-1,2);
              t -= 2;
              i -= 2; 
              //console.log(this.stack1);
              break; }
            case '/': {
              //console.log(this.stack1);
              if (this.stack1[i-2] < 0 && this.stack1[i-1] < 0) 
                this.stack1[i-2] = - this.stack1[i-2] / this.stack1[i-1];
              else
                this.stack1[i-2] = this.stack1[i-2] / this.stack1[i-1];
              this.stack1.splice(i-1,2);
              t -= 2;
              i -= 2;
              //console.log(this.stack1);
              break; }
            case '^': {
              //console.log(this.stack1);
              // while (this.stack1[i+2] < t && this.stack1[i+2] === '^') {
              //   i += 2;
              // }
               if(this.stack1[i] === '^') {
                if (this.stack1[i-2] < 0 && this.stack1[i-1] % 2 === 0) 
                  this.stack1[i-2] = - Math.pow(this.stack1[i-2], this.stack1[i-1]);
                else
                  this.stack1[i-2] = Math.pow(this.stack1[i-2], this.stack1[i-1]);
                this.stack1.splice(i-1,2);
                t -= 2;
                i -= 2;
              }
              break;
            }
            default:
              break;
          }
      }
      return this.stack1[0];
    }
  }

  add(number) {
    this.stack1.push(number);
    this.stack2.push('+');
    console.log(this.stack1);
    console.log(this.stack2);
    return this;
  }
  
  subtract(number) {
    this.stack1.push(-number);
    this.stack2.push('+');
    console.log(this.stack1);
    console.log(this.stack2);
    return this;
  }

  multiply(number) {
    this.stack1.push(number);
    this.stack1.push('*');
    console.log(this.stack1);
    console.log(this.stack2);
    return this;
  }

  devide(number) {
    this.stack1.push(number);
    this.stack1.push('/');
    console.log(this.stack1);
    console.log(this.stack2);
    return this;
  }

  pow(number) {
    while (this.stack1[this.stack1.length-1] == '^') {
      this.stack2.push(this.stack1.pop());
    }

    if (this.stack1[this.stack1.length-1] == '*' || this.stack1[this.stack1.length-1] == '/') {
      this.stack2.push(this.stack1.pop());
      this.stack1.push(number);
      this.stack1.push('^');
      while (this.stack2[this.stack2.length-1] == '^') {
        this.stack1.push(this.stack2.pop());
      }
      this.stack1.push(this.stack2.pop());
    }
    else {
      this.stack1.push(number);
      this.stack1.push('^');
      while (this.stack2[this.stack2.length-1] == '^') {
        this.stack1.push(this.stack2.pop());
      }
    }
      
    // while (this.stack2[this.stack2.length-1] === '^') {
    //   this.stack1.push(this.stack2.pop());
    // }
     
    console.log(this.stack1);
    console.log(this.stack2);
    return this;
  }
}

module.exports = SmartCalculator;

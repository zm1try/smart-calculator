class SmartCalculator {
  constructor(initialValue) {
    this.stack1 = [initialValue];
    this.stack2 = [];
    SmartCalculator.prototype.valueOf = function() {
      return this.result();
    }
    SmartCalculator.prototype.result = function() {
      let l2 = this.stack2.length;
      while (l2 > 0) {
        this.stack1.push(this.stack2.pop());
        l2--;
      }
      let l1 = this.stack1.length;
      for(let i = 0; i < l1; i++) {
          switch(this.stack1[i]) {
            case '+': { 
              this.stack1[i-2] = this.stack1[i-2] + this.stack1[i-1];
              this.stack1.splice(i-1,2);
              l1 -= 2;
              i -= 2; 
              break; 
            }
            case '-': { 
              this.stack1[i-2] = this.stack1[i-2] - this.stack1[i-1];
              this.stack1.splice(i-1,2);
              l1 -= 2;
              i -= 2; 
              break; 
            }
            case '*': {
              if (this.stack1[i-2] < 0 && this.stack1[i-1] < 0) 
                this.stack1[i-2] = - this.stack1[i-2] * this.stack1[i-1];
              else
                this.stack1[i-2] = this.stack1[i-2] * this.stack1[i-1];
              this.stack1.splice(i-1,2);
              l1 -= 2;
              i -= 2; 
              break; }
            case '/': {
              if (this.stack1[i-2] < 0 && this.stack1[i-1] < 0) 
                this.stack1[i-2] = - this.stack1[i-2] / this.stack1[i-1];
              else
                this.stack1[i-2] = this.stack1[i-2] / this.stack1[i-1];
              this.stack1.splice(i-1,2);
              l1 -= 2;
              i -= 2;
              break; }
            case '^': {
              if (this.stack1[i-2] < 0 && this.stack1[i-1] % 2 === 0) 
                this.stack1[i-2] = - Math.pow(this.stack1[i-2], this.stack1[i-1]);
              else
                this.stack1[i-2] = Math.pow(this.stack1[i-2], this.stack1[i-1]);
              this.stack1.splice(i-1,2);
              l1 -= 2;
              i -= 2;
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
    return this;
  }
  
  subtract(number) {
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

    while (this.stack1[this.stack1.length-1] == '^' || this.stack1[this.stack1.length-1] == '*' || this.stack1[this.stack1.length-1] == '/') {
      this.stack2.push(this.stack1.pop());
    }
      this.stack1.push(number);
      this.stack1.push('^');
    while (this.stack2[this.stack2.length-1] == '^' || this.stack2[this.stack2.length-1] == '*' || this.stack2[this.stack2.length-1] == '/') {
      this.stack1.push(this.stack2.pop());
    }
    return this;
  }
}

module.exports = SmartCalculator;

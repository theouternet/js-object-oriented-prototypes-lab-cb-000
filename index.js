// function BoardMember(name, homeState, training){
//   this.name = name
//   this.homeState = homeState
//   this.training = training
//
//   this.veto = function(){
//     return 'No, I must disagree'
//   }
//   this.approve = function(){
//     return 'You can do that!'
//   }
//   this.doCharity = function(){
//     return "I like to help people."
//   }
//
//   this.releasePressStatement = function(){
//     return "You will see great things from Scuber."
//   }
//
//   this.sayHi = function(){
//     return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
//   }
// }

    function User(name, email) {
        this.name = name;
        this.email = email;
    }
     
    User.prototype.sayHello = function() {
        console.log(`Hello everybody, my name is ${this.name}`);
    };
     
    let sarah = new User('sarah', 'sarah@gmail.com');
function Person(fullName, money, SleepMood, healthRate) {
  return{
  
    fullName,
    money,
    SleepMood,
    healthRate,
    sleep (hours) { 
        if(hours==7){
            msg="Happy";
        }else if(hours<7 ){
            msg="Tired";
        }else if(hours>7){
            msg="Lazy"
       }
       this.SleepMood= msg;
    },
    eat(meals) { 
        if(meals==3){
            msg=100;
        }else if(meals==2){
            msg=75;
        }else if(meals==1){
            msg=50;
        }
        this.healthRate=msg
     },
    buy (items) { 
        result = this.money - items*10;
        this.money= result;
       }
   
  }  
}

const mahmoud = Person('Mahmoud Mohamed Ibrahim', 20000);
console.log(mahmoud);
mahmoud.sleep(8);
mahmoud.eat(3);
mahmoud.buy(300);
console.log(mahmoud);


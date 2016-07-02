var totalCost;
function sandwich(meats,cheese,vegi,bread,cost){
this.meats=meats;
this.cheese=cheese;
this.vegi=vegi;
this.bread=bread;
this.sandwichPrice=sandwichPrice;
}
sandwich.prototype.totalcost=function(){
  return this.cost*this.meats;
}

sandwich.prototype.sandwichAmount=function(){
  if(this.meats.length<1){
      return+5;
  }

}
var pastrami=new sandwich("pastrami","swiss","no","italian",15);
var roastbeef=new sandwich("roastbeef","chadder","no","italaian",15);
var cornbeef=new sandwich("cornbeef","american","no","italaian",30);

function aditionalPrices(option){
  if (option==="1"){
    totalPrice=totalPrice+5;
  }else if (option==="2"){
    totalPrice=totalPrice+5;
  }else if (option==="3"){
    totalPrice+=5;
  }else{
    totalPrice+=10

}

  }

  $(document).ready(function() {
  $("form#user-form").submit(function(event){
  event.preventDefault();

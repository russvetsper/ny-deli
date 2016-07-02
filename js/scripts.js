var totalCost;
function sandwich(meats,cheese,vegi,bread,sandwichPrice){
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
var pastrami=new sandwich("pastrami",15,20,30);
var roastbeef=new sandwich("roastbeef"15,20,30);
var cornbeef=new sandwich("cornbeef",15,20,30);



  }

  $(document).ready(function() {
  $("form#user-form").submit(function(event){
  event.preventDefault();

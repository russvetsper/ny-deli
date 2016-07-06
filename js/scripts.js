var totalCost;
function sandwich(meats,cheese,vegetables,bread,sandwichPrice){
this.meats=meats;
this.cheese=cheese;
this.vegi=vegetables;
this.bread=bread;
this.sandwichPrice=sandwichPrice;
}
sandwich.prototype.totalcost=function(){
  return this.sandwichPrice * this.meats;
}

sandwich.prototype.sandwichPrice=function(){
  if(this.meats.length>1){
      return+5;
  }

}


function aditionalPrices(option){
  if (option==="1"){
    totalPrice=totalPrice+5;
  }else if (option==="2"){
    totalPrice=totalPrice+5;
  }else if (option==="3"){
    totalPrice+=5;
  }else{
    totalPrice+=10;

}

  }

  $(document).ready(function() {
  $("form#user-form").submit(function(event) {
   event.preventDefault();

   var breadType= $("#breadType").val();
   var meatChoice= $("#meatChoice").val();
   var cheeseChoice= $("#cheeseChoice").val();
   var vegetables= $("#vegetables").val();


   var sandwichInput = new sandwich(meatChoice, cheeseChoice, vegetables, breadType,sandwichPrice);
 console.log(sandwichInput)



  });
});

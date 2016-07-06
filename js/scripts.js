var totalCost;
function Sandwich(meats,cheese,vegetables,bread,sandwichAmount){
this.meats=meats;
this.cheese=cheese;
this.vegetables=vegetables;
this.bread=bread;
this.sandwichAmount=sandwichAmount;
this.sandwichPrice=0;
}
Sandwich.prototype.totalcost=function(){
  this.sandwichPrice += this.meats+this.cheese +this.bread+this.vegetables ;
  this.sandwichPrice*=this.sandwichAmount;

}


  $(document).ready(function() {
  $("form#user-form").submit(function(event) {
   event.preventDefault();

   var breadType= parseInt($("#breadType").val());

   var meatChoice=parseInt( $("#meatChoice").val());

   var cheeseChoice= parseInt( $("#cheeseChoice").val());

   var vegetables= parseInt( $("#vegetablesChoice").val());

   var sandwichAmount= parseInt($("#sandwichAmount").val());


   var sandwichInput = new Sandwich(meatChoice, cheeseChoice, vegetables, breadType,sandwichAmount);

  sandwichInput.totalcost();

  $("#output").text("TOTAL $"+sandwichInput.sandwichPrice)


  });
});

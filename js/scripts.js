var totalCost;
function Sandwich(meats,cheese,vegetables,bread,sandwichPrice){
this.meats=meats;
this.cheese=cheese;
this.vegetables=vegetables;
this.bread=bread;
this.sandwichPrice=0;
}
Sandwich.prototype.totalcost=function(){
  this.sandwichPrice += this.meats+this.cheese +this.bread+this.vegetables ;

}


  $(document).ready(function() {
  $("form#user-form").submit(function(event) {
   event.preventDefault();

   var breadType= parseInt($("#breadType").val());

   var meatChoice=parseInt( $("#meatChoice").val());

   var cheeseChoice= parseInt( $("#cheeseChoice").val());

   var vegetables= parseInt( $("#vegetablesChoice").val());


   var sandwichInput = new Sandwich(meatChoice, cheeseChoice, vegetables, breadType);

  sandwichInput.totalcost();

  $("#output").text(sandwichInput.sandwichPrice)

  });
});

function Sandwich(sandwichname,cost,bread,meats,cheese){
this.sandwichname=sandwichname;
this.cost=cost;
this.serving=bread;
this.meats=meats;
this.cheese=cheese;
}
var pastramiSandwich=new sandwich (20,30);
var cornbeefSandwich=new sanwich (25,35);
var turkeySandwich=new sanwich (15,20);
var roastbeefSandwich=new sandwich (17,22);

function sandwichAdditonalPrice(option){
  if(option==="1"){
    totalCost=totalCost+10;
  }else if(option==="2"){
    totalCost=totalCost+100;
  }else if(option==="3"){
    totalCost+=200;
  }else{
    totalCost+=3;
  }

  $(document).ready(function() {
  $("form#user-form").submit(function(event){
  event.preventDefault();

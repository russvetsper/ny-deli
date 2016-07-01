var totalCost;
function sandwich(meats,cheese,vegi,bread,sandwichPrice){
this.title=meats;
this.cheese=cheese;
this.vegi=vegi;
this.bread=bread;
this.sandwichPrice=sandwichPrice;

}
var pastrami=new sandwich("pastrami",15,20,30);
var roastbeef=new sandwich("roastbeef"15,20,30);
var cornbeef=new sandwich("cornbeef",15,20,30);


function sandwichAdditonalPrice(option){
  if(option==="1"){
    totalCost=totalCost+10;
  }else if(option==="2"){
    totalCost=totalCost+10;
  }else if(option==="3"){
    totalCost+=10;
  }else{
    totalCost+=5;
  }

  $(document).ready(function() {
  $("form#user-form").submit(function(event){
  event.preventDefault();

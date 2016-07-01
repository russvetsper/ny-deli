var totalCost;
function Movie(meats,cheese,vegi,bread,sandwichPrice){
this.title=meats;
this.cheese=cheese;
this.vegi=vegi;
this.bread=bread;
this.sandwichPrice=sandwichPrice;

}
var pastrami=new sandwich("pastrami",15,10);
var roastbeef=new sandwich("roastbeef",20,3);
var cornbeef=new sandwich("cornbeef",,20,2);

//Moring ticket $10 more, afternoon ticket $15, evening ticket$20,night $0
function sandwichAdditonalPrice(option){
  if(option==="1"){
    totalCost=totalCost+10;
  }else if(option==="2"){
    totalCost=totalCost+100;//totalCost+=100
  }else if(option==="3"){
    totalCost+=200;
  }else{
    totalCost+=3;
  }

}

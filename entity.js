var express=require("express");
var app=express();
var entitydetails= function(req,res)
{
	//Entity list is refferd as product list
	//Consider Consto is mutilnational company who supplies wooden products but in this
	// Customer is the one of entites
	var customerlist = 
	[
	  {customerid:1,customername:"A.K.Sinha",customertype:"New",payment_mode:"cheque"},
	  {cusotmerid:2,customername:"B.K.Mishra",customertype:"registered",payment_mode:"cheque"},
	  {customerid:3,customername:"L.M.Kale",customertype:"New",payment_mode:"cheque"},
	  {cusotmerid:4,customernam:"R.K.Kumar",customertype:"registered",payment_mode:"NetBanking"},
	];
	res.send(customerlist);
}
app.get("/customerlist",entitydetails);

var server = app.listen(8085, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("This is dispaly the list of one of the entities", host, port)
})


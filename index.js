const log = console.log;

var obj = require("readline-sync")
var chalkobj = require("chalk")

var user = obj.question("what is your name ")
log("Welcome "+chalkobj.red(user));

var age = obj.question("How many levels of stars do you want ")


function star(age) {

  //increamenting
for(i=0;i<age;i++){
  g = ""
  for(j=0;j<=i;j++)
  g=g+'* ';
  log(g)
}
//decreamenting
for(i=age;i>0;i--){
  h =""
  for(j=i;j>0;j--)
  h=h+'* '
  log(h)

}
}

star(age)

var photo=["el.jpeg","mike.jpeg","will.jpeg","dustin.jpeg","lucas.jpeg","max.jpeg","steve.jpeg","erica.jpeg","robin.jpeg","joyece.jpeg","hop.jpeg"];
var characters=["Eleven","Mike","Will","Dustin","Lucas","Max","Steve","Erica","Robin","Mrs Byers","Hopper"];
var i=0;
function change(){
  document.getElementById("image").src=
    photo[i];
    document.getElementById("character").innerHTML=characters[i];
i++;
if(i == 12)
  {
    i=0;
  }
}
var elem=document.getElementById('draw-shapes');
var params = {width:285,height:200};
var two = new Two(params).appendTo(elem);
var circle =two.makeCircle(72,100,50);
circle.fill='#FF8000';
circle.stroke='orangered';
circle.lineWidth=5;
two.update();

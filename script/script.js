document.getElementById('change-color').addEventListener('click',function(){
   const button=document.getElementById('change-color');
   let r=Math.floor(Math.random()*256);
   let g=Math.floor(Math.random()*256);
   let b=Math.floor(Math.random()*256);
   let getRendomcolor="rgb(" +r+ "," +g+ "," +b+")"
   
  document.body.style.background=getRendomcolor;
});

document.getElementById('change-page')



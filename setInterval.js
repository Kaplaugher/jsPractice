<!DOCTYPE html>
<html>
 <head>
   <meta charset="utf-8">
   <title>test</title>
 </head>
 <style media="screen">
   body:{
     padding: 1em;
   }
   .instructions:{
     text-align: center;
     background: rgba(255, 0, 0, 0.5);
     padding: 1em;
   }

   .important{
     color : #1777a7 ;
     font-style: italic;
   }

   #box{
     border: 1px solid;
     padding: 1em;
   }

 </style>
 <body>

     <div class="instructions">
     <p class="important">
     Before starting, please fork this fiddle to get a new URL.
     </p>
     <p>
     Once you're finished, send your new URL back to us to share your solution.
     </p>
     </div>
     <p>
     Using <em>only vanilla JavaScript</em>, please print the numbers 1 - 10 at one-second intervals in the box below when <button onclick="getSeconds()">this button</button> is clicked.
     </p>
     <div id="box"></div>


 <script type="text/javascript">
 function getSeconds(){
   seconds = 1;
     var inter = setInterval (function printSeconds() {
       document.getElementById('box').innerHTML = seconds;
       seconds++;
       if(seconds > 10){
         clearInterval(inter);
       }
     },1000)
 }

 </script>
 </body>
</html>

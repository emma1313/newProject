document.addEventListener('DOMContentLoaded', function(){ 
    var lis = Array.prototype.slice.call( document.querySelectorAll('.main-title'));
    var ps = Array.prototype.slice.call( document.querySelectorAll('.main-content'));
    var lis_count = lis.length;
     var ps_count = ps.length;
    var active_li_index = 0;
    
    setInterval(function(){
       var active_li = document.querySelector('.main-title.focus-in-expand');
       var active_ps = document.querySelector('.main-content.focus-in-expand');       
        
       if( lis.indexOf(active_li) == lis_count-1 )
         active_li_index  = 0;
       else
         active_li_index++;
         
       active_li.classList.remove('focus-in-expand');
        active_ps.classList.remove('focus-in-expand');
       document.querySelectorAll('.main-title')[active_li_index].classList.add('focus-in-expand');
         document.querySelectorAll('.main-content')[active_li_index].classList.add('focus-in-expand');
    }, 6000);    
 }, false);

function enter(image) {
    const val = document.getElementById(image);
  
    if (!val.hasAttribute('default')) {
      val.setAttribute('default', val.getAttribute('src'));
    } 
    val.style.height = val.clientHeight + "px";
    val.setAttribute('src', val.getAttribute('hover'));
  }
  
  
function leave(image) {
const val = document.getElementById(image);
val.setAttribute('src', val.getAttribute('default'));
val.style.height = null;
}
  
  
  
$(document).ready(function(){
    $('[tool-tip-toggle="my-tooltip"]').tooltip({
    placement : 'bottom'
    });
});
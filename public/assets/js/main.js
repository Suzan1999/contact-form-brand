// Number Scrolling Off 
document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number"){
        document.activeElement.blur();
    }
});

// Only Number Type
function inpNum(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
    if (!charStr.match(/^[0-9]+$/))
      e.preventDefault();
  }
'use strict';

window.addEventListener('load', function (){

var $srcOSC = $('#srcOSC');
var $srcAshiras = $('#srcAshiras');
var DIV_NONE = 'divNone';

// WebGPIO LED Blink
  navigator.requestGPIOAccess()
    .then(gpioAccess=>{
      var port = gpioAccess.ports.get(198);
      var v = 0;
      return port.export("out").then(()=>{
        setInterval(function(){
          v = v ? 0 : 1;
          port.write(v);
          if (v===0) {
            $srcOSC.removeClass(DIV_NONE);
            $srcAshiras.addClass(DIV_NONE);
          } else {
            $srcOSC.addClass(DIV_NONE);
            $srcAshiras.removeClass(DIV_NONE);
          }
        },5000);
      });
  });
}, false);

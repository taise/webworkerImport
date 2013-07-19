'use strict';
(function(){
    /* test lib script */
    for(var c = 0; c < 300000; c++) {
      c++;
      for(var i = 1; i < 30000; i++) {
        i / c;
      };
    };
})();

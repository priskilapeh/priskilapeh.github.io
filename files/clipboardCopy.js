/* This script and many more are available free online at
The JavaScript Source :: http://javascript.internet.com 
Created by: Mark O'Sullivan :: http://lussumo.com/ 
 Jeff Larson :: http://www.jeffothy.com/ 
 Mark Percival :: http://webchicanery.com/ 
Licensed under: GNU Lesser General Public License */

function copy(text2copy) {
  if (window.clipboardData) {
    window.clipboardData.setData("Text",text2copy);
  } else {
    var flashcopier = 'flashcopier';
    if(!document.getElementById(flashcopier)) {
      var divholder = document.createElement('div');
      divholder.id = flashcopier;
      document.body.appendChild(divholder);
    }
    document.getElementById(flashcopier).innerHTML = '';
    var divinfo = '<embed src="_clipboard.swf" FlashVars="clipboard='+escape(text2copy)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
    document.getElementById(flashcopier).innerHTML = divinfo;
  }
}

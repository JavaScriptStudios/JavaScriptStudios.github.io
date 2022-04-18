var palette = {};

var bitmaps = [];

var drawArt = function(x, y, bitmap, message){

  noStroke();
  
  for (var i = 0; i < bitmap.length; i++) {
        
        for (var j = 0; j < bitmap[i].length; j++) {
            
            fill(palette[bitmap[i].charAt(j)]);
            rect((x + j) * pixelSize, (y + i) * pixelSize, pixelSize, pixelSize);
            
        }
        
    }

};

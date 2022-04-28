

//Your code above ^^^
function sing(){
    var lyric = "";
  
    for(var i = 1; i <= 12; i++){
     if(i == 5){
       lyric += "whisper words of wisdom, ";
     }
     else if(i == 11){lyric += "there will be an answer, "}
     else if(i == 12){lyric += "let it be ";}
     else {
       lyric += "let it be, ";
     }
    }
    return lyric;
  }
 console.log(sing());
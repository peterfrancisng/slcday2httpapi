
function countWords(str) {
    var fnum =  str;
   for(var i=0; i<=fnum.length; i++)
   {
     return str.split(/\s+/).length;
  }
}

console.log(countWords('Peter is a guru guru'));

/*
function countWords(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    return s.split(' ').length; 
}

console.log(countWords('Peter is a guru guru'));
*/
encode(strs) {
      let res = "";

      for(let i = 0; i < strs.length; i++){
          res += String(strs[i].length) + "#" + strs[i];
      }

      return res;
  }

decode(str) {
      let res = [];
      let i = 0;

      while(i < str.length){
          let j = i

          while(str[j] != "#"){
              j += 1;
          }
          
          let len = parseInt(str.slice(i, j));
          res.push(str.slice(j + 1, j + 1 + len))

          i = j + 1 + len;
      }
      
      return res;
  }
}

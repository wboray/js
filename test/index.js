let splice = function (array, start, deleteCount, ...arrElem){
    if(typeof array != "object" ||  typeof start != "number" || typeof deleteCount != "number"){
        console.log('тип не верный');
      }
      console.log(start);
      if(start < 0)
      {
        start = array.length + start - 1;
      }  
      console.log(start);
    
      let clone = Object.assign({}, array);
      let i = 0;
      let added = false;
      array.length = 0;
      
    
      for (let key in clone) {
        if (i < start || i > start + deleteCount - 1) 
        {
          array.push(clone[key]);
          delete clone[key];
        }
        if(!added && typeof arrElem == "object" && i == start){
          for (let value2 of arrElem) {
            array.push(value2); 
          }
          added = true;
        } 
        i++;
      }
    
      return clone;
}

module.exports = {
    splice
}
function bubbleSort(array) {
    var inter,resul;
    var indice=1;
        for(var j=0;j<array.length-1;j++){   
            for(var i=0;i<array.length-indice; i++){
                if(compara(array[i],array[i+1])) {
                    resul=swap(array[i],array[i+1])
                    array[i]=resul[0];
                    array[i+1]=resul[1];         
                    }            
            }
            indice++;
        }
        
    return array;
  }
function swap(val1,val2){
    var inter
        inter=val1;
        val1=val2;
        val2=inter;           
    return [val1,val2];
}
function compara(val1,val2){
    return (val1>val2);
}
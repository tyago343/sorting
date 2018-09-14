function merge(firstA, secondA){
    var finalArray = [];
    if(firstA == undefined) return secondA;
    if(secondA == undefined) return firstA;
    while(secondA.length || firstA.length){
        if(!firstA.length){
            finalArray.push(secondA.shift())
        }else if(!secondA.length){
            finalArray.push(firstA.shift())
        }else{
            
            if(firstA[0] > secondA[0]){
                finalArray.push(secondA.shift())

            }else{
                finalArray.push(firstA.shift())
            }
        }
    } 
    return finalArray;
}

function split(wholeArray){
    
    var firstHalf, secondHalf;
    var index = Math.ceil(wholeArray.length/2);
    firstHalf = wholeArray.slice(0, index);
    secondHalf = wholeArray.slice(index, wholeArray.length);
    
    return [firstHalf, secondHalf];
}
function mergeSort(array) {
   
    var first, second;
    
    if(array.length === 1) return array;
    
    var arr = split(array);
    
    first = mergeSort(arr[0]);
    
    second = mergeSort(arr[1]);
    
    return merge(first,second);    
}























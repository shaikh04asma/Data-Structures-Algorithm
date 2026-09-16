function linearSearch(arr:number[],target:number):number{
    let n = arr.length;
    for(let i=0; i<n;i++){
        if(arr[i] === target){
            return i;
        }
       
    }
    
    return -1
}
let array =[3,4,6,7,10,12,14,17];
let target = 12
let idx=linearSearch(array,target)
console.log(idx);

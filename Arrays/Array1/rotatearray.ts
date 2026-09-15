function reverseArrayRange(arr:number[],l:number,r:number):void{
    while(l<r){
        let temp =arr[l];
        arr[l]=arr[r];
        arr[r]=temp;
        l++;
        r--        
    }
    
}
function rotateArray(arr:number[],k:number):void{
    let n = arr.length;
    reverseArrayRange(arr,n-k,n-1);
    reverseArrayRange(arr,0,n-k-1);
    reverseArrayRange(arr,0,n-1);

}
let arr=[1,2,3,4,5,6]
let k = 3;
rotateArray(arr,k)
console.log(arr,k);

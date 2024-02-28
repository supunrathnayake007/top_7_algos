//https://www.youtube.com/watch?v=kp3fCihUXEg
//this video inspired me to do this 
let data1 =[10,5,7,6,1,9,8,3,5,4]
console.log("Data on hand:"+data1)
// function insertionSort_I_Wrote(data){
//     for (let index = 0; index < data.length; index++) {
//         const element = data[index];
//         const nextElement = data[index+1];
//         if(element>nextElement){
//             data[index] =nextElement
//             data[index+1]=element
//             if(index !== 0){
//                 index=-1
//                 continue
//             }
//         }
        
//     }
//     return data
// }
function mergeSort(data){
    const pair = []
    let elements :any[] = []; 
    for (let i = 0; i < data.length; i++) {
       const element =data[i] 
        elements.push(element )

        
    }
}

function insertionSort(data){
     //best for list are already sorted or small lists
     //if n is length of the array this algo runs n times in best case 
     //and n^2 times at worse case
    for (let i = 1; i < data.length; i++) {
        const current = data[i];
        let j = i-1

        while (j >= 0 && data[j] > current ) {
            data[j+1] = data[j]
            //data[j] = current //this is not the correct way to seems worked
            j--
        }
        data[j+1]=current
    }
    return data
}
console.log("Insertion Sort:"+insertionSort(data1))
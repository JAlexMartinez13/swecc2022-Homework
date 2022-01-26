
function countTrues(arr){
    let count = 0

    for(let i = 0; i < arr.length; i++){   

        if(arr[i] === true){
            count++
        }
    }

    return count
}


const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]


console.log(`We found ${countTrues(testArray)} Trues`)







let num = 41
function assignGrade(num) {
        
        if (num >= 90){
            console.log('A')
        }
        else if (num >= 80) {
            console.log('B')
        }
        else if (num >= 70) {
            console.log('C')

        } else if (num >= 60) {
            console.log("D")
            } else if (num >= 0) {
            console.log('F')  
             } else {
            console.log("Don't know what to say")
       }
    }
        assignGrade(num)

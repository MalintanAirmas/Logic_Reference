


function findNumberLocker(numberLocker) {

    //  Mengubah flow ke bentuk array 
    const flowArray = [9, 3, 7, 2];

    // Menjumlah keseluruhan  dari flow  dengan hasil 21 dan menjadikan pembatas iterasi
    let limit =Math.ceil(numberLocker/21); 

    // Initial florr level 
    let floor_level = 0;

    // Initial iterasi 
    let iterate = 0;

    // Iterasi Pertama 
    do {
        // Iterasi Kedua
        for (let index = 0; index < flowArray.length; index++) {
            numberLocker -= flowArray[index];
            floor_level += 1;
            if (numberLocker <= 0) break;
        }

        iterate++;
        
    } while (iterate<limit);

    return `is on the ${floor_level}th floor`
}


//  Testing 

console.log(findNumberLocker(9));
// 1 th floor
console.log(findNumberLocker(11));
// 2 th floor
console.log(findNumberLocker(14));
// 3 th floor
console.log(findNumberLocker(22));
// 5 th floor


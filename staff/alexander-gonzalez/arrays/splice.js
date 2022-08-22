/*function splice(array, start, removeCount, item1) {
  if (removeCount === 0) {
    // const result = [];
    //array[i]= array[i +1] esto hace machacar el elemento al siguiente...
    for (let i = array.lentgh - 1; i >= start; i--) {
      const item1 = array[i];
      array[i + 1] = item1;

      array[start] = item1;
    }
    return [];
  }
}*/

function splice(array, start, removeCount, ...element) {
  if (removeCount === 0) {
      /*
      0. ['Jan', 'Mar', 'Apr', 'May']
      1. ['Jan', 'Mar', 'Apr', 'May', 'May']
      2. ['Jan', 'Mar', 'Apr', 'Apr', 'May']
      3. ['Jan', 'Mar', 'Mar', 'Apr', 'May']
      4. ['Jan', 'Feb', 'Mar', 'Apr', 'May']
      */

      for (let i = array.length - 1; i >= start; i--) {
          const elem = array[i]

          array[i + 1] = elem
      }

      array[start] = element

      return []
  } else if (removeCount > 0) {
      if (element[0] === undefined) {
          /*
          0. ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
          1. removed -> ['clown']
          2. removed -> ['clown', 'drum']
          3. ['angel', 'mandarin', 'drum', 'mandarin', 'sturgeon']
          4. ['angel', 'mandarin', 'sturgeon', 'mandarin', 'sturgeon']
          5. ['angel', 'mandarin', 'sturgeon']
          */

          const removed = []

          const limit = start + removeCount > array.length ? array.length : start + removeCount

          for (let i = start; i < limit; i++)
              removed[removed.length] = array[i]

          for (let i = start; i < array.length - 1; i++)
              array[i] = array[i + removeCount]

          //array.length = array.length - removeCount
          array.length -= removed.length

          return removed
      } else {
          /*
          0. ['Jan', 'Feb', 'Mar', 'Apr', 'Jun' (1), 'Jun' (2), 'Jun' (3), 'Jun' (4), 'Jul']
          // extract copy of elements to be removed
          1. removed -> ['Jun']
          2. removed -> ['Jun', 'Jun']
          3. removed -> ['Jun', 'Jun', 'Jun']
          // remove elements from array
          3. displacementCount -> 3 (removeCount) - 1 (nr of elements) = 2
          4. ['Jan', 'Feb', 'Mar', 'Apr', 'Jun' (1), 'Jun' (4), 'Jun' (3), 'Jun' (4), 'Jul']
          5. ['Jan', 'Feb', 'Mar', 'Apr', 'Jun' (1), 'Jun' (4), 'Jul', 'Jun' (4), 'Jul']
          // adjust array size
          6. ['Jan', 'Feb', 'Mar', 'Apr', 'Jun' (1), 'Jun' (4), 'Jul']
          // replace element in index
          7. ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' (4), 'Jul']
          */
          const removed = []

          const limit = start + removeCount > array.length ? array.length : start + removeCount

          for (let i = start; i < limit; i++)
              removed[removed.length] = array[i]

          const displacementCount = removeCount - 1

          for (let i = start + 1; i < array.length - displacementCount; i++) {
              array[i] = array[i + displacementCount]
          }

          array.length -= displacementCount

          array[start] = element[0]

          return removed
      } 

        /*  
        0. ['Jan', 'Feb', 'Mar', 'Apr', '1', '2', '3', '4', '5', 'Jul', 'Ago']
         // extract numbers of elements
         . extract [1]
         .extract [1,2]
         .extract [1,2,3]
         extract [1,2,3,4]
         extract [1,2,3,4,5]
         // removed element and replace for this numbers 
         displacementCount ---> 5 (removeCount) - 3 (nr of elements) = 2
         .['Jan', 'Feb', 'Mar', 'Apr', '1', '2', '3', '4', '5', 'Jul', 'Ago']
         ['Jan', 'Feb', 'Mar', 'Apr','2', '3', '4', '5', 'Jul', 'Ago']
         ['Jan', 'Feb', 'Mar', 'Apr', '3', '4', '5', 'Jul', 'Ago']
         ['Jan', 'Feb', 'Mar', 'Apr','4', '5', 'Jul', 'Ago']
         ['Jan', 'Feb', 'Mar', 'Apr','5', 'Jul', 'Ago']
         ['Jan', 'Feb', 'Mar', 'Apr','Jul', 'Ago']
         //replace element in index
         ['Jan', 'Feb', 'Mar', 'Apr', 'may','jun','Jul', 'Ago']

 */

   /*else {
        const replace = []

          for (let i = start; i < array.length; i++)


      }*/

      
  }
} 

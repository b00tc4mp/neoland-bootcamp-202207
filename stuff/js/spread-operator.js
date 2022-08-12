// spread

var peter = { name: 'Peter', surname: 'Pan' }


//var peter2 = {}
//peter2.name = peter.name
//peter2.surname = peter.surname

//var peter2 = {
//    name: peter.name,
//    surname: peter.surname
//}

var peter2 = { ...peter }

console.log(peter2)

//

var nums = [10, 20, 30]

//var nums2 = []
//nums2[0] = nums[0]
//nums2[1] = nums[1]
//nums2[2] = nums[2]

//var nums2 = nums.slice(0)

var nums2 = [...nums]

console.log(nums2)





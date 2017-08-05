/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
 /**
 * this solution retain the original rank.
 * I do not know whether passing the test.
 */
 
 //debugger keyword using node.js debugger mode
 
 debugger;
 
var moveZeroes = function(nums) {
    var tmp, flag = nums.length;
    for(var i = 0; i<flag;i++){
		
		if(nums[i] === 0){			
			while(nums[flag] === 0){
				flag--;
			}
			
			tmp = nums[flag];
			nums[flag] = nums[i];
			nums[i] = tmp;
		}
	}
};

nums = [0, 1, 0, 3, 12];
console.log(nums);
moveZeroes(nums);

console.log(nums);


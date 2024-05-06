/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0,
        end = height.length - 1,
        result = 0
    
    while(start < end) {
        const min = Math.min(height[start], height[end])
        const area = (end - start) * min

        if (area > result) result = area

        if (height[start] < height[end]) start++
        else end--
    }

    return result
};
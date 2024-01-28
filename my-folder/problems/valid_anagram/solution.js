/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const ssorted = s.split("").sort().join("")
    const tsorted = t.split("").sort().join("")
    return ssorted === tsorted
};
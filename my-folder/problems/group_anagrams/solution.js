/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const vals = {}
    for (const str of strs) {
        const key = [...str].sort().join('')
        if (!vals[key]) vals[key] = []
        vals[key].push(str)
    }
    return [...Object.values(vals)]
};
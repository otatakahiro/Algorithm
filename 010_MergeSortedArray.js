var merge = function(nums1,m,nums2,n) {
    for(let i = 0; i < nums2.length; i++){
        nums1.splice(0,0,nums2[i]);
    }
    nums1.length = m + n;
    let sort = nums1.sort(function(a,b){
        return (a < b) ? -1 : 1;
    })
    return sort;
};
console.log(merge([1,2,3,0,0,0,5,8],7,[2,5,6],3));

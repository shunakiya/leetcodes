function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let a = m - 1;
    let b = n - 1; 
    let c = m + n - 1; 
    
    while (b >= 0) {
        if (a >= 0 && nums1[a] > nums2[b]) {
            nums1[c] = nums1[a];
            a--;
        } else {
            nums1[c] = nums2[b];
            b--;
        }
        c--;
    }
}

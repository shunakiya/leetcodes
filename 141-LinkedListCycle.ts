/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    // create a set and iterate through the list
    // if head.next not in the array, then add to set
    // if head.next in the array, return true
    if(!head){
        return false;
    }

    let current = head;
    let set = new Set();

    while(current){
        if(set.has(current)){
            return true;
        } else {
            set.add(current);
            current = current.next;
        }
    }
    return false;
};

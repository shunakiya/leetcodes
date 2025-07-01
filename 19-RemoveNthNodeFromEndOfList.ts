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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 2 pointer, one is delayed 1 by 1 than the other
    // one starts at head, the other starts at head.next
    // once the pointers reach their destination (one is at the nth node, one is at n-1)
    // make current.next = pointer2.next;
    // return the new head

    if(!head){
        return null;
    }

    let pointer1 = head;
    let pointer2 = head;

    for(let i = 0; i < n + 1; i++){
        if(!pointer1){
            return head.next;
        }
        pointer1 = pointer1.next;
    }

    while(pointer1){
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    pointer2.next = pointer2.next.next;

    return head;
};

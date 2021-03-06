/*
 * @Author: alex
 * @Date: 2022-03-21 21:25:29
 * @LastEditors: alex
 * @LastEditTime: 2022-03-21 21:25:30
 * @Description: file content
 * 
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

 

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 

限制：

0 <= 节点个数 <= 5000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let prev = null
  let curr = head
  while(curr){
      const next = curr.next
      
      curr.next = prev
      prev = curr
      curr = next
  }
  // 返回头节点
  return prev
};
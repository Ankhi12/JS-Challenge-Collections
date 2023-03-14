# JavaScript Challenges
A repository that has solution to some of the available online JS Challenges. This repo will be updated every now and then.

Starting with coming up with a different version of solution to the following JS challenge - 

  1. [educative.io](https://www.educative.io/blog/level-up-javascript-coding-challenges)
  
# Data Structures
  
  1. Linked List
  
     It is a data structure which has the following structue - 
     
     ![LinkedList](https://user-images.githubusercontent.com/124775002/224909990-a7e4f671-28ce-4162-adff-6cb64a489a4d.PNG)
     
     There are the following types of Linked Lists -
     
     1. Singly Linked List
     
        Here the data traversal is only in the forward direction.
        
     2. Doubly Linked List
     
        Here the data traversal is possible on both the forward and backward direction.
        
     3. Circular Linked List
     
        Here the last link instead of pointing to null points to the front node, and the front node is linked to the last node.
        
# Linked List Operations
    
1. Insert data
      
![InsertionOperation](https://user-images.githubusercontent.com/124775002/224911722-0f58d691-74ff-43db-95a5-86c3da0fb460.PNG)

So each node can be represented by a class Node -

    function Nodeclass(val, next = null){

    this.val = val
    this.next = next
      }

 So, const node = new NodeClass(10)
 Means we are creating a node with data value 10 and next pointer to null.
 
 Now, we will create a Linked List class that will perform all the linked list operations -
 
    function LinkedList(head = null) {
 
              this.head = null
 
     }

 
    const node1 = new Node(3) //1
    const node2 = new Node(4) //2
    const node3 = new Node(6) //3
    const node4 = new Node(20) //4

    node1.next = node2
    node2.next = node3 // 1->2->3

    so, inserting node 20 between node 4 and 6 will be - // 1->2->4->3

    node2.next = node4
    node4.next = node3

    const linkedlist = new LinkedList(node1)
    
# Printing the Linked List

    function LinkedList(head = null){

    this.head = head

    this.print = ()=>{
        let val = ""
        while(this.head){
            val += this.head.val + '  '

            this.head = this.head.next
            
        }
    console.log('The linked List is', val)
    }
    }

    
Inspiraton - 
1. [freeCodeCamp](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)


      
      
      
      
      
      
      
      

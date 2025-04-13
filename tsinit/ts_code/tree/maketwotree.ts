class MyTreeNode<T> {
    value: T;
    left: MyTreeNode<T> | null = null;
    right: MyTreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
    preOrder<T>(node: MyTreeNode<T> | null): void {
        if (!node) return;
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    // 采用递归实现先序遍历：先访问根节点，然后遍历左子树，最后遍历右子树。
    inOrder(node: MyTreeNode<T> | null): void {
        if (!node) return;
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }
    // 采用递归实现中序遍历：先遍历左子树，然后访问根节点，最后遍历右子树。
    postOrder(node: MyTreeNode<T> | null): void {
        if (!node) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }
    // 采用递归实现后序遍历：先遍历左子树，然后遍历右子树，最后访问根节点。
    levelOrder(node: MyTreeNode<T> | null): void {
        if (!node) return;
        const queue: MyTreeNode<T>[] = [node];
        while (queue.length > 0) {
            const current = queue.shift()!;
            console.log(current.value);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }
    // 借助队列实现层序遍历：使用一个队列来存储节点，先访问根节点，然后将其左右子节点加入队列，依次访问队列中的节点。
    // 怎么使用非递归实现前序遍历？
    // 1. 创建一个栈，将根节点压入栈中。
    // 2. 当栈不为空时，弹出栈顶节点，访问该节点，然后将其右子节点和左子节点依次压入栈中。
    // 3. 重复步骤2，直到栈为空。
    // 4. 访问的顺序即为前序遍历的结果。
    // 代码实现如下：
    // preOrder(node: MyTreeNode<T> | null): void {
    //     if (!node) return;
    //     const stack: MyTreeNode<T>[] = [node];
    //     while (stack.length > 0) {
    //         const current = stack.pop()!;
    // 此处的！表示当前节点不为 null
    //         console.log(current.value);
    //         if (current.right) {
    //             stack.push(current.right);
    //         }
    //         if (current.left) {
    //             stack.push(current.left);
    //         }
    //     }
    // }
    // 采用非递归实现前序遍历：使用一个栈来存储节点，先访问根节点，然后将其右子节点和左子节点依次压入栈中。
    // 采用非递归实现中序遍历：使用一个栈来存储节点，先遍历左子树，然后访问根节点，最后遍历右子树。
    // 思路：
    // 1. 创建一个栈，初始化为空。
    // 2. 从根节点开始，将当前节点压入栈中，并将当前节点设置为其左子节点。
    // 3. 当栈不为空时，弹出栈顶节点，访问该节点，然后将当前节点设置为其右子节点。
    // 4. 重复步骤2和3，直到栈为空。
    // 5. 访问的顺序即为中序遍历的结果。
    // 代码实现如下：
    // inOrder(node: MyTreeNode<T> | null): void {  
    //     if (!node) return;
    //     const stack: MyTreeNode<T>[] = [];
    //     let current: MyTreeNode<T> | null = node;
    //     while (stack.length > 0 || current) {
    //         while (current) {
    //             stack.push(current);
    //             current = current.left;
    //         }
    //         current = stack.pop()!;
    //         console.log(current.value);
    //         current = current.right;
    //     }
    // }
    // 采用非递归实现后序遍历：使用一个栈来存储节点，先遍历左子树，然后遍历右子树，最后访问根节点。   
    // 后序遍历思路：
    // 1. 创建一个栈，初始化为空。
    // 2. 从根节点开始，将当前节点压入栈中，并将当前节点设置为其左子节点。
    // 3. 当栈不为空时，弹出栈顶节点，访问该节点，然后将当前节点设置为其右子节点。
    // 4. 重复步骤2和3，直到栈为空。
    // 5. 访问的顺序即为后序遍历的结果。
    // 后序遍历的非递归实现比较复杂，通常需要使用两个栈来实现。下面是一个简单的实现：
    // postOrder(node: MyTreeNode<T> | null): void {
    //     if (!node) return;
    //     const stack1: MyTreeNode<T>[] = [node];
    //     const stack2: MyTreeNode<T>[] = [];
    //     while (stack1.length > 0) {
    //         const current = stack1.pop()!;
    //         stack2.push(current);
    //         if (current.left) {
    //             stack1.push(current.left);
    //         }
    //         if (current.right) {
    //             stack1.push(current.right);
    //         }
    //     }
    //     while (stack2.length > 0) {
    //         const current = stack2.pop()!;
    //         console.log(current.value);
    //     }
    // }
// 6. 访问的顺序即为后序遍历的结果。
// 代码实现如下：


}
const tree = new MyTreeNode<number>(1);
tree.left = new MyTreeNode(2);
tree.right = new MyTreeNode(3);
tree.left.left = new MyTreeNode(4);
tree.left.right = new MyTreeNode(5);
tree.right.left = new MyTreeNode(6);
tree.right.right = new MyTreeNode(7);
tree.preOrder(tree); // 输出: 1 2 4 5 3 6 7
tree.inOrder(tree); // 输出: 4 2 5 1 6 3 7
tree.postOrder(tree); // 输出: 4 5 2 6 7 3 1
tree.levelOrder(tree); // 输出: 1 2 3 4 5 6 7
// 1. 先序遍历：先访问根节点，然后遍历左子树，最后遍历右子树。输出顺序为：1 2 4 5 3 6 7
// 2. 中序遍历：先遍历左子树，然后访问根节点，最后遍历右子树。输出顺序为：4 2 5 1 6 3 7
// 3. 后序遍历：先遍历左子树，然后遍历右子树，最后访问根节点。输出顺序为：4 5 2 6 7 3 1
// 4. 层序遍历：从上到下，从左到右逐层遍历。输出顺序为：1 2 3 4 5 6 7
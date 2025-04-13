class No<T> {
    value: T;
    next: No<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
    // constructor是一个特殊的方法，用于创建和初始化对象的类。它在类被实例化时自动调用。一般用于初始化对象的属性。
    // 这里的 constructor(value: T) 是一个构造函数，它接受一个类型为 T 的参数 value，并将其赋值给当前实例的 value 属性。
    // 同时，它还将 next 属性初始化为 null，表示当前节点没有指向下一个节点。
}
// 定义了一个链表节点类 No<T>它是一个对象，它包含一个值和指向下一个节点的指针。

class LinkedList<T> {
    head: No<T> | null;
    constructor() {
        this.head = null;
    }

    add(value: T): void {
        const newNode = new No(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) { // 显式检查 current.next 是否为 null
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print(): void {
        if (!this.head) {
            console.log("链表为空");
            return;
        }
        let current = this.head;
        const values: T[] = [];
        while (current) {
            values.push(current.value); // 正确填充 values 数组
            if (current.next === null) break; // 显式检查 current.next 是否为 null
            current = current.next; // 遍历到下一个节点
        }
        console.log(values.join(' -> ')); // 打印链表内容
    }
}
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.print(); 

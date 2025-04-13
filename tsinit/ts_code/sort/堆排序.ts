// 堆排序的实现：
// 1. 创建一个堆类，包含一个数组用于存储堆元素。
// 2. 实现插入元素的方法，保持堆的性质。
// 3. 实现删除元素的方法，保持堆的性质。
// 4. 实现堆排序的方法，先构建最大堆，然后依次将最大元素放到数组末尾，调整堆。
// 5. 返回排序后的数组。
// 6. 堆排序的时间复杂度为 O(n log n)，空间复杂度为 O(1)，适合大规模数据的排序。
// 7. 堆排序是不稳定的排序算法，即相同元素的相对位置可能会改变。
// 8. 堆排序的实现可以使用数组或链表，下面是数组实现的代码：
// 代码实现如下：   
// class Heap {
//     private heap: number[]; // 存储堆元素的数组
//    constructor() {
//         this.heap = []; // 初始化堆为空数组
//     }
//
//     // 插入元素
//     insert(value: number): void {
//         this.heap.push(value); // 将新元素添加到堆的末尾
//         this.heapifyUp(this.heap.length - 1); // 调整堆的性质
//     }
//
//     // 删除元素
//     remove(): number | null {

//         if (this.heap.length === 0) return null; // 堆为空，返回 null
//       const root = this.heap[0]; // 获取堆顶元素
//         const last = this.heap.pop(); // 删除堆顶元素并获取最后一个元素
//         if (this.heap.length > 0 && last !== undefined) {
//             this.heap[0] = last; // 将最后一个元素放到堆顶
//           this.heapifyDown(0); // 调整堆的性质
//         }
//         return root; // 返回堆顶元素
//     }
//     }
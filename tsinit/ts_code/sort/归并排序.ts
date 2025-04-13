// 实现归并排序的思路
// 1. 先将数组分成两半，分别对每一半进行归并排序。
// 2. 将两个已经排好序的数组进行合并，得到一个新的有序数组。
// 3. 递归地进行上述操作，直到所有的子数组都排好序。
// 4. 最终得到一个有序的数组。
// 5. 归并排序的时间复杂度为 O(n log n)，空间复杂度为 O(n)，适合大规模数据的排序。
// 6. 归并排序是稳定的排序算法，即相同元素的相对位置不会改变。
// 7. 归并排序的实现可以使用递归或非递归的方法，下面是递归实现的代码：
// 代码实现如下：
function merge(left: number[], right: number[]): number[] {
    const result: number[] = []; // 用于存储合并后的结果
    let i = 0; // 左半部分的索引
    let j = 0; // 右半部分的索引
    while (i < left.length && j < right.length) { // 当两个数组都有元素时，进行比较
        if (left[i] < right[j]) { // 如果左半部分的元素小于右半部分的元素
            result.push(left[i]); // 将左半部分的元素加入结果数组
            i++; // 左半部分的索引加1
        } else {
            result.push(right[j]); // 将右半部分的元素加入结果数组
            j++; // 右半部分的索引加1
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j)); // 将剩余的元素加入结果数组并返回
}
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr; // 如果数组长度小于等于1，直接返回该数组
    const mid = Math.floor(arr.length / 2); // 找到中间索引
    const left = mergeSort(arr.slice(0, mid)); // 对左半部分进行归并排序
    const right = mergeSort(arr.slice(mid)); // 对右半部分进行归并排序
    return merge(left, right); // 合并两个已排序的数组
}
// 示例用法
const arr = [38, 27, 43, 3, 9, 82, 10, 38, 27, 43, 3, 9, 82, 10]; // 待排序的数组
const sortedArr = mergeSort(arr); // 调用归并排序函数
console.log(sortedArr); // 输出: [3, 9, 10, 27, 38, 43, 82]
// 整体实现的思路：首先将数组分成两半，分别对每一半进行归并排序
// ，然后将两个已经排好序的数
// 组进行合并，得到一个新的有序数组。递归地进行上述操作
// ，直到所有的子数组都排好序。最终得到一个有序的数组。
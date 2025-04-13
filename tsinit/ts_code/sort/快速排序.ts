// 快速排序的代码实现
// 该代码实现了快速排序算法
// 快速排序是一种分治法的排序算法，平均时间复杂度为O(n log n)，最坏时间复杂度为O(n^2)
// 适合大规模数据的排序。
// 快速排序是不稳定的排序算法，即相同元素的相对位置可能会改变。
// 快速排序的实现可以使用递归或非递归的方法，下面是递归实现的代码：
// 代码实现如下：
function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr; // 如果数组长度小于等于1，直接返回该数组
    const pivot = arr[Math.floor(arr.length / 2)]; // 选择基准元素
    const left = arr.filter(x => x < pivot); // 小于基准元素的子数组
    const right = arr.filter(x => x > pivot); // 大于基准元素的子数组
    return [...quickSort(left), pivot, ...quickSort(right)]; // 递归排序并合并结果
}
// 示例用法
const arr = [38, 27, 43, 3, 9, 82, 10]; // 待排序的数组
const sortedArr = quickSort(arr); // 调用快速排序函数
console.log(sortedArr); // 输出: [3, 9, 10, 27, 38, 43, 82]
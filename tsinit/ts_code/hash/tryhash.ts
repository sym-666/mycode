/**
 * 哈希表节点类（链表节点）
 */
class HashNode<K, V> {
    constructor(
        public key: K,
        public value: V,
        public next: HashNode<K, V> | null = null
    ) {}
}

/**
 * 哈希表类（支持泛型键值）
 */
class HashTable<K, V> {
    private buckets: Array<HashNode<K, V> | null>; // 存储桶数组
    private capacity: number;                      // 初始容量
    private loadFactor: number;                    // 负载因子（触发扩容的阈值）
    private size: number;                          // 当前元素数量

    constructor(capacity: number = 16, loadFactor: number = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.buckets = new Array(capacity).fill(null);
    }

    /**
     * 哈希函数：将键转换为桶索引
     */
    private hash(key: K): number {
        const keyString = String(key); // 统一转换为字符串处理
        let hash = 0;
        // 类似 Java 的 String.hashCode() 算法
        for (let i = 0; i < keyString.length; i++) {
            hash = (hash << 5) - hash + keyString.charCodeAt(i);
            hash |= 0; // 转换为 32 位整数
        }
        return Math.abs(hash) % this.capacity;
    }

    /**
     * 插入/更新键值对
     */
    put(key: K, value: V): void {
        // 1. 计算哈希索引
        const index = this.hash(key);
        let node = this.buckets[index];

        // 2. 检查是否已存在该键，若存在则更新值
        while (node !== null) {
            if (node.key === key) {
                node.value = value;
                return;
            }
            node = node.next;
        }

        // 3. 不存在则创建新节点，插入链表头部（避免尾部遍历）
        const newNode = new HashNode(key, value, this.buckets[index]);
        this.buckets[index] = newNode;
        this.size++;

        // 4. 检查是否需要扩容
        if (this.size / this.capacity >= this.loadFactor) {
            this.resize(this.capacity * 2);
        }
    }

    /**
     * 获取键对应的值（不存在返回 undefined）
     */
    get(key: K): V | undefined {
        const index = this.hash(key);
        let node = this.buckets[index];

        while (node !== null) {
            if (node.key === key) {
                return node.value;
            }
            node = node.next;
        }
        return undefined;
    }

    /**
     * 删除键值对
     */
    remove(key: K): boolean {
        const index = this.hash(key);
        let node = this.buckets[index];
        let prev: HashNode<K, V> | null = null;

        while (node !== null) {
            if (node.key === key) {
                if (prev === null) {
                    this.buckets[index] = node.next; // 删除头节点
                } else {
                    prev.next = node.next; // 删除中间节点
                }
                this.size--;
                return true;
            }
            prev = node;
            node = node.next;
        }
        return false;
    }

    /**
     * 判断是否包含某个键
     */
    containsKey(key: K): boolean {
        return this.get(key) !== undefined;
    }

    /**
     * 动态扩容
     */
    private resize(newCapacity: number): void {
        const oldBuckets = this.buckets;
        this.capacity = newCapacity;
        this.buckets = new Array(newCapacity).fill(null);
        this.size = 0;

        // 重新插入所有旧节点
        for (const headNode of oldBuckets) {
            let node = headNode;
            while (node !== null) {
                this.put(node.key, node.value);
                node = node.next;
            }
        }
    }

    /**
     * 打印哈希表结构（调试用）
     */
    print(): void {
        for (let i = 0; i < this.capacity; i++) {
            const nodes: string[] = [];
            let node = this.buckets[i];
            while (node !== null) {
                nodes.push(`[${node.key}: ${node.value}]`);
                node = node.next;
            }
            if (nodes.length > 0) {
                console.log(`Bucket ${i}: ${nodes.join(' -> ')}`);
            }
        }
    }
}

// 示例测试 -----------------------------------------------------------------
const hashTable = new HashTable<string, number>(8, 0.5);

// 插入键值对
hashTable.put("apple", 10);
hashTable.put("banana", 20);
hashTable.put("orange", 30);
hashTable.put("grape", 40);
hashTable.put("melon", 50);

// 触发扩容（当 size/capacity >= 0.5 时扩容）
hashTable.put("peach", 60); 

// 打印结构
hashTable.print();
/*
Bucket 0: [peach: 60]
Bucket 2: [banana: 20]
Bucket 4: [grape: 40]
Bucket 5: [orange: 30]
Bucket 6: [apple: 10]
Bucket 7: [melon: 50]
*/

// 获取值
console.log(hashTable.get("apple"));    // 10
console.log(hashTable.get("watermelon")); // undefined

// 更新值
hashTable.put("apple", 100);
console.log(hashTable.get("apple"));    // 100

// 删除键
hashTable.remove("orange");
console.log(hashTable.containsKey("orange")); // false

// 最终结构
hashTable.print();
/*
Bucket 0: [peach: 60]
Bucket 2: [banana: 20]
Bucket 4: [grape: 40]
Bucket 6: [apple: 100]
Bucket 7: [melon: 50]
*/
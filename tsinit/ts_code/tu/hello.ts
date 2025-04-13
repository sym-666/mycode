/* 基于邻接矩阵实现的无向图类 */
class GraphAdjMat {
    vertices: number[]; // 顶点列表，元素代表“顶点值”，索引代表“顶点索引”
    adjMat: number[][]; // 邻接矩阵，行列索引对应“顶点索引”

    /* 构造函数 */
    constructor(vertices: number[], edges: number[][]) {
        this.vertices = [];
        this.adjMat = [];
        // 添加顶点
        for (const val of vertices) {
            this.addVertex(val);
        }
        // 添加边
        // 请注意，edges 元素代表顶点索引，即对应 vertices 元素索引
        for (const e of edges) {
            this.addEdge(e[0], e[1]);
        }
    }

    /* 获取顶点数量 */
    size(): number {
        return this.vertices.length;
    }

    /* 添加顶点 */
    addVertex(val: number): void {
        const n: number = this.size();
        // 向顶点列表中添加新顶点的值
        this.vertices.push(val);
        // 在邻接矩阵中添加一行
        const newRow: number[] = [];
        for (let j: number = 0; j < n; j++) {
            newRow.push(0);
        }
        this.adjMat.push(newRow);
        // 在邻接矩阵中添加一列
        for (const row of this.adjMat) {
            row.push(0);
        }
        // 遍历每个顶点，设置新顶点与其他顶点的连接关系                                 
    }

    /* 删除顶点 */
    removeVertex(index: number): void {
        if (index >= this.size()) {
            throw new RangeError('Index Out Of Bounds Exception');
        }
        // 在顶点列表中移除索引 index 的顶点
        this.vertices.splice(index, 1);

        // 在邻接矩阵中删除索引 index 的行
        this.adjMat.splice(index, 1);
        // 在邻接矩阵中删除索引 index 的列
        for (const row of this.adjMat) {
            row.splice(index, 1);
        }
    }

    /* 添加边 */
    // 参数 i, j 对应 vertices 元素索引
    addEdge(i: number, j: number): void {
        // 索引越界与相等处理
        if (i < 0 || j < 0 || i >= this.size() || j >= this.size() || i === j) {
            throw new RangeError('Index Out Of Bounds Exception');
        }
        // 在无向图中，邻接矩阵关于主对角线对称，即满足 (i, j) === (j, i)
        this.adjMat[i][j] = 1;
        this.adjMat[j][i] = 1;
    }

    /* 删除边 */
    // 参数 i, j 对应 vertices 元素索引
    removeEdge(i: number, j: number): void {
        // 索引越界与相等处理
        if (i < 0 || j < 0 || i >= this.size() || j >= this.size() || i === j) {
            throw new RangeError('Index Out Of Bounds Exception');
        }
        this.adjMat[i][j] = 0;
        this.adjMat[j][i] = 0;
    }

    /* 打印邻接矩阵 */
    print(): void {
        console.log('顶点列表 = ', this.vertices);
        console.log('邻接矩阵 =', this.adjMat);
    }
}

// 添加验证图函数的示例
function testGraph(): void {
    const vertices: number[] = [1, 2, 3, 4];
    const edges: number[][] = [
        [0, 1],
        [1, 2],
        [2, 3]
    ];
    const graph = new GraphAdjMat(vertices, edges);
    console.log("原始图:");
    graph.print();

    // 添加顶点及其连接边
    graph.addVertex(5);
    graph.addEdge(0, graph.size()-1); // 将新顶点与顶点0连接

    // 修改图结构：删除一条边和一个顶点
    graph.removeEdge(1, 2);
    graph.removeVertex(2); // 删除索引为2的顶点

    console.log("修改后的图:");
    graph.print();
}

testGraph();
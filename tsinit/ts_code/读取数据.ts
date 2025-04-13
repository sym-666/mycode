import * as readline from 'readline';

// 创建 readline 接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 提问并获取输入
rl.question('请输入您的名字：', (answer: string) => {
  console.log(`你好，${answer}！`);
  rl.close();
});
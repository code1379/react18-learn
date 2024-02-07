// 在 React 进行 DOM DIFF 的时候会计算要执行的操作

const Placement = 0b001;
const Update = 0b010;

let flags = 0b00;

// 增加操作
flags |= Placement;
flags |= Update;

console.log(flags.toString(2));
console.log(flags);

// 删除操作，删除掉新增操作
// 0b011 & 0b110
flags = flags & ~Placement;

console.log(flags.toString(2));
console.log(flags);

// 判断包含
console.log((flags & Placement) === Placement);
console.log((flags & Update) === Update);
console.log((flags & Placement) === 0);
console.log((flags & Update) === 0);

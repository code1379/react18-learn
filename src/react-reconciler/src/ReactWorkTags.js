export const FunctionComponent = 0;
export const ClassComponent = 1;

// 根 Fiber 的 tag
// 每种虚拟DOM 都会对应自己的 fiber tag 类型。
export const HostRoot = 3;

// 原生组件
export const HostComponent = 5;
// 文本节点
export const HostText = 6;

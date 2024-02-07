import { HostRoot } from "./ReactWorkTags";
import { NoFlags } from "./ReactFiberFlags";
/**
 *
 * @param tag fiber类型，函数组件 0 、类组件 1、原生组件5、根元素3
 * @param pendingProps 新属性，等待处理或者说生肖的属性
 * @param key 唯一标识
 */
export function FiberNode(tag, pendingProps, key) {
  this.tag = tag;
  this.key = key;
  this.type = null; // fiber 类型，来自于 虚拟DOM节点的 type, span div p
  // 每个虚拟DOM => Fiber 节点 => 真实DOM
  this.stateNode = null; // 此 fiber 对应的真实DOM节点 h1 => 真实DOM

  this.return = null; // 指向父节点
  this.child = null; // 指向第一个子节点
  this.sibling = null; // 指向弟弟

  // fiber 哪来的？通过虚拟DOM节点创建的，虚拟DOM会提供pendingProps用来创建fiber节点的属性
  this.pendingProps = pendingProps; // 等待生效的
  this.memoizedProps = null; // 已经生效的

  // 每个 fiber 还会有自己的状态，每一种 fiber 状态存的类型不一样
  // 类组件对应的 fiber 存的就是类的实例的状态，HostRoot 存的就是要渲染的元素
  this.memoizedState = null;

  // 每个fiber身上可能还有更新队列
  // 比如类组件 setState 更新的数据会放到 updateQueue 中
  this.updateQueue = null;

  // 副作用标识，标识要针对此fiber节点进行何种操作
  this.flags = NoFlags;
  // 子节点对应的副作用标识
  this.subtreeFlags = NoFlags;
  // 替身，轮替，在后面将DOM-DIFF的时候会用到
  this.alternate = null;
}

export function createFiber(tag, pendingProps, key) {
  return new FiberNode(tag, pendingProps, key);
}

export function createHostRootFiber() {
  return createFiber(HostRoot, null, null);
}

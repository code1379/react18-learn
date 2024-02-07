import { createHostRootFiber } from "./ReactFiber";
/**
 * 创建 FiberRootNode 实例
 * @param {*} containerInfo div#root
 */
function FiberRootNode(containerInfo) {
  this.containerInfo = containerInfo;
}
/**
 * 内部创建 FiberRootNode 实例
 * @param {*} containerInfo div#root
 * @returns
 */
export function createFiberRoot(containerInfo) {
  const root = new FiberRootNode(containerInfo);
  // 创建根 fiber，HostRoot 指的就是根节点 div#root
  const uninitializedFiber = createHostRootFiber(root);
  // 双向指向
  // 根容器的 current 指向当前的 根fiber
  root.current = uninitializedFiber;
  // 根fiber的 stateNode 指向根容器（也就是真实DOM节点 FiberRootNode）
  uninitializedFiber.stateNode = root;
  return root;
}

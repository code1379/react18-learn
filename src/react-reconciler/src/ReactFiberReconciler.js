import { createFiberRoot } from "./ReactFiberRoot";
/**
 * 内部调用 createFiberRoot 创建FiberRootNode
 * @param {*} containerInfo 其实就是根节点 div#root
 */
export function createContainer(containerInfo) {
  return createFiberRoot(containerInfo);
}

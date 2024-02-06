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
  return root;
}

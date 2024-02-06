import hasOwnProperty from "shared/hasOwnProperty";
import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";

// 保留的属性，不会被放到 props 上
const RESOLVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};
/**
 * 对象 config 中的 key 是否有值
 * @param {*} config
 * @returns
 */
function isValidKey(config) {
  return config.key !== undefined;
}

/**
 * 对象 config 中的 ref 是否有值
 * @param {*} config
 * @returns
 */
function isValidRef(config) {
  return config.ref !== undefined;
}

function ReactElement(type, key, ref, props) {
  // 这就是 React 元素，也被称为虚拟DOM
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
  };
}

/**
 * jsxDEV = createElement 但是 children 会在 config 中
 * @param {*} type
 * @param {*} config
 */
export function jsxDEV(type, config) {
  let propName; // 属性名
  const props = {}; // 属性对象
  let key = null; // 每个虚拟 DOM 有一个可选的 key 属性，用来区分同一个父节点下的不同子节点
  let ref = null; // 引入，后面可以通过这个实现获取真实DOM的需求

  if (isValidKey(config)) {
    key = config.key;
  }
  if (isValidRef(config)) {
    ref = config.ref;
  }

  // 将 config 上的属性拷贝 到 props 上
  for (propName in config) {
    if (
      hasOwnProperty.call(config, propName) &&
      !RESOLVED_PROPS.hasOwnProperty(propName)
    ) {
      props[propName] = config[propName];
    }
  }

  return ReactElement(type, key, ref, props);
}

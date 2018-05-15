/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  let data
  if (!name) return
  if (typeof content !== 'string') {
    data = JSON.stringify(content)
  }
  window.localStorage.setItem(name, data)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/*
 * @Author: mfxhb
 * @Date: 2022-11-09 14:27:06
 * @LastEditTime: 2022-11-09 15:44:25
 * @Description:
 */

/**
 * todo 清除其它有边框特效的自定义select元素
 * @param {string} classname
 */
export const clearBorderT = function (classname: string = "border-cus-t") {
  const docs = document.getElementsByClassName(classname);
  for (let k = 0, len = docs.length; k < len; k++) {
    const item = docs[k] as HTMLElement;
    item.classList.remove(classname);
  }
};
/**
 * todo 点击如果不是特效边框,就清除所有的元素
 */
export const windowClick = function (event: MouseEvent): void {
  const classlist = (event.target as HTMLElement).classList;
  if (!classlist.contains("border-cus-t")) {
    clearBorderT();
  }
};

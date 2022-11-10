/*
 * @Author: mfxhb
 * @Date: 2022-11-09 14:27:06
 * @LastEditTime: 2022-11-10 17:00:05
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
  // 隐藏所有选项框 class:select-bd-showflag
  const select_classname: string = "select-bd-showflag";
  const docsSelects = document.getElementsByClassName(select_classname);
  for (let k = 0, len = docsSelects.length; k < len; k++) {
    const item = docsSelects[k] as HTMLElement;
    item.classList.remove(select_classname);
  }
};
/**
 * todo 点击如果不是特效边框,就清除所有的元素
 */
export const windowClick = function (event: MouseEvent): void {
  const classlist = (event.target as HTMLElement).classList;
  const select_classname: string = "select-bd-showflag";
  const selectbtn_classname: string = "border-cus-t";
  const selectbtn_classitemid: string = "select-clear-id";
  // 点击范围不是选项框或者按钮的情况下隐藏他们
  if (
    !classlist.contains(selectbtn_classname) &&
    !classlist.contains(select_classname) &&
    !classlist.contains(selectbtn_classitemid)
  ) {
    clearBorderT();
  }
};
/**
 * todo 获取一个随机数
 */
function randomNumber(max: number, min: number): number {
  const maxnum = max + 1;
  const num = Math.floor(Math.random() * maxnum + min);
  return num;
}
/**
 * todo 开启鼠标特效
 */
export const openClickCur = function ($: any) {
  $("body").click(function (e: MouseEvent) {
    const classlist = (e.target as HTMLElement).classList;
    // 这些类名禁止触发
    const includes_calss = [
      "select-bd-showflag",
      "border-cus-t",
      "select-clear-id",
      "cus-button",
    ];
    let check = true;
    for (const iterator of includes_calss) {
      if (classlist.contains(iterator)) {
        check = false;
      }
    }
    if (check) {
      var textstr = String.fromCodePoint(0x1f469);
      var $i = $("<span/>").text(textstr);
      var x = e.pageX,
        y = e.pageY;
      const yc = randomNumber(183, -100);
      const xc = randomNumber(56, -56);
      console.log(xc, yc);
      $i.css({
        "z-index": 999,
        top: y + yc,
        left: x + xc,
        "font-size": "30px",
        "user-select": "none",
        position: "absolute",
      });
      $("body").append($i);
      $i.animate(
        {
          top: y - 180,
          opacity: 0,
        },
        1500,
        function () {
          $i.remove();
        }
      );
    }
  });
};

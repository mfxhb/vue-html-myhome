/*
 * @Author: mfxhb
 * @Date: 2022-11-11 09:29:39
 * @LastEditTime: 2022-11-14 16:24:54
 * @Description: 新添加的页面,可直接在这配置,配置完后会直接更新
 */
import { defineAsyncComponent } from "vue";
// 类型
import { NavListType, CommonType, StaticRoutesType } from "./config-typer";

const staticRoutes: StaticRoutesType[] = [
  {
    name: "I'm loser",
    pagelist: [
      {
        label: "Jian",
        value: "Resume",
        common: defineAsyncComponent(
          () => import("../view/Losers/resume/resume.vue")
        ),
      },
    ],
  },
  {
    name: "Project",
    pagelist: [
      {
        label: "project",
        value: "Project",
        common: defineAsyncComponent(
          () => import("../view/Losers/projects/projects.vue")
        ),
      },
    ],
  },
];

const defaultPage: string = "Resume"; // 默认显示

// 下面会自动处理
let navListConf: NavListType[] = [];
let components: CommonType = {};
for (let k = 0, len = staticRoutes.length; k < len; k++) {
  const routeItem: StaticRoutesType = staticRoutes[k];
  navListConf.push({
    name: routeItem.name,
    list: routeItem.pagelist.map((v) => {
      components[v.value] = v.common;
      return { label: v.label, value: v.value };
    }),
  });
}

export { navListConf, components, defaultPage };

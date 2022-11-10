/*
 * @Author: mfxhb
 * @Date: 2022-11-10 11:42:49
 * @LastEditTime: 2022-11-10 13:13:24
 * @Description:
 */
import { Ref, ref } from "vue";
import { selectListType } from "../typers";

// 导航栏配置列表类型
interface NavListType {
  name: string;
  list: selectListType[];
}

export const navListConf: Ref<NavListType[]> = ref([
  {
    name: "I'm loser",
    list: [
      {
        value: "121",
        label: "sdf",
      },
      {
        value: "123",
        label: "sdf",
      },
      {
        value: "125",
        label: "sdf",
      },
      {
        value: "126",
        label: "sdf",
      },
    ],
  },
]);

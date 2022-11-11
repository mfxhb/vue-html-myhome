/*
 * @Author: mfxhb
 * @Date: 2022-11-10 11:42:49
 * @LastEditTime: 2022-11-11 10:55:00
 * @Description:
 */
import { Ref, ref } from "vue";
import { NavListType } from "../../config/config-typer";

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

/*
 * @Author: mfxhb
 * @Date: 2022-11-11 10:52:03
 * @LastEditTime: 2022-11-12 14:45:10
 * @Description:
 */

import { Component } from "vue";

// 全局的项目静态配置类型
interface GlobalConfig {
  welcomeText: string; // 欢迎语
}

// 导航条上单个选项卡列表类型
interface NavSelectItem {
  label: string; // 标签
  value: string; // 值
}

// 导航条上整个配置类型
interface NavListType {
  name: string; // 按钮名称,单个选项卡的别名
  list: NavSelectItem[]; // 单个选项卡的列表
}
interface CommonType {
  [index: string]: Component;
}
interface RouteItem {
  label: string; // 页面的标签,用来展示在nav上
  value: string; // 页面的别名,也就是注册组件的组件名
  common: CommonType; // 当前页面的组件实例
}

// 页面的整体配置
interface StaticRoutesType {
  name: string; // 单个类别,同时也是 nav上单个选项卡的别名
  pagelist: RouteItem[];
}

export type {
  CommonType,
  StaticRoutesType,
  GlobalConfig,
  NavSelectItem,
  NavListType,
};

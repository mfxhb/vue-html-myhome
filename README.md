### 颜色搭配

```
src\config\themes.ts
圆角,背景,搭配色,还有那些关联了多个元素的变量等等
```

### 整个的静态配置

```
src\config\config.ts
src\config\themes.ts
```

### 右下角小人

```
白嫖的!!
Sakana作者!: https://github.com/itorr/sakana
```

### 按钮改造

```
参照的思否官网的那个按钮,特别舒服,但是不知道思否是怎么实现的,copy不出来,所以用自己的方法写了一个;
用在了select跟button上面
1.伪类after跟before自绝父相实现对select跟button的一个包裹,并且有较宽的边框,before默认是display:none的,after是附加在一个独立的类名上,如果不添加这个类名是不会显示的;
2.当鼠标active状态下将before改成display:block;
3.当鼠标active过后松开,before就恢复成了none,这个时候就需要js来将after的那个独立类名加上了
4.加独立类名前,需要清除也没中所有的after独立类名,也就是(排它思路),清除完之后给当前这个元素单独添加上after,这样就相当于替代了focus聚焦的一个效果
5.鼠标每次点击也要监听当前是否点击在了这类元素上,如果不是需要清除所有的after
6.src\components\cus-select\cus-select.vue文件中可以看到
7.后来发现按钮是有focus状态的,所以就将button直接以focus实现了
```

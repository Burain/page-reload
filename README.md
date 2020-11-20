
### A public link

	A public link function could offer a script link .

```
npm run build-link
```

### Publish

	Publish a npm package .

```
npm run prepublish
npm login
npm publish
```

## LINCESE
	
	MIT

### 参数
| 参数    | 参数描述            | 是否必须  |默认

- 第一个 |  检测时长   | 非必须    | 默认1天 最少10s 单位秒
- 第二个 |      提示信息         | 非必须    |请刷新当前页面，获取最新资源。
- 第三个 |      按钮颜色  | 非必须    | #FF704F

###   案例
```js
import Reload from 'page-reload-com';
Reload.PageReload(120, '请重新加载页面', '#FF704F')
```
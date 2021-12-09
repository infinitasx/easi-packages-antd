# 变更日志

本项目的所有更改都将记录在此文件中。

本文件格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/) ，并且遵循 [Semantic Versioning](https://semver.org/spec/v2.0.0.html) 。

## [0.0.37] - 2021-12-08

### Added

- EASIModal组件新增footerCenter参数，支持默认的底部按钮居中展示
- EASIModal组件新增title插槽支持

## [0.0.36] - 2021-11-26

### Changed

- 去掉组件内style的scoped属性，解决按需加载样式冲突

## [0.0.35] - 2021-11-18

### Added

- EASIProvider组件支持不展示水印
- EASIUploader组件设置动态传入token的header key

### Changed

- 改变按需加载入口

### Fixed

- 修复Uploader组件的UI样式错误

## [0.0.34] - 2021-10-27

### Changed

- 修复隐藏标签栏时，仍然会缓存组件的 bug
- 完善使用文档中 table 使用示例
- 完善使用文档中 EASISetting、EASIProvider、EASIUploader 的使用示例

## [0.0.33] - 2021-10-13

### Added

- 更新和完善使用文档 website

## [0.0.32] - 2021-09-22

### Changed

- EASILayout 组件优化跳转到其他系统浮层 UI

## [0.0.31] - 2021-09-15

### Changed

- EASIUploader 优化 UI

## [0.0.30] - 2021-09-14

### Added

- EASILayout 组件新增选择跳转到其他系统的 UI 展示
- 引入 iconfont.css

### Changed

- EASIUploader 优化 UI

## [0.0.29] - 2021-09-08

- EASILayout 组件新增 v-model:setting 属性，从外部控制设置抽屉的显示隐藏
- EASILayout 组件修复通过外部代码强制关闭定时刷新功能，刷新间隔时间设定为 5 秒

## [0.0.28] - 2021-09-08

- EASIProvider 组件监听水印删除事件，自动生成新的 dom
- EASIProvider 组件修复 waterMarker 属性未触发水印更新的 bug

## [0.0.27] - 2021-09-08

- EASIProvider 组件优化水印功能，被删除后自动新建水印，间隔 5 秒自动刷新水印

## [0.0.26] - 2021-09-07

- EASIProvider 组件添加自动生成水印功能

## [0.0.25] - 2021-09-02

### Added

- 支持按需加载主题
- 按需加载支持指令，工具函数

### Changed

- EASISetting 及 EASILayout 组件文案修改
- 文档补全及同步
- 按需加载增加 Bable

### Fixed

- 修复 EASISetting 及 EASILayout 组件设备 session_id 复制无效的 bug
- 解决 rollup css 图片资源不打包的问题

### Removed

- 去掉 EASIUploader 组件垂直居中效果
- 去掉测试样式

## [0.0.24] - 2021-09-01

### Added

- 新增 EASIUploader 组件
- 添加上传接口生产环境域名
- 新增组件独立样式，支持按需加载

### Changed

- EASILayout 组件历史设备文案修改
- 文档修改，文档示例添加国际化语言

## [0.0.23] - 2021-08-27

### Changed

- EASILayout 组件 userInfo 属性新增 devices 字段，如果存在即会显示用户历史设备信息。（EASISetting 组件已同步更新相同功能）

## [0.0.22] - 2021-08-18

### Added

- EASILayout 组件新增 startYear 属性

## [0.0.21] - 2021-08-17

### Added

- 添加 homepage

### Changed

- 测试环境和生产环境只构建 es、umd、readme 文档

## [0.0.19] - 2021-08-17

### Added

- EASIButton 新增 info、success、danger、warning 四种颜色状态

### Changed

- EASILoading Props 改为 show(v-model)、size、title

## [0.0.18] - 2021-08-17

### Added

- 构建支持生成代码示例

### Changed

- 示例文档路由模式切换为 hash

### Fixed

- 修复示例文档 table 显示异常

## [0.0.17] - 2021-08-17

### Added

- 添加示例网站

## [0.0.16] - 2021-08-11

### Fixed

- 修复苹果浏览器正则表达式解析错误

## [0.0.15] - 2021-08-11

### Changed

- 更新深色模式样式文件，适配 Antd v2.2.x 版本

## [0.0.14] - 2021-08-11

### Fixed

- 修复 Loading 组件初始化时未获取到语言报错

## [0.0.13] - 2021-08-11

### Fixed

- 修复 Loading 组件初始化时未获取到语言报错

## [0.0.12] - 2021-08-11

### Changed

- 修复 KeepAlive 组件缓存未生效的 Bug

## [0.0.11] - 2021-08-10

### Changed

- 锁定@vue/compiler-sfc

### Fixed

- Vite 版本部分方法 TS 校验报错
- 修复@vue/compiler-sfc 版本引起的错误

## [0.0.10] - 2021-08-04

### Removed

- 去除公共函数库的 External 配置

## [0.0.9] - 2021-08-04

### Fixed

- 修复 EASISetting 国际化失败

## [0.0.8] - 2021-08-03

### Changed

- 从 EASILayout 组件内独立出 EASISetting，并暴露给调用方
- 优化 EASISetting 样式和国际化

## [0.0.5] - 2021-08-03

### Added

- 新增 umd 格式资源

## [0.0.4] - 2021-08-02

### Changed

- 修改 EASIProvider 组件，继承自 ant 的 ConfigProvider 组件，实现自动识别组件内部的国际化

## [0.0.3] - 2021-08-02

### Added

- 添加 EASIProvider 组件，初始化语言及全局配置

### Removed

- 移除 vue-i18n 依赖

# 变更日志

本项目的所有更改都将记录在此文件中。

本文件格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/) ，并且遵循 [Semantic Versioning](https://semver.org/spec/v2.0.0.html) 。

## [0.0.20] - 2021-08-17

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

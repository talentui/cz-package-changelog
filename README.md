# cz-changelog

Status:
Part of the [commitizen](https://github.com/commitizen/cz-cli) family. Prompts for [conventional changelog](https://github.com/stevemao/conventional-changelog-angular/blob/master/index.js) standard.

# 如何使用

## 安装

```sh
# yarn
 yarn add commitizen @talentui/cz-package-changelog --dev

# 或者npm 
npm install commitizen @talentui/cz-package-changelog -D
```

## 配置，package.json中添加如下配置

```json
"config": {
    "commitizen": {
      "path": "./node_modules/@talentui/cz-package-changelog"
    }
  }

"script": {
    "commit": "git-cz"
}
```

## 使用

在提交代码执行commit的时候，使用如下方式即可

```sh
# 使用
yarn commit
# 代替
git commit -m 
```


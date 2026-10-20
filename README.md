# 午夜牌局 · 德州撲克

繁體中文單人德州撲克遊戲，與電腦對戰，使用虛擬籌碼。

## 執行

直接開啟 index.html，或使用 Node.js 22 執行 node server.js。
伺服器讀取 PORT 環境變數，預設使用 3000。

## 自動部署

main 分支的 push 事件透過簽章 webhook 觸發 BellD 自動部署，並經過平台檢查。

/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2024-02-27
 *
 * 


\A\p\p\R\a\v\e\n\ \解\锁\会\员\权\限\
\内\购\限\免\嘎\


仅供学习参考，请于下载后24小时内删除

********************************
# 小版本更新请查看更新日志 ｜ 或加入xiaomao组织⬇️
# 微信公众号 【小帽集团】
# XiaoMao · TG通知频道：https://t.me/xiaomaoJT
# XiaoMao · Tg脚本频道：https://t.me/XiaoMaoScript
# XiaoMao · GitHub仓库：https://github.com/xiaomaoJT/QxScript


使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoAppRaven.js

2、已知：内购限免无法显示


[mitm]
hostname = appraven.net

[rewrite_local]

https:\/\/appraven\.net\/appraven\/graphql url script-response-body https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/source/ar.js

********************************/

var obj = JSON.parse(
  $response.body
    .replace(/"premium":false/g, '"premium":true')
    .replace(/"adsEnabled":true/g, '"adsEnabled":false')
    .replace(/"loadAdsOnStartup":true/g, '"loadAdsOnStartup":false')
    .replace(/"adTimerEnabled":true/g, '"adTimerEnabled":false')
    .replace(/You don't have enough permissions./g, "我也想看，但也没辙～")
);
$done({ body: JSON.stringify(obj) });

/******************************

# 脚本功能：WPS解锁稻壳会员
# 软件版本：11.26.0
# 下载地址：http://t.cn/A6ZD2hl3
# 脚本作者：Hausd0rff
# 更新时间：2022-07-05

*******************************
[rewrite_local]
# > WPS解锁稻壳会员
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/JS/WPS/JS/WPSDocerVIPowerCrack.js

[mitm]
hostname = *.docer.wps.cn, vipapi.wps.cn

*******************************/

var __Oxe5403 = ["\x68\x65\x61\x64\x65\x72\x73", "\x43\x6F\x6F\x6B\x69\x65", "\x77\x70\x73\x5F\x73\x69\x64\x3D\x56\x30\x32\x53\x58\x34\x56\x71\x7A\x67\x57\x4F\x77\x5A\x6E\x62\x38\x53\x49\x65\x66\x4C\x39\x61\x77\x5F\x53\x37\x35\x36\x38\x30\x30\x61\x32\x32\x31\x65\x37\x63\x30\x30\x34\x66\x39\x38\x34\x62\x36\x39\x3B\x77\x70\x73\x75\x61\x3D\x56\x31\x42\x54\x56\x55\x45\x76\x4D\x53\x34\x77\x4B\x47\x6C\x76\x63\x79\x31\x76\x5A\x6D\x5A\x70\x59\x32\x55\x36\x4D\x54\x45\x75\x4D\x6A\x59\x75\x4D\x44\x45\x78\x4F\x44\x59\x33\x4D\x44\x74\x70\x55\x47\x68\x76\x62\x6D\x55\x36\x4D\x54\x51\x75\x4D\x6A\x74\x56\x52\x45\x6C\x45\x4C\x55\x52\x43\x52\x54\x49\x32\x4E\x54\x4D\x30\x4C\x54\x59\x35\x51\x55\x45\x74\x4E\x45\x5A\x46\x4D\x69\x31\x43\x52\x54\x52\x43\x4C\x54\x51\x31\x51\x54\x64\x47\x51\x7A\x4D\x31\x4E\x54\x67\x31\x4E\x6A\x70\x68\x56\x6B\x4A\x76\x59\x6A\x49\x31\x62\x43\x6C\x68\x63\x48\x42\x73\x5A\x53\x39\x70\x55\x47\x68\x76\x62\x6D\x55\x78\x4D\x69\x77\x78\x3B\x53\x45\x43\x5F\x53\x45\x53\x53\x49\x4F\x4E\x3D\x62\x65\x33\x33\x38\x61\x65\x35\x2D\x38\x65\x65\x37\x2D\x34\x33\x34\x30\x2D\x39\x63\x30\x32\x2D\x63\x39\x63\x39\x39\x62\x35\x31\x37\x37\x62\x31\x3B\x53\x65\x63\x5F\x55\x73\x65\x72\x5F\x69\x64\x3D\x35\x37\x33\x34\x35\x35\x31\x39", "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74", "\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x57\x70\x73\x69\x4F\x53\x2F\x31\x31\x2E\x32\x36\x2E\x30", "\x49\x50", "\x32\x32\x33\x2E\x35\x2E\x35\x2E\x35", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6C\x6F\x67", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
var hausd0rff = $request[__Oxe5403[0x0]];
hausd0rff[__Oxe5403[0x1]] = __Oxe5403[0x2];
hausd0rff[__Oxe5403[0x3]] = __Oxe5403[0x4];
hausd0rff[__Oxe5403[0x5]] = __Oxe5403[0x6];
$done({
    headers: hausd0rff
});

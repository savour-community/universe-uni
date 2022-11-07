
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/find/find","pages/my/my","pages/market/market","pages/newMarket/index","pages/newMarket/currency","pages/home/addWallet","pages/home/gather","pages/home/transfer","pages/home/propertyDetail","pages/my/myWallet","pages/my/createWallet","pages/my/addWallet","pages/my/keyAdd","pages/my/wordAdd","pages/my/property","pages/my/tradingRecord","pages/my/addressBook","pages/my/addAddress","pages/my/aboutUs","pages/home/flash","pages/home/flashRecord","pages/home/directTransfer","pages/home/walletDetail","pages/home/updatePassword","pages/home/resetPssword","pages/home/importWallet","pages/home/backupWord","pages/home/backupStep","pages/home/validateWord","pages/circle/article","pages/circle/detail","pages/my/setting","pages/my/helpCenter","pages/home/coinDetail","pages/home/exportWord","pages/home/tokenCoin","pages/home/recordDetail","pages/find/swap","pages/newMarket/detail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff"},"tabBar":{"borderStyle":"white","backgroundColor":"#fff","color":"#D6D9E0","selectedColor":"#4C6EF5","list":[{"pagePath":"pages/home/home","iconPath":"static/image/tabbar/home.png","selectedIconPath":"static/image/tabbar/home-selected.png","text":"首页"},{"pagePath":"pages/newMarket/index","iconPath":"static/image/tabbar/market.png","selectedIconPath":"static/image/tabbar/market-selected.png","text":"行情"},{"pagePath":"pages/find/find","iconPath":"static/image/tabbar/find.png","selectedIconPath":"static/image/tabbar/find-selected.png","text":"发现"},{"pagePath":"pages/circle/article","iconPath":"static/image/tabbar/news.png","selectedIconPath":"static/image/tabbar/news-selected.png","text":"资讯"},{"pagePath":"pages/my/my","iconPath":"static/image/tabbar/my.png","selectedIconPath":"static/image/tabbar/my-selected.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Shadow-X","compilerVersion":"3.6.4","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/find/find","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发现","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/market/market","meta":{},"window":{"navigationBarTitleText":"行情","enablePullDownRefresh":false}},{"path":"/pages/newMarket/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"行情","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/newMarket/currency","meta":{},"window":{"navigationBarTitleText":"币种","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/home/addWallet","meta":{},"window":{"navigationBarTitleText":"添加钱包","enablePullDownRefresh":false}},{"path":"/pages/home/gather","meta":{},"window":{"navigationBarTitleText":"收款","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/home/transfer","meta":{},"window":{"navigationBarTitleText":"转账","enablePullDownRefresh":true}},{"path":"/pages/home/propertyDetail","meta":{},"window":{"navigationBarTitleText":"资产详情","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/my/myWallet","meta":{},"window":{"navigationBarTitleText":"我的钱包","enablePullDownRefresh":false}},{"path":"/pages/my/createWallet","meta":{},"window":{"navigationBarTitleText":"创建身份钱包","enablePullDownRefresh":false}},{"path":"/pages/my/addWallet","meta":{},"window":{"navigationBarTitleText":"添加钱包","enablePullDownRefresh":false}},{"path":"/pages/my/keyAdd","meta":{},"window":{"navigationBarTitleText":"私钥导入","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/my/wordAdd","meta":{},"window":{"navigationBarTitleText":"助记词","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/my/property","meta":{},"window":{"navigationBarTitleText":"资产总览","enablePullDownRefresh":false}},{"path":"/pages/my/tradingRecord","meta":{},"window":{"navigationBarTitleText":"交易记录","enablePullDownRefresh":false}},{"path":"/pages/my/addressBook","meta":{},"window":{"navigationBarTitleText":"地址簿","enablePullDownRefresh":true}},{"path":"/pages/my/addAddress","meta":{},"window":{"navigationBarTitleText":"添加地址","enablePullDownRefresh":false}},{"path":"/pages/my/aboutUs","meta":{},"window":{"navigationBarTitleText":"关于我们","enablePullDownRefresh":false}},{"path":"/pages/home/flash","meta":{},"window":{"navigationBarTitleText":"闪兑","enablePullDownRefresh":false,"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#4C6EF5","titleNView":{"buttons":[{"text":"兑换记录","float":"right","fontSize":"14px","width":"80px"}]}}},{"path":"/pages/home/flashRecord","meta":{},"window":{"navigationBarTitleText":"兑换记录","enablePullDownRefresh":true}},{"path":"/pages/home/directTransfer","meta":{},"window":{"navigationBarTitleText":"转账","enablePullDownRefresh":false}},{"path":"/pages/home/walletDetail","meta":{},"window":{"navigationBarTitleText":"钱包详情","enablePullDownRefresh":false}},{"path":"/pages/home/updatePassword","meta":{},"window":{"navigationBarTitleText":"修改密码","enablePullDownRefresh":false}},{"path":"/pages/home/resetPssword","meta":{},"window":{"navigationBarTitleText":"重置密码","enablePullDownRefresh":false}},{"path":"/pages/home/importWallet","meta":{},"window":{"navigationBarTitleText":"导入身份钱包","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/home/backupWord","meta":{},"window":{"navigationBarTitleText":"备份助记词","enablePullDownRefresh":false}},{"path":"/pages/home/backupStep","meta":{},"window":{"navigationBarTitleText":"备份助记词","enablePullDownRefresh":false}},{"path":"/pages/home/validateWord","meta":{},"window":{"navigationBarTitleText":"验证助记词","enablePullDownRefresh":false}},{"path":"/pages/circle/article","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/circle/detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/my/setting","meta":{},"window":{"navigationBarTitleText":"系统设置","enablePullDownRefresh":false}},{"path":"/pages/my/helpCenter","meta":{},"window":{"navigationBarTitleText":"帮助中心","enablePullDownRefresh":false}},{"path":"/pages/home/coinDetail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/exportWord","meta":{},"window":{"navigationBarTitleText":"导出助记词","enablePullDownRefresh":false}},{"path":"/pages/home/tokenCoin","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"autoBackButton":false,"searchInput":{"placeholder":"请输入搜索内容","borderRadius":"20px","backgroundColor":"#eee"},"buttons":[{"text":"取消","float":"right","fontSize":"14px","width":"60px"}]}}},{"path":"/pages/home/recordDetail","meta":{},"window":{"navigationBarTitleText":"交易详情","enablePullDownRefresh":false}},{"path":"/pages/find/swap","meta":{},"window":{"navigationBarTitleText":"swap","enablePullDownRefresh":false}},{"path":"/pages/newMarket/detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});

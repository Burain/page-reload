
declare global {
    interface Window { pageReloadTimmer: any; }
}
var addEvents = function(target:any , eventType:any , handle:any , bubblePart = false){
  if(document.addEventListener){
    addEvents = function(target:any , eventType:any , handle:any){
      target.addEventListener(eventType , handle , bubblePart) ;
    };
  }else{
    // < IE9 才走这里
    addEvents = function(target:any , eventType:any , handle:any){
      target.attachEvent('on' + eventType , function(){
        handle.call(target , arguments) ;
      });
    };
  };
  addEvents(target , eventType , handle) ;
} ;

// 检验
function check(value:any, type:string, defaultValue:any) {
	type = type || 'String';
	if(value) {
		if(Object.prototype.toString.call(value) == '[object ' + type + ']') {
			return value;
		} else {
			console.log(`请输入${type}类型参数。`)
			return defaultValue;
		}
	} else {
		return defaultValue;
	}
}

// 弹框
function alertTip(tips:string,  color: string){
	var alertFram:any = document.createElement("div");
	alertFram.id="alertFram";
	alertFram.style="position: fixed;width: 100%;height: 100%;left: 0;top: 0;text-align: center;line-height: 150px;z-index: 1000;background-color: rgba(0,0,0,0.4);";
	var strHtml='';
	strHtml+='<div style="list-style:none;margin: 0px auto; background-color: white;width: 234px;margin-top: 100px;margin-top: 1;border-radius: 2px;border: 1px solid transparent;">';
	strHtml+='	 <div id="alertFramContext" style="text-align:center;font-size: 16px;line-height: 1.5;color: #111;padding-bottom: 0;padding: 16px;"></div>';
	strHtml+='	 <div style="text-align:center"><div id="alertFramOk" style="margin: 10px auto;width:80px;height: 28px;color:white;font-size: 16px;line-height:28px;outline:none;background-color:' + color + ';border-radius: 2px;cursor: pointer;">刷新</div></div>';
	strHtml+='	</div>';
	alertFram.innerHTML = strHtml;
	document.body.appendChild(alertFram);
	var alertFramContext=document.getElementById("alertFramContext");
	alertFramContext.innerHTML = tips || "";//默认值
}

// 方法
var init = function(time:number, tips:string, color:string){
	if(window.pageReloadTimmer) return;
	window.pageReloadTimmer = setTimeout(() => {
		alertTip(tips, color);
		var okDom = window.document.getElementById('alertFramOk');
		addEvents(okDom , "click" , () => {
			var wraperDom=document.getElementById("alertFram");
			wraperDom.remove();
			window.pageReloadTimmer = null;
			window.location.reload();
		});
	}, time*1000);
}

const PageReload = (timeSecond: number, tips:string, color: string) : void => {
    if (window.document) {
		tips = check(tips, 'String', '请刷新当前页面，获取最新资源。');
		timeSecond = check(timeSecond, 'Number', 86400);
		if(timeSecond < 10) timeSecond = 10;
		color = check(color, 'String', '#FF704F');
		init(timeSecond, tips, color)
		return
	}
} ;

export default PageReload ;
function hyoji(){//表示する文字 
 var str="一文字ずつ表示します。";
                  //テキストボックスの文字数
 var cnt=document.timer.moji.value.length;
                  //文字が全部表示されているか確認
if(cnt<11){　　　　//現在より１文字多く切り出して表示 
 document. timer.moji.value=str.substr(0,cnt+1);} 

else{//すべて表示されたら、空文字に戻す 
    document.timer.moji.value="";}}     
function startfnc(){//関数hyoji()を1000ミリ秒間隔で呼び出す　
    setInterval("hyoji()",1000);}

function mes(){alert("3秒経ちました！");}

function mes2(){document.getElementById('logo2').src='./image/josai2.png';}

var image=new Array();
image[0]=new Image();
image[0]=src="img/josai.png";
image[1]=new Image();
image[1]=src="img/josai2.png";
var cnt=0;
function slidesw()



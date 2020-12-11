(function() {
  'use strict';
  
  //kintoneのレコード一覧画面が表示された時
  kintone.events.on('app.record.index.show', function(event) {
    //↓にコンソールへ「テスト」と表示させる処理を追記しましょう
    console.log('テスト');
    
  });
})();

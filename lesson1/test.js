(() => {
  'use strict';

  const todo = [
    '準備', '実行', '反省'
  ];

  //kintoneのレコード一覧画面が表示された時
  kintone.events.on('app.record.index.show', (event) => {
    todo.forEach((todoItem) => {
      console.log(todoItem);
    });
  });
})();

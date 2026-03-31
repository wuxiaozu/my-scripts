javascript:(function(){
  function smartClick(el){
    if(!el) return;

    const evts = ['mousedown', 'mouseup', 'click', 'input', 'change'];
    evts.forEach(name => {
      let e = new MouseEvent(name, {bubbles:true, cancelable:true, view:window});
      el.dispatchEvent(e);
    });

    if(el.tagName === 'INPUT'){
        el.checked = true;
    }
  }

  let table = document.querySelector("#tag-xianchangjianyan") || document;
  let rows = table.querySelectorAll("tr");
  let targetIds = ["4", "15", "20", "21", "24", "25", "37", "40", "42", "43", "53", "63", "64"];

  rows.forEach(row => {
    let cells = row.cells;
    if(!cells || cells.length === 0) return;
    let rowId = cells[0].innerText.trim();
    
    if(targetIds.includes(rowId)){

      let btn = row.querySelector(".switch-btn-warn") || 
                Array.from(row.querySelectorAll("span, div, i, label, input")).find(el => el.innerText === "无此项");

      if(btn){

        smartClick(btn);
        let children = btn.querySelectorAll("*");
        children.forEach(child => smartClick(child));
        
        console.log("序号 " + rowId + " 正在尝试深度点击...");
      }
    }
  });
})();

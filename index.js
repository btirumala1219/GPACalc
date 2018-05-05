function select(ev) {
  //console.log(ev.srcElement.id);
  var str = ev.srcElement.id
  var res = str.substring(0,2);
  var ress = str.substring(2,3);
  console.log(ress);
  if(res == 'cb') {
    noHighlightCredit();
  }
  else{
    noHighlightGrade();
  }
  document.getElementById(ev.srcElement.id).style.background = "#DAA520";
}

function noHighlightCredit(){

}

function noHighlightGrade(){

}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
(function() {
  document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      // можете делать все что угодно со значением текстового поля
      if (document.getElementsByTagName("input")[0].value != ""){
        const uri = 'https://www.google.ru/search?q='+document.getElementsByTagName("input")[0].value;
        const encoded = encodeURI(uri);
        console.log(encoded);
        //openInNewTab(encoded);
        window.open(encoded, '_self');
      }
    }
  });
})();

/*function SendSearch(){
  const uri = 'https://www.google.ru/search?q=шеллы';
  const encoded = encodeURI(uri);
  console.log(encoded);
  alert(encoded)
} */

let target = document.getElementById('text_01');
target.addEventListener('blur', function () {
   let span = document.getElementById('msg');
   span.innerText = target.value;
});
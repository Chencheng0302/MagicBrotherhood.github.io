function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// 点击下拉菜单意外区域隐藏
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}
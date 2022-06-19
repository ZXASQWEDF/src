function myFunction() {
    // 声明变量
    var input, filter, ul, li, div, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // 循环所有列表，查找匹配项
    for (i = 0; i < li.length; i++) {
        div = li[i].getElementsByTagName("div")[0];
        if (div.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
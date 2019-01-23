
$(function () {
    //访问一般处理程序，获取登录用户名
    $.ajax({
        type: "post",
        url: "https://www.tten.cn/AjaxHelper/GetLogicUserName.ashx",
        success: function (data) {
            if (data == "") {
                //显示登录按钮
                $("#resiger").css("display", "block");
                $("#resigerIcon").css('display', 'inline');
                $("#login").css('display', 'block');
                $("#loginPic").css('display', 'block');
                $("#exitBtn").css('width', '60px');
                $("#userCenter").attr("href", "https://www.tten.cn/Login.aspx");
            }
            else {
                //显示登录名
                $("#resiger").css("display", "none"); 
                $("#resigerIcon").css('display', 'none');
                $("#login").css('display', 'none');
                $("#loginPic").css('display', 'none');
                $("#exitBtn").css('display', 'block');
                $("#exitBtn").css('width', '500px');
                $("#openShop").attr("href", "https://www.tten.cn/Portal/PersonCenter.aspx");
                $("#userName").html(data + "   ");
            }
        }
    });
    //退出登录事件
    $("#userExit").click(function () {
        if (confirm("是否要退出系统！")) {
            delCookie("t");
            delCookie("TechnologyTaoSystem");
            location.reload();
        }
    })
})

/*
 * 按名字清除cookie
 */
function delCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=; expire=" + date.toGMTString() + "; path=/";

}
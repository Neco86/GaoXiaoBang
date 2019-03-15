function validate_form(){
    var loginName = document.getElementById("input_login_name");
    var loginNameStr = loginName.value;
    var password = document.getElementById("inputPassword");
    var passwordStr = password.value;

    var re1 = /^21\d{6}$/;//学号
    var re2 = /^1[34578]\d{9}$/;//手机号
    var re3 = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;//邮箱
    if(loginNameStr==''){
        $("#myModal .modal-title").html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>用户名错误');
        $("#myModal .modal-body").html("用户名不能为空");
        $("#myModal").modal();
        return false;
    }
    if(passwordStr==''){
        $("#myModal .modal-title").html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>密码错误');
        $("#myModal .modal-body").html("密码不能为空");
        $("#myModal").modal();
        return false;
    }
    if (!re1.test(loginNameStr)&&!re2.test(loginNameStr)&&!re3.test(loginNameStr)) {
        $("#myModal .modal-title").html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>用户名错误');
        $("#myModal .modal-body").html("请输入正确的用户名");
        $("#myModal").modal();
        return false;
    }

    return true;
}

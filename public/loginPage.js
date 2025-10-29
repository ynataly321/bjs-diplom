"use strict";
const userForm = new UserForm();
userForm.loginFormCallback = data => {
    ApiConnector.login(data, (function(response){
        if(response.success){
            location.reload();
        }
        userForm.setLoginErrorMessage(response.error);
    }))
};
userForm.registerFormCallback = data => {
    ApiConnector.register(data, (function(response){
        if(response.success){
            location.reload();
        }
        userForm.setRegisterErrorMessage(response.error);
    }))
};

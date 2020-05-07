var loginService = require('../services/LoginService');

exports.login = function(req, res){
    let login = loginService.Login(req.body, function(err, result){
        if(err)
            res.send(err);
        res.send(result);
    })
};

module.exports = {

    user:(app, req, res) =>{

        req.assert('_name', 'Nome obrigatório!').notEmpty();
        req.assert('_email', 'Email obrigatório!').notEmpty();
        req.assert('_password', 'Senha obrigatório!').notEmpty();

        let errors = req.validationErrors();

        if(errors){

            app.utils.error.send(errors, req, res);
            return false;
        }
        else{
            
            return true;
        }
    }
}
const autenticate = (req, res ,next)=>{
    console.log('verificando');
    next();
}

module.exports = autenticate;
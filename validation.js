// validation
const Joi = require('@hapi/joi');

// Register validation
const registerValidation = Joi.object({ 
        name: Joi.string() .min(6) .required(),
        email: Joi.string() .min(6) .required() .email(),
        password: Joi.string() .min(6) .required() 
    }).strict(true)

// Register validation
const loginValidation = Joi.object({ 
    email: Joi.string() .min(6) .required() .email(),
    password: Joi.string() .min(6) .required() 
}).strict(true)


// module.exports = {registerValidation};
module.exports = {loginValidation};
module.exports.registerValidation = registerValidation; //old method
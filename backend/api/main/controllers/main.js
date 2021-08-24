'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        let entity;
        let result;
        const  Email  = ctx.request.body.Email;
        const check = await strapi.services['main'].findOne({ "Email":Email });
        if(!check){
            entity = await strapi.services['main'].create(ctx.request.body);
            await strapi.plugins['email'].services.email.send({
                to: 'brm.mohamed.brm@gmail.com',
                from: 'brm.mohamed.brm@gmail.com',
                subject: 'DO NOT REPLY',
                text: `
                    Hi Mr ${entity.FirstName} , Your CV has been submitted, 
                    We will contact you soon enough.
                `
              });
              return  `Hi Mr ${entity.FirstName} , Your CV has been submitted, We will contact you soon enough.`;
        }
        else {
            return "You have already signed up for an interview, We will contact you soon enough"
        }
    }
};

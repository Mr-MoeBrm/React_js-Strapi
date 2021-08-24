'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
            await strapi.plugins['email'].services.email.send({
                to: 'brm.mohamed.brm@gmail.com',
                from: `${ctx.request.Email}`,
                subject: 'DO NOT REPLY',
                text: `${ctx.request.Subject}`
              });
            return `Hi Mr ${ctx.request.FirstName} , Your email has been submitted, We will contact you soon enough.`;
        
    }
};

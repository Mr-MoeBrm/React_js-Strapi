'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        let entity;
        let conc=true;
        const  Email  = ctx.request.body.Email;
        const check = await strapi.services.candidates.findOne({ "Email":Email });
        const offre = await strapi.services.offre.find({ "id":ctx.request.body.offre });
        if(!check){
          entity = await strapi.services.candidates.create(ctx.request.body);
          await strapi.plugins['email'].services.email.send({
              to: 'brm.mohamed.brm@gmail.com',
              from: 'brm.mohamed.brm@gmail.com',
              subject: 'DO NOT REPLY',
              text: `
                  Hi Mr ${ctx.request.body.FirstName} , Your CV was submitted, 
                  We will contact you soon enough.
              `
            });
            let test=await strapi.services.candidates.update({ "Email":Email },{"offres": offre});
          return  `Hi Mr ${ctx.request.body.FirstName} , Your CV has been submitted, We will contact you soon enough.`;
        }else{
          check.offres.map((submitted)=>(
            submitted.id==ctx.request.body.offre ? conc=false : conc=true
            ));
          if (conc==true) {
            let ar;
            ar=check.offres;
            ar.push(offre[0]);
            entity = await strapi.services.candidates.update({"id":check.id}, {"offres": ar});
            return  `Hi Mr ${ctx.request.body.FirstName} , Your CV has been submitted, We will contact you soon enough.`;
          } else {
                  return `Hi Mr ${ctx.request.body.FirstName} ,You have already signed up for an interview, We will contact you soon enough`;
          }
        }       
      },
}

"use strict";

/**
 *  order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  confirmOrder: async (ctx, next) => {
    const { id } = ctx.request.params;
    await strapi.entityService.update("api::order.order", id, {
      data: {
        confirmed: true,
        date_confirmed: new Date(),
      },
    });

    // send an email after confirmation
    strapi.services("api::order.order").sendEmail(id, ctx.state.user);
    return {
      message: "confirmed",
    };
  },
  async create(ctx, next) {
    const user = ctx.state.user;
    const order = await strapi.entityService.create("api::order.order", {
      data: {
        products: ctx.request.body.data.products,
        owner: user.id,
      },
    });
    return { order };
  },
}));

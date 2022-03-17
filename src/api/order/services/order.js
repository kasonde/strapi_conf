"use strict";

/**
 * order service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::order.order", ({ strapi }) => ({
  async sendEmail(orderId, user) {
    //
    await strapi.plugins["email"].services.email.send({
      to: user.email,
      subject: "Your order has been confirmed",
      text: "Hello world!",
      html: "Hello world!",
    });
  },
}));

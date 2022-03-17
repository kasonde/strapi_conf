"use strict";

/**
 * A set of functions called "actions" for `confirmOrder`
 */

module.exports = {
  // exampleAction: async (ctx, next) => {
  //   try {
  //     ctx.body = 'ok';
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // }
  confirm: async (ctx, next) => {
    ctx.body = "ok";
  },
};

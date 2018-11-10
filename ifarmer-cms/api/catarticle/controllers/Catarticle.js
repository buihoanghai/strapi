'use strict';

/**
 * Catarticle.js controller
 *
 * @description: A set of functions called "actions" for managing `Catarticle`.
 */

module.exports = {

  /**
   * Retrieve catarticle records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.catarticle.search(ctx.query);
    } else {
      return strapi.services.catarticle.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a catarticle record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.catarticle.fetch(ctx.params);
  },

  /**
   * Count catarticle records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.catarticle.count(ctx.query);
  },

  /**
   * Create a/an catarticle record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.catarticle.add(ctx.request.body);
  },

  /**
   * Update a/an catarticle record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.catarticle.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an catarticle record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.catarticle.remove(ctx.params);
  }
};

/**
 * These are the routes that are public and do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * These are the routes used for auth and they require authentication
 * @type {string[]}
 */
export const authRoutes = ["/register/hospital", "/register/donor", "/login"];

/**
 * These are apiAuthPrefix
 */

export const apiAuthPrefix = "/api/auth";

/**
 *
 */
export const DEFAULT_REDIRECT = "/donor";

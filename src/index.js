import sorry from "./sorry.html";

/**
 * @typedef {Object} Env
 */

export default {
	async fetch(request, env, ctx) {
		let response =  new Response(sorry, {
			headers: {
				"content-type": "text/html",
				"cache-control": "max-age=15",
				"x-handon-powered-by": "cfworkers",
			},
			status: 503,
		});

		return response;
	},
};

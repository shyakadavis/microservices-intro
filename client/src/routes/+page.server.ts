import { fail } from '@sveltejs/kit';

export const load = async ({ fetch }) => {
	const data = await fetch('http://localhost:8080/posts', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const posts = await data.json();
	return { posts };
};

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const content = data.get('content');

		try {
			await fetch('http://localhost:8080/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ title, content })
			});
		} catch (error: any) {
			return fail(422, {
				description: data.get('description'),
				error: error.message
			});
		}
	}
};

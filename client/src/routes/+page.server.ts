import { fail } from '@sveltejs/kit';
import type { Comment, Post } from '../utils';

export const load = async ({ fetch }) => {
	const data = await fetch('http://localhost:8080/posts', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const posts = (await data.json()) as Post[];

	// get the comments for each post
	for (const post of posts) {
		const data = await fetch(`http://localhost:8081/posts/${post.id}/comments`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		post.comments = (await data.json()) as Comment[];
	}

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
	},

	comment: async ({ request }) => {
		const data = await request.formData();
		const content = data.get('content');
		const postId = data.get('postId');

		try {
			await fetch(`http://localhost:8081/posts/${postId}/comments`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ content })
			});
		} catch (error: any) {
			return fail(422, {
				description: data.get('description'),
				error: error.message
			});
		}
	}
};

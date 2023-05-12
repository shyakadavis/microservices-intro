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

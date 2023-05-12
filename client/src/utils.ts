export type Post = {
	id: string;
	title: string;
	content: string;
	comments: Comment[];
};

export type Comment = {
	id: string;
	content: string;
};

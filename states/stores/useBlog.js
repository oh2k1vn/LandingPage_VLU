import { createHook, createStore } from 'react-sweet-state';
import { getBlogDetailBySlugAsync, getBlogsBySlugAsync } from '../apis/blog.api';

const getBlogs =
	({ slug, lang }) =>
	async ({ setState, getState }) => {
		const response = await getBlogsBySlugAsync('gioi-thieu', 'vi');
		setState({
			blog: response.data
		});
	};

  const getBlogDetail =
	({ slug, lang }) =>
	async ({ setState, getState }) => {
		const response = await getBlogDetailBySlugAsync('gioi-thieu', 'vi');
		setState({
			blog: response.data
		});
	};

const Store = createStore({
	initialState: {
		blog: {}
	},
	actions: {
		getBlogs,
    getBlogDetail
	},
	name: 'blog'
});

const useBlog = createHook(Store);

export { useBlog };

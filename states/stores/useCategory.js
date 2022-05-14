import { createHook, createStore } from 'react-sweet-state';
import { getCategoriesAsync } from '../apis/category.api';

const getCategories =
	slug =>
	async ({ setState, getState }) => {
		const response = await getCategoriesAsync();
		setState({
			categories: response.data
		});
	};

const Store = createStore({
	initialState: {
		categories: []
	},
	actions: {
		getCategories
	},
	name: 'category'
});

const useCategory = createHook(Store);

export { useCategory };

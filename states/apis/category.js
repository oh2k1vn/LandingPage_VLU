/* eslint-disable no-console */
import axiosClient from './clientAxios.js';

const url = '/category';
const getCategoryBySlugAsync = async (lang = 'vi') => {
	try {
		const result = await axiosClient.get(`${url}`, {
			params: {
				lang: lang
			}
		});
		return (
			result || {
				data: []
			}
		);
	} catch (err) {
		return null;
	}
};

export { getCategoryBySlugAsync };

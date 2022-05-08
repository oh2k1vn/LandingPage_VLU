/* eslint-disable no-console */
import axiosClient from './clientAxios.js';

const url = '/blogs';
const getBlogsBySlugAsync = async (slug = 'gioi-thieu', lang = 'vi') => {
	try {
		const result = await axiosClient.get(`${url}`, {
			params: {
				slug: slug,
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

const getBlogDetailBySlugAsync = async (slug = 'gioi-thieu', lang = 'vi') => {
	try {
		const result = await axiosClient.get(`${url}`, {
			params: {
				slug: slug,
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

export { getBlogsBySlugAsync, getBlogDetailBySlugAsync };

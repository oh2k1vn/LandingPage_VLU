import { getLangLC } from '../../helpers/utils.js';
import axiosClient from './clientAxios.js';

const getCategoriesAsync = async () => {
	try {
		const response = await axiosClient.get('/Category/CategoryGet', {
			headers: {
				language: getLangLC()
			}
		});
		console.log(
			`NCH:  => file: category.api.js => line 9 => response`,
			response
		);
		if (response.data.success) {
			return {
				data: response.data.data
			};
		}
		return {
			data: []
		};
	} catch (err) {
		return {
			data: []
		};
	}
};

export { getCategoriesAsync };

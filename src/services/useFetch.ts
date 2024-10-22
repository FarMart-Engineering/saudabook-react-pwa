import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	CancelToken,
} from "axios";

// Extending AxiosRequestConfig to include a generic type for 'params'.
interface AxiosRequestConfig2<A> extends AxiosRequestConfig {
	params?: A;
}
// Custom AxiosResponse type definition to include status, message, and generic data.
interface CustomAxiosResponse<T> extends AxiosResponse {
	data: {
		status: number;
		message: string;
		data: T;
	};
}

// Interface for the service API instance, defining the HTTP methods with generics.
interface ServiceApiInstance {
	get<A, T>(
		url: string,
		config?: AxiosRequestConfig2<A>,
		cancelToken?: CancelToken,
	): Promise<CustomAxiosResponse<T>>;
	post<A, T>(
		url: string,
		data: A,
		config?: AxiosRequestConfig,
		cancelToken?: CancelToken,
	): Promise<CustomAxiosResponse<T>>;
	put<A, T>(
		url: string,
		data: A,
		config?: AxiosRequestConfig,
		cancelToken?: CancelToken,
	): Promise<CustomAxiosResponse<T>>;
	patch<A, T>(
		url: string,
		data: A,
		config?: AxiosRequestConfig,
		cancelToken?: CancelToken,
	): Promise<CustomAxiosResponse<T>>;
}

// Function to create and configure an Axios instance with optional authorization token.
const useAxios = (): ServiceApiInstance => {
	const token = localStorage?.getItem("token");
	// Configuration for Axios instance, including baseURL and headers.
	const axiosConfig: AxiosRequestConfig = {
		baseURL: process.env.APP_API_BASE_URL,
		responseType: "json",
		withCredentials: false,
		headers: token ? { Authorization: `Bearer ${token}` } : undefined,
	};

	// Creating an Axios instance with the defined configuration.
	const axiosInstance: AxiosInstance = axios.create(axiosConfig);

	// Function to perform a GET request using the Axios instance.
	const get = <A, T>(
		url: string,
		config?: AxiosRequestConfig2<A>,
		cancelToken?: CancelToken,
	): Promise<AxiosResponse<T>> =>
		axiosInstance.get<T>(url, { ...config, cancelToken });

	// Function to perform a POST request.
	const post = <A, T>(
		url: string,
		data: A,
		config?: AxiosRequestConfig,
		cancelToken?: CancelToken,
	): Promise<AxiosResponse<T>> =>
		axiosInstance.post<T>(url, data, { ...config, cancelToken });

	// Function to perform a PUT request.
	const put = <A, T>(
		url: string,
		data: A,
		config?: AxiosRequestConfig,
		cancelToken?: CancelToken,
	): Promise<AxiosResponse<T>> =>
		axiosInstance.put<T>(url, data, { ...config, cancelToken });

	// Function to perform a PATCH request.
	const patch = <A, T>(
		url: string,
		data: A,
		config?: AxiosRequestConfig,
		cancelToken?: CancelToken,
	): Promise<AxiosResponse<T>> =>
		axiosInstance.patch<T>(url, data, { ...config, cancelToken });

	// Returning the object containing the HTTP method implementations.
	return {
		get,
		post,
		put,
		patch,
	};
};

export default useAxios;

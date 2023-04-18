import axios, { AxiosError } from 'axios';
import { LOCATIONS } from 'src/constants/locations';

const BASE_PATH = 'https://pokeapi.co/api/v2';

export const apiClient = axios.create({
  baseURL: BASE_PATH,
});

const errorHandler = (error: AxiosError) => {
  const statusCode = error.response?.status;

  if (statusCode === 404) window.location.href = LOCATIONS.notFound;

  console.error(error, statusCode);

  return Promise.reject(error);
};

apiClient.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});

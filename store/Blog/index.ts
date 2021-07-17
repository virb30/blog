import { Pagination } from '@tryghost/content-api';
import { State } from './types';

export const state = (): State => ({
	posts: [],
	pagination: {} as Pagination,
});

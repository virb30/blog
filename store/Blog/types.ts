import { Pagination } from '@tryghost/content-api';
import { MutationTree, ActionContext, ActionTree, GetterTree } from 'vuex';

export interface Post {
	uuid?: string;
	title?: string;
	feature_image?: string;
	slug?: string;
	updated_at?: string;
}

export interface State {
	posts: Post[];
	pagination: Pagination;
}

export type RootState = ReturnType<() => State>

export interface Getters extends GetterTree<RootState, State> {
	last3Posts: (state: State) => Post[];
}

export enum Mutations {
	SET_POSTS = 'SET_POSTS',
	SET_PAGINATION = 'SET_PAGINATION'
}

export interface MutationsInterface extends MutationTree<RootState> {
	[Mutations.SET_POSTS](s:State, p: Post[]): void;
	[Mutations.SET_PAGINATION](s:State, p: Pagination): void;
}

export enum Actions {
	fetchPosts = 'fetchPosts'
}

export interface ActionsInterface extends ActionTree<RootState, RootState> {
	fetchPosts(actionContext: ActionContext<RootState, RootState>, page: number): Promise<void>
}

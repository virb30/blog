import { MutationTree, ActionContext, ActionTree } from 'vuex';

export interface Post {
	uuid?: string;
	title?: string;
	feature_image?: string;
	slug?: string;
	updated_at?: string;
}

export interface State {
	posts: Post[];
}

export interface Getters {
	last3Posts: (state: State) => Post[];
}

export enum Mutations {
	SET_POSTS = 'SET_POSTS'
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
	[Mutations.SET_POSTS](s:State, p: Post[]): void;
}

export enum Actions {
	fetchPosts = 'fetchPosts'
}

export interface ActionsInterface extends ActionTree<RootState, RootState> {
	fetchPosts(actionContext: ActionContext<RootState, RootState>): Promise<void>
}

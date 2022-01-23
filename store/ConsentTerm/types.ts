import { MutationTree, ActionContext, ActionTree, GetterTree } from 'vuex';

export interface State {
	cookiesPolicyAccepted: Boolean;
}

export type RootState = ReturnType<() => State>

export interface Getters extends GetterTree<RootState, State> {
	getPolicyAccepted: (state: State) => Boolean;
}

export enum Mutations {
	SET_COOKIES_ACCEPTED = 'SET_COOKIES_ACCEPTED',
}

export interface MutationsInterface extends MutationTree<RootState> {
	[Mutations.SET_COOKIES_ACCEPTED](s:State, p: Boolean): void;
}

export enum Actions {
	acceptCookiesPolicy = 'acceptCookiesPolicy',
	fetchFromStorage = 'fetchFromStorage'
}

export interface ActionsInterface extends ActionTree<RootState, RootState> {
	acceptCookiesPolicy(actionContext: ActionContext<RootState, RootState>): void
	fetchFromStorage(actionsContext: ActionContext<RootState, RootState>): void
}

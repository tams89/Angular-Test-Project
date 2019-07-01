import { Injectable } from "@angular/core";
import { EUserActions, GetUsersSuccess, GetUsers } from '../actions/user.actions';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators'
import { ofType, Effect, Actions } from '@ngrx/effects'
import { Store } from '@ngrx/store';

@Injectable()
export class UserEffects {
    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this._userService.getUsers()),
        switchMap(() => of(new GetUsersSuccess([ { name: 'Tamesh' } ])))
    )

    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<AppStore>
    ) {}
}
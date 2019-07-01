import { Action } from '@ngrx/store';
import { IUser } from 'src/app/models/user.interface';

export enum EUserActions {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Sucess',
}

export class GetUsers implements Action {
    public readonly type = EUserActions.GetUsers
}

export class GetUsersSuccess implements Action {
    public readonly type = EUserActions.GetUsersSuccess
    constructor(public payload: IUser[]) {}
}

export type UserActions = GetUsers | GetUsersSuccess
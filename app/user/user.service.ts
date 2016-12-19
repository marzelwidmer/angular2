import { IUserVO, UserDataService } from './user.data';
import { Injectable } from '@angular/core';
/**
 * Created by marcelwidmer on 19.12.16.
 */
@Injectable()
export class UserService {

    constructor(private userDataService: UserDataService){

    }

    /**
     *
     * @param user
     */
     setSelectedUsr(user:IUserVO): void{
         localStorage.setItem('selected', JSON.stringify(user));
     }

    /**
     *
     * @returns {IUserVO}
     */
    getSelectedUsr(): IUserVO{
         return <IUserVO> JSON.parse(localStorage.getItem('selected'));
     }

     getUserList():IUserVO[]{
        return this.userDataService.getUserList();
     }
}
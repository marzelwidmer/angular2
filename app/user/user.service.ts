import { IUserVO } from './user.data';
/**
 * Created by marcelwidmer on 19.12.16.
 */
export class UserService {

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

}
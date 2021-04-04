import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../global-context/userContext";
import * as userReducer from "../global-context/userReducer";
import {__accessTokenKey__, __refreshTokenKey__} from "../constants";

const checkPrevious = (dispatch: any): Boolean => {
    const accessToken = localStorage.getItem(__accessTokenKey__);
    const refreshToken = localStorage.getItem(__refreshTokenKey__);

    return accessToken !== null && refreshToken !== null;
}

const isAuthorized = (user: UserType, allowedRoles: Array<UserRoles>): Boolean => {
    const roles: UserRoles[] = (user?.userInfo?.role || []);
    return user.isLoggedIn && (allowedRoles === undefined || allowedRoles.filter(allowedRole => roles.includes(allowedRole)).length != 0 || allowedRoles.length === 0);
};

const GuardedRoute: React.FC<any> = ({Component, roles, ...rest}) => {

    const {state, dispatch} = React.useContext(UserContext);

    return (
        <Route {...rest} render={(props) => (
            (checkPrevious(dispatch) || isAuthorized(state, roles)) ?
            <Component {...props}/> :
            <Redirect to="/signin"/>
        )}/>
    );
};

export default GuardedRoute;
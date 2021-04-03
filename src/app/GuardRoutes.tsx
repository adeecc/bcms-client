import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../global-context/userContext";

const isAuthorized = (user: UserType, allowedRoles: Array<UserRoles>): Boolean => {
    const roles: UserRoles[] = (user?.userInfo?.role || []);
    return user.isLoggedIn && (allowedRoles === undefined || allowedRoles.filter(allowedRole => roles.includes(allowedRole)).length != 0 || allowedRoles.length === 0);
};

const GuardedRoute: React.FC<any> = ({Component, roles, ...rest}) => {

    const {state} = React.useContext(UserContext);

    return (
        <Route {...rest} render={(props) => (
            isAuthorized(state, roles) ?
            <Component {...props}/> :
            <Redirect to="/signin"/>
        )}/>
    );
};

export default GuardedRoute;
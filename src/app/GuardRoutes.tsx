import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../global-context/userContext";

const isAuthorized = (user: UserType, allowedRoles: Array<UserRoles>): Boolean => {
    const role: UserRoles = (user?.userInfo?.role || 123);
    return user.isLoggedIn && (allowedRoles === undefined || allowedRoles.includes(role) || allowedRoles.length === 0);
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
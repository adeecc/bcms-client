import {client} from "./axiosClient";

const addRoleToUser = async (uid: number | string, rid: number | string) => {
    return await client.post("/admin/role/add", {
        uid: uid,
        rid: rid
    });
}

const removeRoleFromUser = async(uid: number | string, rid: number | string) => {
    return await client.post("/admin/role/delete", {
        uid:uid,
        rid:rid
    });
}

const getAllRoles = async () => {
    return await client.get("/admin/role");
}

export {
    addRoleToUser,
    removeRoleFromUser,
    getAllRoles
}
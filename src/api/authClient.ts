import axiosClient from './axiosClient';

const login = async (username: string, password: string) => {
    //Do this actually
    // await axiosClient.baseClient.post("auth/login", {
    //     username,
    //     password
    // });

    //For now just return random shit
    return {
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZnVsbE5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiaWQiOjEsInVzZXJuYW1lIjoiYXNkYXNkIiwicm9sZSI6InN0dWRlbnQifQ.LbSkYPrr0AlPuuKig2nMA7faPZaoTbgmuBODFwkCK4c",
        refreshToken: "asd"
    }
}

export default {
    login
}
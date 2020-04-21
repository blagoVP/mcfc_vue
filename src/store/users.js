import axiosInstance from '../axios-requests/axios-request';

const users = {
    namespaced: true,
    state: {
        user: null,
        token: null,
        inputUsername: null,
        inputPassword: null
    },
    mutations: {
        setUserInfo(state) {
            state.user = '',
            state.token = ''
        },
        clearUserInfo(state) {
            state.user = null,
            state.token = null
        },
        updateInputUsername(state, value){
            state.inputUsername = value;
        },
        updateInputPassword(state, value){
            state.inputPassword = value;
        },
    },
    actions: {
        postRequest(context, url){
            const data = { username: context.state.inputUsername, password: context.state.inputPassword};
            axiosInstance
            .post(url, data)
            .then(res => {
             context.state.token = res.data._kmd.authtoken;
             context.state.user = res.data.username;
            })
            .catch(err => {
              console.error(err);
              if (url === "/login"){
                alert("Invalid username and/or password");
              }
            });
        }
    },
    getters: {
        user(state){
            return state.user;
        },
        token(state){
            return state.token;
        },
        inputUsername(state){
            return state.inputUsername;
        },
        inputPassword(state){
            return state.inputPassword;
        }
    }
}

export default users;
<script>
import axiosInstance from '../axios-requests/axios-request'
export default {
methods:{
postRequest(url, data){
    axiosInstance
    .post(url, data)
    .then(res => {
      localStorage.setItem('token', res.data._kmd.authtoken);
      localStorage.setItem('user', res.data.username);
      this.$emit("onAuth", localStorage.getItem("user"));
      this.$router.push('/home');
    })
    .catch(err => {
      console.error(err);
      if (url === "/login"){
        alert("Invalid username and/or password");
      }
    });
}
},


}
</script>




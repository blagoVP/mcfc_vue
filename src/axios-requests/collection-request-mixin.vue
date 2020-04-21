<script>
import axiosInstance from "../axios-requests/axios-collection-request";
export default {
  methods: {
    loadSingleNews(id) {
      axiosInstance
        .get(`/${id}`)
        .then(res => {
          this.newsDetails = res.data;
          this.comments = res.data.comments;
        })
        .catch(err => {
          console.error(err);
        });
    },
    putRequest(id, data) {
      axiosInstance
        .put(`/${id}`, data)
        .then(this.$router.push({path: `/details/${id}`,query: {organizer: data.organizer} }))
        .catch(err => {
          console.error(err);
        });
    },
    postRequest(url, data) {
      axiosInstance
        .post(url, data)
        .then(res => {
          console.log(res);
          this.$router.push("/home");
        })
        .catch(err => {
          console.error(err);
        });
    },
    deleteRequest(id) {
      axiosInstance
        .delete(`/${id}`)
        .then(this.$router.push("/home"))
        .catch(err => {
          console.error(err);
        });
    },
    getAllRequest(){
         axiosInstance
        .get()
        .then(res => {
          if (res.data.length == 0){
            this.showEmptyPage = true;
          }
          this.news = res.data;
        })
        .catch(err => {
          console.error(err);
        });    
    },
    // getAllNewsBefore(next, setData){
    //   axiosInstance
    //     .get()
    //     .then(res => {
    //       if (res.data.length == 0){
    //         this.showEmptyPage = true;
    //       }
    //       next((vm)=>{
    //         vm.setData(null, res.data)
    //       });
    //     })    
    // },
    }
  }
</script>
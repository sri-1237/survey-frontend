import http from "../http-common";
class SurveyDataService {
  getAll() {
    return http.get("/surveys");
  }

  createSurvey(name,data,id) {
    return http.post(`/surveys?name=${name}&createdBy=${id}`, data);
  }
  get(id) {
    return http.get(`/surveys/${id}`);
  }

  update(id, name, data) {
    return http.put(`/surveys/${id}?name=${name}`, data);
  }
  delete(id) {
    return http.delete(`/surveys/${id}`);
  }
//   create(data) {
//     return http.post("/albums", data);
//   }

//   createAlbum(title, file, onUploadProgress) {
//     let formData = new FormData();
//     formData.append("file", file);
//     return http.post(`/albums?title=${title}`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data"
//       },
//       onUploadProgress
//     });
//   }

//   update(id, data) {
//     return http.put(`/albums/${id}`, data);
//   }
//   delete(id) {
//     return http.delete(`/albums/${id}`);
//   }
//   deleteAll() {
//     return http.delete(`/albums`);
//   }
//   findByTitle(title) {
//     return http.get(`/albums?title=${title}`);
//   }
}


export default new SurveyDataService();
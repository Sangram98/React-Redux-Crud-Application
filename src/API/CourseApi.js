import Axios from 'axios'

const axiosInstance=Axios.create({
    baseURL:"http://localhost:5000"
});

const CourseApi={
    getAll:()=>{
        return axiosInstance.request({
            url:`/course`,
            method:'GET'
        })
    },
    getById:(id)=>{
        return axiosInstance.request({
            url:`/course/${id}`,
            method:'GET'
        })
    },
    create:(course)=>{
        return axiosInstance.request({
            url:`/course`,
            method:'POST',
            data:course
        })
    },
    update:(course,id)=>{
        return axiosInstance.request({
            url:`/course/${id}`,
            method:'PUT',
            data:course
        })
    },
    delete:(id)=>{
        return axiosInstance.request({
            url:`/course/${id}`,
            method:'DELETE'
        })
    },

}
export default CourseApi;
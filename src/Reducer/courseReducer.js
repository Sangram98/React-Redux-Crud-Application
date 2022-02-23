import { toast } from "react-toastify";
import CourseApi from "../API/CourseApi";


 const CourseReducer=(state=[],action)=>{
    switch(action.type){
        case "ADD_COURSE":
            console.log('payload = ', action.payload);
            CourseApi.create(action.payload).then(res => {
                toast.success("Course Created successfully");
                window.location.href = "/";
            }).catch(err => {
                toast.error(err.message);
            });
            break;

            case "UPDATE_COURSE":
                console.log('payload = ', action.payload);
                CourseApi.update(action.payload.data,action.payload.id)
                .then(res=>{
                    toast.success("Course updated successfully");
                window.location.href = "/";
                }).catch(err => {
                    toast.error(err.message);
                });
                break;



                case "DELETE_COURSE":
                    console.log('payload = ', action.payload);
                    CourseApi.delete(action.payload)
                    .then(res=>{
                        toast.success("delete successfully");
                    window.location.href = "/";
                    }).catch(err => {
                        toast.error(err.message);
                    });
                    break;
    

                    default:return state

    }
}

export default CourseReducer
// action constant
const ADD_COURSE="ADD_COURSE";
const UPDATE_COURSE="UPDATE_COURSE";
const DELETE_COURSE="DELETE_COURSE";


// action methods
export function addCourse(course){
return{
    type:ADD_COURSE,
    payload:course
}
}

export function updateCourse(course,id){
    return{
        type:UPDATE_COURSE,
        payload:{
            id:id,
            data:course
        }
    }
}

export function deleteCourse(id){
    return{
        type:DELETE_COURSE,
        payload:id
    }
}




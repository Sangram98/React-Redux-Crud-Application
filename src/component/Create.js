import React,{useState} from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { addCourse } from '../Action/courseAction';





 function Create(props) {

    const[course,setCourse]=useState({
        title:"",
        fee:"",
        duration:"",
    })

    const{title,fee,duration}=course;

    const changeInput=(e)=>{
     const{name,value}=e.target;
     setCourse({...course,[name]:value})
    }


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(course)
        props.addCourse(course)
       
    }

    const clearInput = (e) => {
        e.preventDefault();
        setCourse({title: "", fee: "", duration: ""})
    }





    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center"></h3>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body text-center shadow-lg">
                             <form action="" onSubmit={(event)=>submitHandler(event)} 
                             onReset={(event) => clearInput(event)}>
                                 <div className="form-group mt-2 mb-2">
                                     <label htmlFor="title">Title</label>
                                     <input type="text" name="title" 
                                     value={title} onChange={(e) => changeInput(e)} id="title" 
                                     className="form-control" required />
                                 </div>
                                 <div className="form-group mt-2 mb-2">
                                    <label htmlFor="title">Fee</label>
                                     <input type="text" name="fee"
                                     value={fee} onChange={(e) => changeInput(e)}
                                      id="fee" className="form-control" required />
                                 </div>
                                 <div className="form-group mt-2 mb-2">
                                     <label htmlFor="title">Duration</label>
                                     <input type="text" name="duration" 
                                     value={duration} onChange={(e) => changeInput(e)}
                                     id="duration" className="form-control" required />
                                 </div>
                                 <div className="form-group mt-2 mb-2">
                                     <input type="submit" value="Create" className="btn btn-outline-success w-100" /><br /><br />
                                     <input type="reset" value="Clear" className='btn btn-outline-danger w-100' />
                                </div>
                             </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            <NavLink to={`/`} className="btn btn-outline-danger  btn-sm float-start">Back to home</NavLink>
            
        </div>
    )
}

//state handler to send the data


const mapStateToProps = (state) => {
    return{}
}
// action dispatcher
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addCourse: addCourse
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Create);

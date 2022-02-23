import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteCourse} from '../Action/courseAction'
import { toast } from 'react-toastify'

 function Home(props) {

const delHandler=(id)=>{
    if(window.confirm("Are you want to delete" + id + "?")){
        props.deleteCourse(id)
    }else{
        toast.warning("Delete Terminated ")
    }
}





    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-center"></h3>
                </div>
            </div>

            <div className="row">
              {
                  props.course.map((item,key) => {
                      return (
                          <div className="col-md-4 mt-2 mb-2" key={key}>
                              <div className="card shadow-lg rounded">
                                  <div className="card-header bg-dark">
                                      <h5 className="text-center text-info"> UserName : {item.title}</h5>
                                  </div>

                                  <div className="card-body">
                                      <p>
                                          <strong>Fee</strong>
                                          <span className='float-end'>{item.fee}</span>
                                      </p>
                                      <p>
                                          <strong>Duration</strong>
                                          <span className='float-end'>{item.duration}</span>
                                      </p>
                                  </div>

                                  <div className="card-footer bg-dark">
                                      <NavLink to={`/update/${item.id}`} className="btn btn-outline-info w-100 btn-sm">Update</NavLink>
                                      <button className='btn btn-outline-danger w-100 btn-sm float-end mt-2'
                                       onClick={()=>delHandler(item.id)}>Delete</button>
                                  </div>
                              </div>
                          </div>
                      )
                  })
              }
          </div>
          
       </div>
            
        
    )
}

const mapStateToProps = (state) => {
    return{
        course:state                            
    }
}
// action dispatcher
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteCourse:deleteCourse
      }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

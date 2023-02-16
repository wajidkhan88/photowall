import React from "react";
import Photo from "./Photo";
import {Link} from 'react-router-dom'

function PhotoWall(props) {
    return(
        <div>
            {/*<button className="addIcon" onClick={props.onNavigate}></button>*/}
            <Link className = "addIcon" to="/AddPhoto"/>
            <div className="photoGrid">
                {props.posts.sort((x,y)=>{
                    return y.id -x.id
                }).map((post,index)=><Photo key={index} post={post} {...props} index={index}/>)}
            </div>
        </div>
    )
}


// class Photowall extends Component{
//     render(){
//         return(
//             <div className="photoGrid">
//                 {this.props.posts.map((post,index)=><Photo key={index} post={post}/>)}
//             </div>
//         )
//     }
// }

export default PhotoWall
import React from "react";
import {Link} from 'react-router-dom'

function Photo(props){
        const post = props.post
        return(
            <figure className="figure">
                <Link to={`/single/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description}/></Link>
                <figcaption><p>{post.description}</p></figcaption>
                <div className="button-container">
                    <button onClick={()=>{
                        props.startRemovingPost(props.index, post.id)
                        props.history.push('/')
                    }}>Remove</button>
                    <Link className="button" to={`/single/${post.id}`}>
                        <div className="comment-count">
                            <div className="speech-bubble"></div>
                            {props.comments[post.id]?props.comments[post.id].length:0}
                        </div>
                    </Link>
                </div>
            </figure>
        )    
}


// class Photo extends Component{
//     render(){
//         const post = this.props.post
//         return(
//             <figure className="figure">
//                 <img className="photo" src={post.imageLink} alt={post.description}/>
//                 <figcaption><p>{post.description}</p></figcaption>
//                 <div className="button-container">
//                     <button className="remove-button">Remove</button>
//                 </div>
//             </figure>
//         )
//     }
// }

export default Photo
import React, { Component } from 'react'
import axios from 'axios'

class Tile extends Component {
    state = {
        show: null
    }
    componentDidMount() {
    //     console.log("tile props", this.props)
        let id = this.props.match.params.show_id;
    //     axios.get('http://api.tvmaze.com/schedule' + id)
    //         .then(res => {
    //             // this.setState({
    //             //     show: res.data
    //             // });
    //             console.log("Tile", res.data);
    //         });
    }
    render() {
        console.log("props tile", this.props)
        // const show = this.state.show ? (
        //     <div className="post">
        //         <h4 className="center">{this.state.show.name}</h4>
        //         {/* <p>{this.state.show.body}</p> */}
        //     </div>
        // ) : (
        //         <div className="center">Loading post...</div>
        //     );
        return (
            <div className="container">
                <h4>blah</h4>
                {/* {show} */}
            </div>
        )
    }
}

export default Tile


// import React, { Component } from 'react'

// class Tile extends Component {
//     state = {
//         id: null
//     }
//     componentDidMount() {
//         let id = this.props.match.params.post_id;
//         this.setState({
//             id
//         })
//     }
//     render() {
//         return (
//             <div className="container">
//                 <h4>{this.state.id}</h4>
//             </div>
//         )
//     }
// }

// export default Tile 
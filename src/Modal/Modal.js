import React, {Component, Fragment} from "react";
import './Modal.css'

export default class Modal extends Component{
    state = {
        isOpen: false
    };

    render() {
        return(
            <Fragment>
                <button onClick={() => this.setState({isOpen: true})}>
                    Open modal
                </button>
                {
                    this.state.isOpen && (
                        <div className='modal'>
                            <div className='modal-body'>
                                <h1>Title</h1>
                                <p>Textrfadsfsfa</p>
                                <button onClick={() => this.setState({isOpen: false})}>close</button>
                            </div>
                        </div>
                    )
                }

            </Fragment>
        )
    }
}
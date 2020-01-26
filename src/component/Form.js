import React from 'react'

const Form = props => (
    <div className="card card-body mx-auto">
        <form onSubmit={props.getData}>
            <div className="form-group">
                <input type="text" placeholder="Topic" className="form-control" name="topic" autoFocus/>
            </div>
            <button className="btn btn-success btn-block">
                Search
            </button>
        </form>
    </div>
)


export default Form;
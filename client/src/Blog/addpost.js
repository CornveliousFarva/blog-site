import React, { useContext } from 'react'
import axios from 'axios'

import history from '../utils/history';
import Context from '../utils/context';
import TextField from '@material-ui/core/TextField';

const AddPost = () => {
    const context = useContext(Context)

    const handleSubmit = (event) => {
        event.PreventDefault()
        const user_id = context.dbProfileState[0].user_id
        const username = context.dbProfileState[0].username
        const data = {title: event.target.title.value, 
                        body: event.targer.body,
                        username: username,
                        uid: user_id}
        axios.post('/api/post/posttodb', data)
            .then(response => console.log(response))
            .catch((err) => console.log(err))
            .then(setTimeout(() => history.replace('/'), 700 ))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    id='title'
                    label='title'
                    margin='normal'
                />
                <br />
                <TextField
                id='body'
                label='Body'
                multiline
                rowsMax='4'
                margin="normal"
                />
                <br />
                <button type='submit'> Submit </button>
                <br />
            </form>
            <button onClick={() => history.replace('/posts')}>Cancel</button>
        </div>
    )
}

export default AddPost
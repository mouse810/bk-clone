import React from 'react'
import { Button, TextField } from '@mui/material'

const First_Step = () => {

    return (
        <div>
            <div>
                <TextField variant="outlined" margin='normal' label="First Name" />
            </div>
            <div>
                <TextField variant="outlined" margin='normal' label="Last Name" />
            </div>
            <div>
                <TextField variant="outlined" margin='normal' label="Contact Name" />
            </div>
            <div>
                <Button variant="contained" size="medium">Next</Button>
            </div>
        </div>
    )
}

export default First_Step
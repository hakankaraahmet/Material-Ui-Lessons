import React from 'react'
import { FormControlLabel,FormControl, FormLabel, Radio, RadioGroup } from '@mui/material'

const RadioButtons = () => {
   
    return (
        <div>
            <RadioGroup> {/* RadioGroup provides us to select only one radio */}
            <Radio 
            value="hello" // just seen in console. this is not a label
            />
            <Radio 
            value="goodBye"
            />
            </RadioGroup>
            <FormControl>
            <FormLabel>Jobs</FormLabel>
            <RadioGroup  defaultValue="Reminders" > 
            <FormControlLabel control={<Radio/>} value="Money" label="Money" />
            <FormControlLabel control={<Radio/>} value="todos" label="todos"/>
            <FormControlLabel control={<Radio/>} value="Reminders" label="reminders"/>
            <FormControlLabel control={<Radio/>} value="work" label="work"/>
            </RadioGroup>
            </FormControl>
        </div>
    )
}

export default RadioButtons

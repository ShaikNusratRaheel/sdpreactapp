import React from 'react'
import "../admin/form.css"
import config from "../config";
export default function SubmitFeedback() {
  return (
    <div className='registration-container'>
        <h3>Feedback</h3>
        <form>
            {/* <input type='text'/> */}
            {/* <fieldset> */}
            <div className='personal-details'>
            <label htmlFor='question'>How effectively does the teacher communicate ideas and instructions?</label><br/>
            <input type="radio" name="communication" value="Excellent"/> Excellent &nbsp;&nbsp;
            <input type="radio" name="communication" value="Good"/> Good &nbsp;&nbsp;
            <input type="radio" name="communication" value="Average"/> Average &nbsp;&nbsp;
            <input type="radio" name="communication" value="Poor"/> Poor<br/><br/>

            <label htmlFor='question'>Are the teacher's explanations clear and easy to understand?</label><br/>
            <input type="radio" name="clarity" value="Always"/> Always&nbsp;&nbsp;
            <input type="radio" name="clarity" value="Most of the time"/> Most of the time&nbsp;&nbsp;
            <input type="radio" name="clarity" value="Sometimes"/> Sometimes&nbsp;&nbsp;
            <input type="radio" name="clarity" value="Rarely"/> Rarely
            </div>
        {/* </fieldset> */}
        <br/><br/><br/>
            <button type='submit' className='submit-btn'>
              Submit
            </button>
        </form>
    </div>
  )
}
import React from "react";

const Applications = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="job-location">Job-Location</label>
                    <select id="job-Location">
                        <option value="">select job-location</option>
                        <option value="IND">India</option>
                        <option value="US">United State</option>
                        <option value="CND">Canada</option>
                        <option value="AUS">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type='checkbox' id='terms'/>I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Applications;

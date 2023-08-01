//!Applications Code 1
// import React from "react";
// const Applications = () => {
//     return (
//         <div>
//             <form>
//                 <div>
//                     <label htmlFor="name">Name</label>
//                     <input type="text" id="name" />
//                 </div>
//                 <div>
//                     <label htmlFor="job-location">Job-Location</label>
//                     <select id="job-Location">
//                         <option value="">select job-location</option>
//                         <option value="IND">India</option>
//                         <option value="US">United State</option>
//                         <option value="CND">Canada</option>
//                         <option value="AUS">Australia</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label>
//                         <input type='checkbox' id='terms'/>I agree to the terms and conditions
//                     </label>
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Applications;

//!Applications Code 2
import React from "react";
const Applications = () => {
    return (
        <>
            <h1>Applications Submit Form </h1> {/*heading 1 */}
            <h2>Sections</h2> {/*heading 2 */}
            <p>Hello, Welcome to Testing Tutorials</p>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" /> {/*input text 1 */}
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea id='bio' name='bio' placeholder="FullName" /> {/*input text2 It is same as input text in react */}
                </div>
                <div>
                    {/* <label htmlFor="job-location">Name</label> */} {/*if the same label name */}
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
                        <input type='checkbox' id='terms' />I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Applications;

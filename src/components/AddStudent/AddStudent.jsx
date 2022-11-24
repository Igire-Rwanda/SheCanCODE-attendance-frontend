
// import '../AddStudent/Addstudent.css';
// import React, { Component } from 'react'

// import ReactDOM from "react-dom";

// export default class AddStudent extends Component {
//   state = {
//     emailValues: [],
//     emailValue: ""
//   };

//   addEmailValue = e => {
//     e.preventDefault();
//     this.setState(({ emailValues, emailValue }) => ({
//       emailValues: [...emailValues, ...emailValue.split(",")],
//       emailValue: ""
//     }));
//   };
//   onSubmit=data=>{
//     // e.preventDefault();
//     // alert(emailValue.value)
//     alert(JSON.stringify(data));
//   }

//   removeEmailValue(index) {
//     this.setState({
//       emailValues: this.state.emailValues.filter((_, i) => i !== index)
//     });
//   }

//   handleEmailValueChange = ({ target: { value } }) => {
//     this.setState({ emailValue: value });
//   };
//   sendChangeValue = {

//   }
//   render() {

//     const { emailValues } = this.state;

//     return (
//       <div>
//         <div className='form-container '>

          
//           <h1>SheCanCODE Attendance Platfom for adding a student</h1>

//         <form onSubmit={this.addEmailValue}>
//           <div>
//             <label>Selected Emails:</label>
//             <input
//               type="text"
//               value={this.state.emailValue}
//               placeholder="example@gmail.com"
//               onChange={this.handleEmailValueChange}
//               required={!this.state.emailValues.length}
//             />
//             {/* <button >
//               Add
//             </button> */}
//           </div>
//           <ul>
//             {this.state.emailValues.map((value, index) => {
//               return (
//                 <li key={index}>
//                   {value},
//                   {/* <button
//                     type="button"
//                     onClick={this.removeEmailValue.bind(this, index)}

//                   >
//                     Remove
//                   </button> */}
//                 </li>
//               );
//             })}
//           </ul>
//           <button  type="submit" className="btn btn-success" onClick={this.onSubmit}>Add student</button>
//         </form>
//         </div>
//         {/* <form> */}
//   {/* <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//          */}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<AddStudent />, document.getElementById("root"));



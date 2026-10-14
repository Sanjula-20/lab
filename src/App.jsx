// import {useState} from 'react';
// function App() {
//   const [name,setName] = useState('');
//   const [gmail,setGmail] = useState('');
//   const [pwd,setPwd] = useState('');
//   function handleSubmit(e) {
//     e.preventDefault();
//     if(name.trim() === '' || gmail.trim() === '' || pwd.trim() === '' || pwd.length !== 8) {
//       alert('Invalid');
//       return;
//     }
//     setName('');
//     setGmail('');
//     setPwd('');
//     alert('Registeration Successful');
//   }
//   return(
//     <>
//     <h1>Registeration form</h1>
//     <form onSubmit={handleSubmit}>
//       <input type='text' placeholder='Enter the name' value={name} 
//       onChange={(e) => setName(e.target.value)} required />
//       <input type='email' placeholder='Enter the email' value={gmail} 
//       onChange={(e) => setGmail(e.target.value)} required />
//       <input type='text' placeholder='Enter the pwd' value={pwd} 
//       onChange={(e) => setPwd(e.target.value)} required />
//       <button type='submit'>Submit</button>
//     </form>
//     </>
//   )
// }
// export default App
import {useState} from 'react';
function App() {
  const [name,setName] = useState('');
  const [gmail,setGmail] = useState('');
  const [pwd,setPwd] = useState('');
  const [cnfpwd,setCnfpwd] = useState('');
  const [otp,setOtp] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if(name.trim() === '' || gmail.trim() === '' || pwd.trim() === '' || pwd.length <= 8 || cnfpwd !== pwd) {
      alert('Invalid Credentials');
      return;
    }
    setName('');
    setGmail('');
    setPwd('');
    setCnfpwd('');
    setOtp('');
    alert('Registeration Successful');
  }
  return(
    <>
    <h1>Registeration form</h1>
    <form onSubmit={handleSubmit}>
      Name:
      <input type='text' placeholder='Enter the name' value={name} 
      onChange={(e) => setName(e.target.value)} required />
      <br></br>
      Gmail:<input type='email' placeholder='Enter the email' value={gmail} 
      onChange={(e) => setGmail(e.target.value)} required />
      <br></br>
      Password:<input type='text' placeholder='Enter the pwd' value={pwd} 
      onChange={(e) => setPwd(e.target.value)} required />
      <br></br>
      Confirm Password:<input type='text' placeholder='Re Enter the password' value={cnfpwd} 
      onChange={(e) => setCnfpwd(e.target.value)} required />
      <br></br>
      OTP:<input type='text' placeholder='OTP' value={otp} 
      onChange={(e) => setOtp(e.target.value)} required />
      <button type='submit'>Submit</button>
      <br></br>
    </form>
    </>
  )
}
export default App
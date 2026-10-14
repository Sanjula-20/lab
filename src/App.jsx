import {useState} from 'react';
function App() {
  const [name,setName] = useState('');
  const [gmail,setGmail] = useState('');
  const [pwd,setPwd] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if(name.trim() === '' || gmail.trim() === '' || pwd.trim() === '' || pwd.length !== 8) {
      alert('Invalid');
      return;
    }
    setName('');
    setGmail('');
    setPwd('');
    alert('Registeration Successful');
  }
  return(
    <>
    <h1>Registeration form</h1>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter the name' value={name} 
      onChange={(e) => setName(e.target.value)} required />
      <input type='email' placeholder='Enter the email' value={gmail} 
      onChange={(e) => setGmail(e.target.value)} required />
      <input type='text' placeholder='Enter the pwd' value={pwd} 
      onChange={(e) => setPwd(e.target.value)} required />
      <button type='submit'>Submit</button>
    </form>
    </>
  )
}
export default App
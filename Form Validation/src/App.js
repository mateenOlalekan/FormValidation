import './App.css';
import { useState} from 'react';

function App() {
  const [values,setValues] = useState({
    firstName:"",
    lastName:"",
    email:"",
    age:"",
    passWord:"",
    confirmPassword:""
  });
  const [submitted,setSubmitted]= useState(false)
  const [valid,setvalid] = useState(false)


    const handleSubmit =(event)=>{
      event.preventDefault();
      setSubmitted(true);
      if(values.firstName&&values.age&&values.lastName&&values.email&&values.confirmPassword&&values.passWord){
        setvalid(true)
      }
    }

    
    

    const handleFirstname=(event)=>{
      setValues({...values,firstName:event.target.value})
    }
    const handleLastname=(event)=>{
      setValues({...values,lastName:event.target.value})
    }
    const handleEmail=(event)=>{
      setValues({...values,email:event.target.value})
    }
    const handleAge=(event)=>{
      setValues({...values,age:event.target.value})
    }
    const handlePassword=(event)=>{
      setValues({...values,passWord:event.target.value})
    }
    const handleConfirmPass=(event)=>{
      setValues({...values,confirmPassword:event.target.value})
    }
    // name = Abdul-matin Bayor-black
    // email = mateen24434@gmail.com
    
  return (
   <form  className="App" onSubmit={handleSubmit}>
        <div className='App-header'>

          {submitted && valid ? <h5>Join over 250  millons users from around the word</h5> : ""}
          <p>Sign Up</p>
          <input placeholder='Enter your First-name' value={values.firstName} onChange={handleFirstname} />

          {submitted&& !values.firstName ?<span>Please enter your firstname</span>:null}

          <input placeholder='Enter your Last-name' value={values.lastName} onChange={handleLastname}/>

          {submitted&& !values.lastName ?<span>Please enter your lastname</span>:null}

          <input placeholder='Enter your Email' type="email"value={values.email} onChange={handleEmail}/>

          {submitted&& !values.age?<span>Please enter your age</span>:null}

          <input placeholder='Enter your Age' value={values.age} onChange={handleAge}/>

          {submitted&& !values.email?<span>Please enter your email</span>:null}
          
          <input placeholder='Enter your Password' value={values.passWord} onChange={handlePassword}/>

          {submitted&& !values.passWord?<span>Please enter your password</span>:null}

          <input placeholder='Reconfirm your confirm password' value={values.confirmPassword} onChange={handleConfirmPass}/>

          {submitted&& !values.confirmPassword?<span>Please enter your confirmed password </span>:null}

          <button className='main' type='submit'>Sign-up</button>
      </div>
    </form>
  ) ;
}

export default App;






















/*
 const [newAdd,setAdd] = useState(0);
  const [add,setCarry] = useState("post");

  const increment =()=> {
    setAdd(newAdd+1)
  }
  const decrement =()=> {
    setAdd(newAdd-1)
  }
 <button onClick={increment}>Increase</button>
        <h2>{newAdd}</h2>
        <button onClick={decrement}>Decrease</button>
        <h3>{add}</h3>
        <button onClick={()=>setCarry("User account")}>User</button>
        <button onClick={()=>setCarry("Your post")}>Post</button>
        <button onClick={()=>setCarry("Comment Displayed")}>Comment</button>

  useEffect(() => {
    console.log("Render when u click")
   }, [add]);

   function App() {
 
  const [windowwidth,setWindowwidth]=useState(window.innerWidth);

  const screen = () =>{
    setWindowwidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('reset',screen)
  })
  return (
   <div className="App">
      <header className="App-header">
        <h2>{windowwidth}</h2>
      </header>
    </div>
  );
  {windowwidth}
}
*/
// import logo from './logo.svg';
// import './App.css';

const Message = (props) => {
  return (
    <div>
      <p style={{color: props.color}}>My name is {props.name}, and i'm {props.age} years old</p>
    </div>
  )
}

const Footer = (author) => {
  return (
    <div>
      greeting app created by {author.name}
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 11
  const b = 20
  console.log(now, a+b)
  console.log("Hello world from console")
  return (
    <div> 
      <p> Hello World </p> 
      <p> Current date is: {now.toString()} </p>
      <p> {a} plus {b} equals {a+b} </p>  
      <Message name="Gianca" age="32" color="red" />
      <Message name="Pauly" age={a+b+1} color="blue"/>
      <Message name="Diego" age={a+b} color="green"/>
      <Footer name="Giancarlo Noseda"/>
    </div>
  )
}

export default App;

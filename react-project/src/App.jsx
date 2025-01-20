import './App.css'

function MyComponent(props){
  console.log(props);
  return(
    <header>
      <h1>This is the header by {props.name}&apos;s</h1>
      <p>©®℗™ {props.year}</p>
    </header>
  )
}

function App() {
  return (
   <MyComponent name="Cristian" year={new Date().getFullYear()}/>
  )
}

export default App

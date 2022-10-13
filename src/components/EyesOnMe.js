function EyesOnMe() {


  function focused() {
  console.log("Good!")
  }
  
  function blurred() {
    console.log("Hey! Eyes on me!")
  }


  return (
    <div>
      <button onBlur={blurred} onFocus={focused}>Eyes on me</button>
    </div>
  )
}
export default EyesOnMe

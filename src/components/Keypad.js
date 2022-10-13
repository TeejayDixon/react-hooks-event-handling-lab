// Code Keypad Component Here

function Keypad() {
    
    function password(e) {
           console.log(e.target.value);
        }


    return (
        <div>
            <input onChange={password} type="password" />
        </div>
    )
}

export default Keypad;
export default function Keypad() {
    function change(onChange) {
        console.log('Entering password...')
    }
        return (
            <input onChange={change} type="password" />
        )
}
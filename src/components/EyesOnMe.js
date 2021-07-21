export default function EyesOnMe() {
    function focus(onFocus){
        console.log('Good!')
    }

    function blur(onBlur){
        console.log('Hey! Eyes on me!')
    }
        return (
            <button onFocus={focus} onBlur={blur}>Eyes on me</button>
        )
}
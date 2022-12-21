import Link from "next/link"

const NotFound = () =>{
    return (
        <div className="Not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p><Link href="/"> Go back to page</Link></p>
        </div>
    )
}
export default NotFound
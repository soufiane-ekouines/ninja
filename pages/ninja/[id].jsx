
//tell next how many html pages nees to be made based on our data
export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const Ndata =  await res.json();


    const paths = Ndata.map(ninja=>{
        return{
            params:{id:ninja.id.toString()}
        }
    })
    return{
       paths,
       fallback:false
    }
}

//fetch each item that we need
export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data = await res.json();

    return{
        props:{ninja:data}
    }
}

const Details = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <h2>{ninja.email}</h2>
            <h3>{ninja.website}</h3>
            <h4>{ninja.address.city}</h4>
        </div>
     );
}
 
export default Details;
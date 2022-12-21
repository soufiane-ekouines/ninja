import styles from "../../styles/Ninja.module.css";

export const getStaticProps = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();

    return{
        props:{ninjas:data}
    }
}

const Ninja = ({ninjas}) => {
    return ( <div>
        <h1> the ninja index</h1>
        {ninjas.map(Ninja=>(
            <div key={Ninja.id}>
                <div className={styles.single}>
                    <h3> {Ninja.name} </h3>
                </div>
            </div>
        ))}
   </div> );
}
 
export default Ninja;
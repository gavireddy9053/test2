function User(props){
    console.log(props)
    return (
        <div>
           <h1>{props.person.name}</h1> 
           <p>{props.person.gender}</p>
           <p>{props.person.age}</p>
        </div>
    )
}
export default User

function sum(a,b){
    console.log(a+b)
}

sum(4,5)
sum(1,2)
sum(90,89)
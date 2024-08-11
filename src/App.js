import './App.css'
import User from './components/User'
export function App(){
    let person1 = [
        {
            name:'Linitha',
            gender:'feamle',
            age:'29'
        },
        {
            name:'abc',
            gender:'amle',
            age:'90'
        },
        {
            name:'abc',
            gender:'amle',
            age:'90'
        }
    ]
    let list = {color:'red',fontSize:'40px'}
    return (
        <div>
      {person1.map((person)=>{
           return <User person={person}/>

      })}
       {/* <User name='abc' gender='male'/>
       <User name='Prathibha' gender='female'/> */}

    </div>
    )
   
}




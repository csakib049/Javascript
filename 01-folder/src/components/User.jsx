// const User=(props)=>{

//     return(
//        <div className="user">
//         <p>Name:{props.name} </p>
//         <p>Age:{props.age}</p>
//         <p>Student:{props.isStudent ? "Yes":"No"}</p>
//        </div>
//     );
// }

// export default User;


const User=(props)=>{

    return(
        <div className="user">
        <h1>His name is {props.name}</h1>
        </div>
    );
}

export default User;
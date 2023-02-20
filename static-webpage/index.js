//The page renders if the components are locally stored in this file,
//but fails when trying to separate the components into their own files,
//Using React through a CDN

// import Header from "./Header";
import {Header} from "./Header";


// const Header = () => {
//     return(
//      <header>
//         <nav className="nav">
//             <img src="react.jpeg" className='nav-image'></img>
//             <ul className="nav-items">
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//      </header>
//     )
// }
const Footer = () => {
    return(
        <footer>© 2023 Riedeman development. All rights reserved.</footer>
    )
}

const Title = () => {
    return(
    <h1>React Title</h1>
    )
}

const Reasons = () => {

    return(
    <ol>
        <li>Reason 1</li>
        <li>Reason 2</li>
        <li>Reason 3</li>
        <li>Reason 4</li>
    </ol>
    )
}


const MainPage = () => {
    return(
    <div>
        <Header />
        <Title/>
        <Reasons/>
        <Footer/>
    </div>
    )
}

ReactDOM.render(<MainPage/>, document.getElementById('root'))




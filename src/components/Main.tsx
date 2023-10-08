import Rock from "../assets/icon-rock.svg"
import Paper from "../assets/icon-paper.svg"
import Scissors from "../assets/icon-scissors.svg"



const main = () => {
    return (  
        <main className="main">
        <div className="main_score-container">
            <div className="main_name-block">
            <h1>ROCK</h1>
            <h1>PAPER</h1>
            <h1>SCISORS</h1>
            </div>
            <div>
                <h3>SCORE</h3>
                <h1>{/* actial score goes here with logic*/}</h1>
            </div>
            <div className="main_rps">
                <button className="main_paper">
                    <img src={Paper}/>
                </button>
                <button className="main_scissors">
                    <img src={Scissors}/>
                </button>
                <button className="main_rock">
                    <img src={Rock}/>
                </button>
            </div>
        </div>  

        </main>
    );
}
 
export default main;
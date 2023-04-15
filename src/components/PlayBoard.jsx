import "../styles/playBoard.css"
import SinglePlayToken from "./SinglePlayToken"
import PickChoiceModal from "./PickChoiceModal"

const PlayBoard = () => {
    
    return(
        <div className="play-board">
            <PickChoiceModal />
        </div>
    )
}

export default PlayBoard
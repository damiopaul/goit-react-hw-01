import Profile from "./Profile/Profile"
import userData from "../userData.json"
import FriendList from "./FriendList/FriendList"
import friends from "../friends.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import transactions from "../transactions.json"

export default function App () {
    return (
        <div>
            <Profile userData={userData}/>
            <FriendList friends={friends} />
            <TransactionHistory items={transactions}/>
        </div>
    )
}
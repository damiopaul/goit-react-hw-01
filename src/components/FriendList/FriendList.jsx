
import FriendListItem from "../FriendListItem/FriendListItem"
import clsx from "clsx";
import css from "./FriendList.module.css"


export default function FriendList ({friends}) {
    return (
        <div className={css.container}>
        <ul className={css.friendList}>
            {friends.map((friend) => {
                return (
                    <li key={friend.id} className={css.friendListItem}>
                        <FriendListItem item={friend}/>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}

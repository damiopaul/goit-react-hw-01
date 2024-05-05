import css from "./FriendListItem.module.css"
import clsx from "clsx";



export default function FriendListItem ({item: {avatar, name, isOnline}}) {

    return (
        <>
            <img src = {avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={clsx(css.status, { [css.isOnline]: isOnline, [css.isOffline]: !isOnline })}>
        {isOnline ? "Online" : "Offline"}</p>
        </>
    )

}
import css from "./Profile.module.css"
import clsx from "clsx";

 export default function Profile  ({userData: {username, tag, location, avatar, stats}}) {
    return (
        <div className={css.container}>
            <div className={css.userProfile}>
          <img className={css.avatar} src={avatar}
          alt="User avatar" width="300" />
          <h2>{username}</h2>
          <p>@{tag}</p>
          <p>{location}</p>
          </div>
          <ul className={css.stats}>
            <li className={css.statsItem}>
                <span className="statsCategory">Followers</span>
                <span className="statNumbers">{stats.followers}</span>
            </li>
            <li className={css.statsItem}>
                <span className="statsCategory">Views</span>
                <span className="statNumbers">{stats.views}</span>
            </li>
            <li className={css.statsItem}>
              <span className="statsCategory">Likes</span>
              <span className="statNumbers">{stats.likes}</span>
            </li>
          </ul>
        </div>
    )
}
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const Friend = ({ name, avatar, isOnline }) => {
    return (
        <li className={css.item}>
            <span
                className={`${css.status} ${isOnline ? css.online : css.offline}`}
            ></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

Friend.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
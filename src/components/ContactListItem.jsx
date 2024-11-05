import PropTypes from 'prop-types';
// import styles from './FriendList.module.css';

export default function ContactListItem ({ id, name, number }) {
    return (
        <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
        </li>
    );
}; 

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export {ContactListItem};
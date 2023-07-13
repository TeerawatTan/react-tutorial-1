import PropTypes from 'prop-types';

const Item = (props) => {

    const {id,title,amount} = props;

    return (
        <li key={id}>{title}<span>{amount}</span></li>
    )
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    last_name: PropTypes.number.isRequired
}

export default Item
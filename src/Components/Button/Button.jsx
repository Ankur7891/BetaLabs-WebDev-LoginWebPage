import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button(props) {
  const { logo, name, color, linkurl } = props;
  const style = {
    backgroundColor: `${color}`,
  };
  return (
    <div className={styles.Container}>
      <Link className={styles.Link} to={linkurl}>
        <div className={styles.Btn} style={style}>
          {logo === '' ? logo : <div className={styles.Logo}>
            <img src={require(`${logo}`)} alt="Google Not Found" />
          </div>}
          <div className={styles.BtName}>{name}</div>
        </div>
      </Link>
    </div>
  );
}

Button.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    linkurl: PropTypes.string.isRequired,
};

Button.defaultProps = {
    logo: "",
    color: "rgba(0, 0, 0, 0.5)",
};

export default Button;

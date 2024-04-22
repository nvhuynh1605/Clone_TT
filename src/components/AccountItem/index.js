import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                alt="name"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>NVA</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;

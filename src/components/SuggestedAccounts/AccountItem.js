// import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import {Wrapper as PopprerWrapper} from '../Popper'
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopprerWrapper>
                <AccountPreview />
            </PopprerWrapper>
        </div>
    )

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-25, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://smurfmania.com/wp-content/uploads/2021/04/winter-wonder-lulu-lol-skin.jpg'
                        alt=''
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>abc</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>ABC</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.popTypes = {

// }

export default AccountItem;
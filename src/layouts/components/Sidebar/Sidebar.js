import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'

import config from '../../../config'
import Menu, { MenuItem } from './Menu';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '../../../components/Icons/Icons';
import SuggestedAccounts from '../../../components/SuggestedAccounts';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label='Suggested accounts' />
            <SuggestedAccounts label='Following accounts' />
            <div className={cx('footer')}>
                <h4 className={cx('title')}>Company</h4>
                <div className={cx('list')}>
                    <Link className={cx('link')} to={'/'}>About</Link>
                    <Link className={cx('link')} to={'/'}>Newsroom</Link>
                    <Link className={cx('link')} to={'/'}>Contact</Link>
                    <Link className={cx('link')} to={'/'}>Careers</Link>
                </div>
                <h4 className={cx('title')}>Program</h4>
                <div className={cx('list')}>
                    <Link className={cx('link')} to={'/'}>TikTok for Good</Link>
                    <Link className={cx('link')} to={'/'}>Advertise</Link>
                    <Link className={cx('link')} to={'/'}>TikTok LIVE Creator Networks</Link>
                    <Link className={cx('link')} to={'/'}>Developers</Link>
                    <Link className={cx('link')} to={'/'}>Transparency</Link>
                    <Link className={cx('link')} to={'/'}>TikTok Rewards</Link>
                    <Link className={cx('link')} to={'/'}>TikTok Embeds</Link>
                </div>
                <h4 className={cx('title')}>Terms & Policies</h4>
                <div className={cx('list')}>
                    <Link className={cx('link')} to={'/'}>Help</Link>
                    <Link className={cx('link')} to={'/'}>Safety</Link>
                    <Link className={cx('link')} to={'/'}>Terms</Link>
                    <Link className={cx('link')} to={'/'}>Privacy Policy</Link>
                    <Link className={cx('link')} to={'/'}>Privacy Center</Link>
                    <Link className={cx('link')} to={'/'}>Creator Academy</Link>
                    <Link className={cx('link')} to={'/'}>Community Guidelines</Link>
                </div>
                <span className={cx('copyright')}>© 2024 TikTok</span>
            </div>
        </aside>
    );
}

export default Sidebar;
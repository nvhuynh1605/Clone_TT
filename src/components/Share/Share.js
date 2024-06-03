import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Share.module.scss';
import { EmailIcon, EmbedIcon, FacebookIcon, LineIcon, LinkIcon, LinkedInIcon, PinterestIcon, RedditIcon, SendFrIcon, TelegramIcon, TwitterIcon, WhatsAppIcon } from "../Icons";

const cx = classNames.bind(styles)

function Share() {

    const lists = [
        {
            to: '/',
            icon: <EmbedIcon />,
            title: 'Embed'
        },
        {
            to: '/',
            icon: <SendFrIcon />,
            title: 'Send to friends'
        },
        {
            to: '/',
            icon: <FacebookIcon />,
            title: 'Share to Facebook'
        },
        {
            to: '/',
            icon: <WhatsAppIcon />,
            title: 'Share to WhatsApp'
        },
        {
            to: '/',
            icon: <LinkIcon />,
            title: 'Copy link'
        },
        {
            to: '/',
            icon: <TwitterIcon />,
            title: 'Share to Twiiter'
        },
        {
            to: '/',
            icon: <LinkedInIcon />,
            title: 'Share to LinkedIn'
        },
        {
            to: '/',
            icon: <RedditIcon />,
            title: 'Share to Reddit'
        },
        {
            to: '/',
            icon: <TelegramIcon />,
            title: 'Share to Telegram'
        },
        {
            to: '/',
            icon: <EmailIcon />,
            title: 'Share to Email'
        },
        {
            to: '/',
            icon: <LineIcon />,
            title: 'Share to Line'
        },
        {
            to: '/',
            icon: <PinterestIcon />,
            title: 'Share to Pinterest'
        },
    ]

    return (
        <div className={cx('wrapper')}>
            <div className={cx('share-items')}>
                {lists.map((list, index) => (
                    <Link key={index} to={list.to} className={cx('link-share')}>
                        <div className={cx('icon')}>{list.icon}</div>
                        <div className={cx('title')}>{list.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Share;
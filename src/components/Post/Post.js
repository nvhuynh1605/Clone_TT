import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Post.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faShare, faStar } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";


import Button from '../Button'
import { Wrapper as PopprerWrapper } from "../Popper";
import AccountPreview from "../SuggestedAccounts/AccountPreview/AccountPreview";
import Share from "../Share/Share";

const cx = classNames.bind(styles)

function Post() {

    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopprerWrapper>
                <AccountPreview />
            </PopprerWrapper>
        </div>
    )

    return (
        <div className={cx('container')}>
            <div className={cx('post-content')}>
                <div>
                    <Tippy
                        interactive
                        delay={[800, 0]}
                        offset={[-10, 17]}
                        placement="bottom-start"
                        render={renderPreview}
                    >
                        <img className={cx('avatar')} src="data:image/jpeg;base64,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" alt="avatar" />
                    </Tippy>
                </div>
                <div className={cx('post')}>
                    <div className={cx('post-info')}>
                        <div className={cx('title')}>
                            <div>
                                <Tippy
                                    interactive
                                    delay={[800, 0]}
                                    offset={[-78, 40]}
                                    placement="bottom-start"
                                    render={renderPreview}
                                >
                                    <Link className={cx('author')}>
                                        <div className={cx('nickname')}>rioma.lyrics</div>
                                        <div className={cx('name')}>A. Lyrics</div>
                                    </Link>
                                </Tippy>
                            </div>
                            <Button outline>Follow</Button>
                        </div>
                        <div className={cx('tag')}>
                            <p>A beautiful image</p>
                            <Link className={cx('tag-name')}><strong>#lyrics</strong></Link>
                            <Link className={cx('tag-name')}><strong>#spotify</strong></Link>
                            <Link className={cx('tag-name')}><strong>#4u</strong></Link>
                        </div>
                        <div className={cx('music')}>original sound - Chris Andrian Yang</div>
                    </div>
                    <div className={cx('post-v-a')}>
                        <img className={cx('post-v')} src="https://img3.thuthuatphanmem.vn/uploads/2019/10/10/anh-background-thien-nhien_033353834.jpg" alt="" />
                        <div className={cx('action-items')}>
                            <button className={cx('action')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                <strong className={cx('label')}>341.5K</strong>
                            </button>
                            <button className={cx('action')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faComment} />
                                <strong className={cx('label')}>27.8K</strong>
                            </button>
                            <button className={cx('action')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faStar} />
                                <strong className={cx('label')}>46.3K</strong>
                            </button>
                            <Tippy
                                interactive
                                delay={[800, 0]}
                                offset={[0, 0]}
                                placement="top-start"
                                render={(props) => (
                                    <div tabIndex="-1" {...props}>
                                        <PopprerWrapper>
                                            <Share />
                                        </PopprerWrapper>
                                    </div>
                                )}
                            >
                                <button className={cx('action')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                                    <strong className={cx('label')}>46.3K</strong>
                                </button>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
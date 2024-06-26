import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';
import Header from './Header';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => { };

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn, }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    }

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <Wrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        onBack={handleBack}
                    ></Header>
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </Wrapper>
        </div>
    )

    // Reset to first menu
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1))
    }

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;

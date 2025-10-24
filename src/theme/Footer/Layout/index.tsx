import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/Footer/Layout';
declare global {
  interface Window {
    __popup_shown?: boolean;
  }
}

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // ✅ 只在整页首次加载时弹窗（F5会触发）
    if (!window.__popup_shown) {
      window.__popup_shown = true; // 标记本次生命周期已显示
      setShowPopup(true);
    }
  }, []);
  return (
    <>
      <footer
        className={clsx('footer', {
          'footer--dark': style === 'dark',
        })}
      >
        <div className="container container-fluid">
          {links}
          {(logo || copyright) && (
            <div className="footer__bottom text--center">
              {logo && <div className="margin-bottom--sm">{logo}</div>}
              {copyright}
            </div>
          )}
        </div>
      </footer>

            {/* ✅ 弹窗区域 */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-window">
            <p>
              🎉 <strong>ThingsGateway</strong>  正在参加
              <strong> Gitee 2025 最受欢迎的开源软件评选活动 </strong>，
              需要你的支持！
            </p>
            <a
              href="https://gitee.com/activity/2025opensource?ident=I4XWR9"
              target="_blank"
              rel="noopener noreferrer"
              className="popup-link"
            >
              👉 前往投票支持
            </a>
            <button onClick={() => setShowPopup(false)} className="popup-close">
              我知道了
            </button>
          </div>
        </div>
      )}
    </>
  );
}

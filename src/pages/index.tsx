import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import components from "@theme/MDXComponents";
import React from "react";
import AndroidIcon from "./android.svg";
import DockerIcon from "./docker.svg";
import "./index.css";
import "./index.own.css";
import KubernetesIcon from "./kubernetes.svg";
import LinuxIcon from "./linux.svg";
import MacOSIcon from "./macos.svg";
import WindowIcon from "./windows.svg";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  // ✅ 添加弹窗状态
  const [showPopup, setShowPopup] = React.useState(false);

  React.useEffect(() => {
    // 页面刷新（或首次加载）时触发弹窗
    setShowPopup(true);
  }, []);

  return (
    <Layout title={`ThingsGateway 说明文档。 ${siteConfig.title}`} description="ThingsGateway 说明文档">
      <Banner />
      <Gitee />

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
    </Layout>
  );
}

function Banner() {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

  return (
    <div className={"ThingsGateway-banner" + (isDarkTheme ? " dark" : "")}>
      <div className="ThingsGateway-banner-container">
        <div className="ThingsGateway-banner-item">
          <div className="ThingsGateway-banner-project">
            <span style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }}>
              ThingsGateway
            </span>
          </div>
          <div style={{ color: "#82aaff", position: "relative", fontSize: 14 }}>
            基于NetCore的跨平台物联网关。
          </div>
          <div className={"ThingsGateway-banner-description" + (isDarkTheme ? " dark" : "")}>
            不只是心血来潮，更是持之以恒
          </div>
          <ul className="ThingsGateway-banner-spec">
            <li>Apache-2.0 宽松开源协议，商业免费授权</li>
            <li>驱动库 支持 .NET Framework 4.5及以上，.NET Standard2.0及以上</li>
            <li>网关 支持 .NET 8</li>
            <li>极速上手，极简使用</li>
          </ul>
          <div className="ThingsGateway-support-platform">受支持平台：</div>
          <div className="ThingsGateway-support-icons">
            <span><WindowIcon height="39" width="39" /></span>
            <span><LinuxIcon height="39" width="39" /></span>
            <span><AndroidIcon height="39" width="39" /></span>
            <span><MacOSIcon height="39" width="39" /></span>
            <span><DockerIcon height="39" width="39" /></span>
            <span><KubernetesIcon height="39" width="39" /></span>
          </div>
          <div className="ThingsGateway-get-start-btn">
            <Link className="ThingsGateway-get-start" to={useBaseUrl("docs")}>
              入门指南
              <span className="ThingsGateway-version">v10</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gitee() {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

  return (
    <div className="ThingsGateway-content">
      <p className={"ThingsGateway-small-title" + (isDarkTheme ? " dark" : "")}>
        开源免费/商业免费授权
      </p>
      <h1 className={"ThingsGateway-big-title" + (isDarkTheme ? " dark" : "")}>
        ⭐️ Apache-2.0 开源协议，代码在 Gitee/Github 平台托管 ⭐️
      </h1>
      <div className="ThingsGateway-gitee-log">
        <div className="ThingsGateway-log-item" style={{ border: "6px solid #723cff" }}>
          <div className={"ThingsGateway-log-jiao" + (isDarkTheme ? " dark" : "")}></div>
          <div className="ThingsGateway-log-number">
            <div style={{ color: "#723cff" }}>1457 +</div>
            <span className={isDarkTheme ? " dark" : ""}>Stars</span>
          </div>
        </div>
        <div className="ThingsGateway-log-item" style={{ border: "6px solid #3fbbfe" }}>
          <div className={"ThingsGateway-log-jiao" + (isDarkTheme ? " dark" : "")}></div>
          <div className="ThingsGateway-log-number">
            <div style={{ color: "#3fbbfe" }}>389 +</div>
            <span className={isDarkTheme ? " dark" : ""}>Forks</span>
          </div>
        </div>
        <div className="ThingsGateway-log-item" style={{ border: "6px solid #1fd898" }}>
          <div className={"ThingsGateway-log-jiao" + (isDarkTheme ? " dark" : "")}></div>
          <div className="ThingsGateway-log-number">
            <div style={{ color: "#1fd898" }}>259,859 +</div>
            <span className={isDarkTheme ? " dark" : ""}>Downloads</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

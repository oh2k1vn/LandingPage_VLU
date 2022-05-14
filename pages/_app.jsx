import Cookie from "js-cookie";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Layout } from "../components/Layout";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  const LayoutCommon = Layout || EmptyLayout;
  const { lang } = useTranslation();

	React.useEffect(() => {
		Cookie.set("lang", lang);
	}, [lang]);

  return (
    <LayoutCommon>
      <Component {...pageProps} />
    </LayoutCommon>
  );
}

const EmptyLayout = ({ children }) => {
	return <>{children}</>;
};

export default MyApp;

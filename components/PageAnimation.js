import browser from 'browser-detect';
import dynamic from 'next/dynamic';
const BoFace = dynamic(() => import('../components/BoFace'), { ssr: false });
const AndrewFace = dynamic(() => import('../components/AndrewFace'), { ssr: false });

const browserResult = browser();

const PageAnimation = (props) => browserResult.name === "safari" ? <AndrewFace /> : <BoFace {...props} />;

export default PageAnimation;

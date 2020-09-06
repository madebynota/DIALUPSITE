import browser from 'browser-detect';
import dynamic from 'next/dynamic';
const BoFace = dynamic(() => import('../components/BoFace'), { ssr: false });
const AndrewFace = dynamic(() => import('../components/AndrewFace'), { ssr: false });

const result = browser();

const PageAnimation = (props) => result.name == "safari" ? <AndrewFace /> : <BoFace {...props} />;

export default PageAnimation;

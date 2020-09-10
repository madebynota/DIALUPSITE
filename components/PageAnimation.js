import { detect } from 'detect-browser';
import dynamic from 'next/dynamic';
const BoFace = dynamic(() => import('../components/BoFace'), { ssr: false });
const AndrewFace = dynamic(() => import('../components/AndrewFace'), { ssr: false });

const browser = detect();

const PageAnimation = (props) => browser.name === "safari" ? <AndrewFace /> : <BoFace {...props} />;

export default PageAnimation;

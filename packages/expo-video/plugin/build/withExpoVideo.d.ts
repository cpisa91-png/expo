import { type ConfigPlugin } from 'expo/config-plugins';
export type WithExpoVideoOptions = {
    supportsBackgroundPlayback?: boolean;
    supportsPictureInPicture?: boolean;
};
declare const withExpoVideo: ConfigPlugin<WithExpoVideoOptions>;
export default withExpoVideo;

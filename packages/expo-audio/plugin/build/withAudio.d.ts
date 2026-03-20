import { ConfigPlugin } from 'expo/config-plugins';
export type Props = {
    microphonePermission?: string | false;
    recordAudioAndroid?: boolean;
    enableBackgroundRecording?: boolean;
    enableBackgroundPlayback?: boolean;
};
declare const _default: ConfigPlugin<void | Props>;
export default _default;

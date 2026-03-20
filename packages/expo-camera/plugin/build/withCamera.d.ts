import { type ConfigPlugin } from 'expo/config-plugins';
export type Props = {
    cameraPermission?: string | false;
    microphonePermission?: string | false;
    recordAudioAndroid?: boolean;
    barcodeScannerEnabled?: boolean;
};
declare const _default: ConfigPlugin<void | Props>;
export default _default;

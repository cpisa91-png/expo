import { ConfigPlugin } from 'expo/config-plugins';
export type Props = {
    faceIDPermission?: string | false;
    configureAndroidBackup?: boolean;
};
declare const _default: ConfigPlugin<void | Props>;
export default _default;

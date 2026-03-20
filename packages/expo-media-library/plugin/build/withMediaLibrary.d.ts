import { ConfigPlugin, AndroidConfig } from 'expo/config-plugins';
type GranularPermission = 'photo' | 'video' | 'audio';
export declare function modifyAndroidManifest(manifest: AndroidConfig.Manifest.AndroidManifest): AndroidConfig.Manifest.AndroidManifest;
export type Props = {
    photosPermission?: string | false;
    savePhotosPermission?: string | false;
    isAccessMediaLocationEnabled?: boolean;
    preventAutomaticLimitedAccessAlert?: boolean;
    granularPermissions?: GranularPermission[];
};
declare const _default: ConfigPlugin<void | Props>;
export default _default;

import { ConfigPlugin } from 'expo/config-plugins';
export type FileSystemProps = {
    supportsOpeningDocumentsInPlace?: boolean;
    enableFileSharing?: boolean;
};
declare const _default: ConfigPlugin<FileSystemProps>;
export default _default;

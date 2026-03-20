import { ConfigPlugin } from 'expo/config-plugins';
export type Props = {
    requestLocationPermission?: boolean;
    locationPermission?: string;
};
declare const _default: ConfigPlugin<void | Props>;
export default _default;

import { ConfigPlugin } from 'expo/config-plugins';
export type Props = {
    calendarPermission?: string | false;
    remindersPermission?: string | false;
};
declare const _default: ConfigPlugin<void | Props>;
export default _default;

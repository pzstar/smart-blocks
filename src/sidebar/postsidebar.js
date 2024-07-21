import {registerPlugin} from '@wordpress/plugins';

import SidebarContent from './content';


registerPlugin('sb-sidebar', {
    render: SidebarContent,
});
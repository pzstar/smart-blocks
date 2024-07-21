import {Notice} from '@wordpress/components';
import {useDispatch, useSelect} from '@wordpress/data';

const Notices = () => {
	const notices = useSelect(select => select('core/notices').getNotices('smart-blocks/notices/template-library'));
	const {removeNotice} = useDispatch('core/notices');
	return (
		<div className="library-modal-error">
			{notices.map(notice => (
				<Notice
					status={notice.status}
					isDismissible={notice.isDismissible}
					onRemove={() => removeNotice(notice.id, 'smart-blocks/notices/template-library')}
					actions={notice.actions}
				>
					{notice.content}
				</Notice>
			))}
		</div>
	);
};

export default Notices;
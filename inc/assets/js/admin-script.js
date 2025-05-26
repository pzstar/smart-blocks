jQuery(document).ready(function ($) {

    var ajaxURL = admin_ajax_script.ajaxurl,
        adminNonce = admin_ajax_script.ajax_nonce;

    var saveFlag = '';
    $('#sb-general-settings-form').data('serialize', $('#sb-general-settings-form').serialize());

    $(document).on('click', '#sb-general-settings-save', function (e) {
        e.preventDefault();
        var data = $('body').find('#sb-general-settings-form').serializeArray();

        $.ajax({
            url: ajaxURL,
            type: 'post',
            data: {
                action: 'admin_settings_save',
                data: data,
                wp_nonce: adminNonce
            },
            beforeSend: function () {
                if (saveFlag == 'yes') {
                    $('#sb-general-settings-form').data('serialize', $('#sb-general-settings-form').serialize());
                }

                if ($('#sb-general-settings-form').serialize() == $('#sb-general-settings-form').data('serialize')) {
                    $('body').find('.sb-admin-notificn').html('No Changes Made!').addClass('sb-previously-saved').show();
                    hideNotification();
                    return false;
                }
            },
            success: function (res) {

                if (res == 'yes') {
                    saveFlag = 'yes';
                    $('body').find('.sb-admin-notificn').html('Saved Successfully!').addClass('sb-saved').show();
                } else {
                    $('body').find('.sb-admin-notificn').html('Save Failed!').addClass('sb-failed').show();
                }
                $('.sb-save-button').removeClass('sb-btn-loading');
                hideNotification();
            }
        });
    });

    /* Save Widgets Button Action */
    $(document).on('click', '#sb-block-selection-btn', function (e) {
        e.preventDefault();

        var blocks_arr = [];
        $.each($('.sb-block-wrap input[name="blocks"]:checked'), function () {
            blocks_arr.push($(this).val());
        });

        $.ajax({
            url: ajaxURL,
            type: 'post',
            data: {
                action: 'sb_blocks_save',
                data: blocks_arr,
                wp_nonce: adminNonce
            },
            beforeSend: function () {
                $('.sb-save-button').addClass('sb-btn-loading');
                // if( Array.isArray(blocks_arr) && blocks_arr.length == 0 ) { }
            },
            success: function (res) {
                if (res == 'yes') {
                    $('body').find('.sb-admin-notificn').html('Saved Successfully!').addClass('sb-saved').show();
                } else {
                    $('body').find('.sb-admin-notificn').html('Save Failed!').addClass('sb-failed').show();
                }

                $('.sb-save-button').removeClass('sb-btn-loading');
                hideNotification();
            }
        });
    });

    /* Hide Notification Div After Time Delay */
    var hideNotification = () => {
        setTimeout(function () {
            $('body').find('.sb-admin-notificn').removeClass('sb-failed sb-saved sb-previously-saved').hide().html('');
        }, 3000);
    };

    /* Enable / Disable All Widgets Button Actions */
    $('body').on('click', '.sb-block-action-btn', function () {
        if ($(this).hasClass('sb-block-enable-all')) {
            $('.sb-block-wrap').find('.sb-block-checkbox').prop('checked', true);
        } else if ($(this).hasClass('sb-block-disable-all')) {
            $('.sb-block-wrap').find('.sb-block-checkbox').prop('checked', false);
        }
    });

    /* Tabs display on tab click for Plugin Menu Settings Page */
    $('body').on('click', '.sb-tab', function () {
        console.log('here');
        var selected_menu = $(this).data('tab');
        var hideDivs = $(this).data('tohide');

        // Display The Clicked Tab Content
        $('body').find('.' + hideDivs).hide();
        $('body').find('#' + selected_menu).show();

        // Add and remove the class for active tab
        $(this).parent().find('.sb-tab').removeClass('nav-tab-active');
        $(this).addClass('nav-tab-active');

        if ($(this).find('input')) {
            $(this).find('input').prop('checked', true);
        }
    });


    $('.sb-htab').on('click', function() {
        var target = $(this).data('tab');

        $('.sb-htab').removeClass('sb-active');
        $(this).addClass('sb-active');

        $('.sb-htab-panel').removeClass('sb-active');
        $('#' + target).addClass('sb-active');
    });






    let gallery_frame, single_frame;

    // === GALLERY ===
    $('button.sb-upload-gallery').on('click', function (e) {
        e.preventDefault();
        const parent = $(this).closest('.sb-settings-input-field');

        if (gallery_frame) {
            gallery_frame.open();
            return;
        }

        gallery_frame = wp.media({
            title: 'Select Images',
            multiple: true,
            library: { type: 'image' },
            button: { text: 'Add to Gallery' }
        });

        gallery_frame.on('select', function () {
            const selection = gallery_frame.state().get('selection');
            const image_ids = [];

            parent.find('.sb-gallery_preview').empty();

            selection.each(function (attachment) {
                const id = attachment.id;
                const url = attachment.attributes.url;
                image_ids.push(id);

                parent.find('.sb-gallery_preview').append(`
                    <div class="sb-gallery-item" data-id="${id}" style="display:inline-block;position:relative;margin:5px;">
                        <img src="${url}" style="max-width:100px;">
                        <button type="button" class="sb-remove-gallery-image" style="position:absolute;top:0;right:0;">×</button>
                    </div>
                `);
            });

            parent.find('.sb-gallery_image_ids').val(image_ids.join(','));
        });

        gallery_frame.open();
    });

    // Remove image from gallery
    $(document).on('click', '.sb-remove-gallery-image', function () {
        const parent = $(this).closest('.sb-settings-input-field');
        const item = $(this).closest('.sb-gallery-item');
        const idToRemove = item.data('id');
        item.remove();

        // Update hidden input
        const remainingIds = parent.find('.sb-gallery-item').map(function () {
            return $(this).data('id');
        }).get();

        parent.find('.sb-gallery_image_ids').val(remainingIds.join(','));
    });

    // === SINGLE IMAGE ===
    $('button.sb-upload_single_button').on('click', function (e) {
        e.preventDefault();
        const parent = $(this).closest('.sb-settings-input-field');

        if (single_frame) {
            single_frame.open();
            return;
        }

        single_frame = wp.media({
            title: 'Select an Image',
            multiple: false,
            library: { type: 'image' },
            button: { text: 'Set Image' }
        });

        single_frame.on('select', function () {
            const attachment = single_frame.state().get('selection').first().toJSON();
            parent.find('.sb-single_image_preview').html(`
                <div class="single-image-container" data-id="${attachment.id}" style="display:inline-block;position:relative;">
                    <img src="${attachment.url}" style="max-width:150px;">
                    <button type="button" class="sb-remove-single-image" style="position:absolute;top:0;right:0;">×</button>
                </div>
            `);
            parent.find('sb-single_image_id').val(attachment.id);
        });

        single_frame.open();
    });

    // Remove single image
    $(document).on('click', '.sb-remove-single-image', function () {
        $('.sb-single_image_preview').empty();
        $('.sb-single_image_id').val('');
    });

    $('.sb-color-field').wpColorPicker();
});
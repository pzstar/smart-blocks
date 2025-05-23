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
});
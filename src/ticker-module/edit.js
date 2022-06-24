import { __ } from '@wordpress/i18n';
import { RawHTML, useState } from '@wordpress/element';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { format, dateI18n, __experimentalGetSettings } from '@wordpress/date';
import {
    useBlockProps,
    InspectorControls,
    RichText,
    store as blockEditorStore
} from '@wordpress/block-editor';
import {
    PanelBody,
    ToggleControl,
    TextControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import Typography from '../utils/typography';
import GoogleFontLoad from '../utils/googlefontload';
import Color from '../utils/color';
import Tabs from '../utils/tabs';
import PanelTabs from '../utils/paneltabs';
import Select from '../utils/select';
import Dimension from '../utils/dimension';
import QueryTaxonomyControls from '../utils/querytaxonomycontrols';
import CustomRangeControl from '../utils/customrangecontrol';
import TokenMultiSelectControl from '../utils/token-multiselect-control';
import OwlCarousel from 'react-owl-carousel';
import Border from '../utils/border';
import BoxShadow from '../utils/boxshadow';

export default function Edit({ attributes, setAttributes }) {
    const [device, setDevice] = useState('lg');
    const {
        id,
        style,
        order,
        orderBy,
        excludePosts,
        categories,
        tickerTitleTypography,
        postsPostType,
        offset,
        autoplay,
        pause,
        noOfPosts,
        tickerTitle,
        tickerTitleBgColor,
        tickerTitleColor,
        tickerContent,
        tickerContentBgColor,
        tickerContentColor,
        tickerContentHoverColor,
        tickerContentTypography,
        navNormalBgColor,
        navIconNormalColor,
        navHoverBgColor,
        navIconHoverColor,
        blockMargin,
        blockPadding,
        borderNormal,
        borderHover,
        borderNormalColor,
        borderHoverColor,
        borderNormalWidth,
        borderHoverWidth,
        borderNormalRadius,
        borderHoverRadius,
        borderNormalBoxShadow,
        borderHoverBoxShadow,
        blockBgColor
    } = attributes;

    setAttributes({ id: useBlockProps()['id'] });
    const stylesCSS = `#${id} {
        ${borderNormal ? '--sb-border-normal: ' + borderNormal +';' : ''}
        ${borderHover ? '--sb-border-hover: ' + borderNormal +';' : ''}
        ${borderNormalColor ? '--sb-border-normal-color: ' + borderNormalColor +';' : ''}
        ${borderHoverColor ? '--sb-border-hover-color: ' + borderHoverColor +';' : ''}
        ${borderNormalWidth.top ? '--sb-border-normal-width-top: ' + borderNormalWidth.top + borderNormalWidth.unit +';' : ''}
        ${borderNormalWidth.right ? '--sb-border-normal-width-right: ' + borderNormalWidth.right + borderNormalWidth.unit +';' : ''}
        ${borderNormalWidth.bottom ? '--sb-border-normal-width-bottom: ' + borderNormalWidth.bottom + borderNormalWidth.unit +';' : ''}
        ${borderNormalWidth.left ? '--sb-border-normal-width-left: ' + borderNormalWidth.left + borderNormalWidth.unit +';' : ''}
        ${borderHoverWidth.top ? '--sb-border-hover-width-top: ' + borderHoverWidth.top + borderHoverWidth.unit +';' : ''}
        ${borderHoverWidth.right ? '--sb-border-hover-width-right: ' + borderHoverWidth.right + borderHoverWidth.unit +';' : ''}
        ${borderHoverWidth.bottom ? '--sb-border-hover-width-bottom: ' + borderHoverWidth.bottom + borderHoverWidth.unit +';' : ''}
        ${borderHoverWidth.left ? '--sb-border-hover-width-left: ' + borderHoverWidth.left + borderHoverWidth.unit +';' : ''}
        ${borderNormalRadius.top ? '--sb-border-normal-radius-top: ' + borderNormalRadius.top + borderNormalRadius.unit +';' : ''}
        ${borderNormalRadius.right ? '--sb-border-normal-radius-right: ' + borderNormalRadius.right + borderNormalRadius.unit +';' : ''}
        ${borderNormalRadius.bottom ? '--sb-border-normal-radius-bottom: ' + borderNormalRadius.bottom + borderNormalRadius.unit +';' : ''}
        ${borderNormalRadius.left ? '--sb-border-normal-radius-left: ' + borderNormalRadius.left + borderNormalRadius.unit +';' : ''}
        ${borderHoverRadius.top ? '--sb-border-hover-radius-top: ' + borderHoverRadius.top + borderHoverRadius.unit +';' : ''}
        ${borderHoverRadius.right ? '--sb-border-hover-radius-right: ' + borderHoverRadius.right + borderHoverRadius.unit +';' : ''}
        ${borderHoverRadius.bottom ? '--sb-border-hover-radius-bottom: ' + borderHoverRadius.bottom + borderHoverRadius.unit +';' : ''}
        ${borderHoverRadius.left ? '--sb-border-hover-radius-left: ' + borderHoverRadius.left + borderHoverRadius.unit +';' : ''}
        ${borderNormalBoxShadow.horizontal ? '--sb-border-normal-box-shadow-horizontal: ' + borderNormalBoxShadow.horizontal +'px;' : ''}
        ${borderNormalBoxShadow.vertical ? '--sb-border-normal-box-shadow-vertical: ' + borderNormalBoxShadow.vertical +'px;' : ''}
        ${borderNormalBoxShadow.blur ? '--sb-border-normal-box-shadow-blur: ' + borderNormalBoxShadow.blur +'px;' : ''}
        ${borderNormalBoxShadow.spread ? '--sb-border-normal-box-shadow-spread: ' + borderNormalBoxShadow.spread +'px;' : ''}
        ${borderNormalBoxShadow.color ? '--sb-border-normal-box-shadow-color: ' + borderNormalBoxShadow.color +';' : ''}
        ${borderNormalBoxShadow.inset ? '--sb-border-normal-box-shadow-inset: ' + borderNormalBoxShadow.inset +';' : ''}
        ${borderHoverBoxShadow.horizontal ? '--sb-border-hover-box-shadow-horizontal: ' + borderHoverBoxShadow.horizontal +'px;' : ''}
        ${borderHoverBoxShadow.vertical ? '--sb-border-hover-box-shadow-vertical: ' + borderHoverBoxShadow.vertical +'px;' : ''}
        ${borderHoverBoxShadow.blur ? '--sb-border-hover-box-shadow-blur: ' + borderHoverBoxShadow.blur +'px;' : ''}
        ${borderHoverBoxShadow.spread ? '--sb-border-hover-box-shadow-spread: ' + borderHoverBoxShadow.spread +'px;' : ''}
        ${borderHoverBoxShadow.color ? '--sb-border-hover-box-shadow-color: ' + borderHoverBoxShadow.color +';' : ''}
        ${borderHoverBoxShadow.inset ? '--sb-border-hover-box-shadow-inset: ' + borderHoverBoxShadow.inset +';' : ''}
        ${blockBgColor ? '--sb-block-bg-color: ' + blockBgColor +';' : ''}
        ${blockMargin.sm.top ? '--sb-block-margin-top-sm: ' + blockMargin.sm.top + blockMargin.unit +';' : ''}
        ${blockMargin.sm.right ? '--sb-block-margin-right-sm: ' + blockMargin.sm.right + blockMargin.unit +';' : ''}
        ${blockMargin.sm.bottom ? '--sb-block-margin-bottom-sm: ' + blockMargin.sm.bottom + blockMargin.unit +';' : ''}
        ${blockMargin.sm.left ? '--sb-block-margin-left-sm: ' + blockMargin.sm.left + blockMargin.unit +';' : ''}
        ${blockMargin.md.top ? '--sb-block-margin-top-md: ' + blockMargin.md.top + blockMargin.unit +';' : ''}
        ${blockMargin.md.right ? '--sb-block-margin-right-md: ' + blockMargin.md.right + blockMargin.unit +';' : ''}
        ${blockMargin.md.bottom ? '--sb-block-margin-bottom-md: ' + blockMargin.md.bottom + blockMargin.unit +';' : ''}
        ${blockMargin.md.left ? '--sb-block-margin-left-md: ' + blockMargin.md.left + blockMargin.unit +';' : ''}
        ${blockMargin.lg.top ? '--sb-block-margin-top-lg: ' + blockMargin.lg.top + blockMargin.unit +';' : ''}
        ${blockMargin.lg.right ? '--sb-block-margin-right-lg: ' + blockMargin.lg.right + blockMargin.unit +';' : ''}
        ${blockMargin.lg.bottom ? '--sb-block-margin-bottom-lg: ' + blockMargin.lg.bottom + blockMargin.unit +';' : ''}
        ${blockMargin.lg.left ? '--sb-block-margin-left-lg: ' + blockMargin.lg.left + blockMargin.unit +';' : ''}
        ${blockPadding.sm.top ? '--sb-block-padding-top-sm: ' + blockPadding.sm.top + blockPadding.unit +';' : ''}
        ${blockPadding.sm.right ? '--sb-block-padding-right-sm: ' + blockPadding.sm.right + blockPadding.unit +';' : ''}
        ${blockPadding.sm.bottom ? '--sb-block-padding-bottom-sm: ' + blockPadding.sm.bottom + blockPadding.unit +';' : ''}
        ${blockPadding.sm.left ? '--sb-block-padding-left-sm: ' + blockPadding.sm.left + blockPadding.unit +';' : ''}
        ${blockPadding.md.top ? '--sb-block-padding-top-md: ' + blockPadding.md.top + blockPadding.unit +';' : ''}
        ${blockPadding.md.right ? '--sb-block-padding-right-md: ' + blockPadding.md.right + blockPadding.unit +';' : ''}
        ${blockPadding.md.bottom ? '--sb-block-padding-bottom-md: ' + blockPadding.md.bottom + blockPadding.unit +';' : ''}
        ${blockPadding.md.left ? '--sb-block-padding-left-md: ' + blockPadding.md.left + blockPadding.unit +';' : ''}
        ${blockPadding.lg.top ? '--sb-block-padding-top-lg: ' + blockPadding.lg.top + blockPadding.unit +';' : ''}
        ${blockPadding.lg.right ? '--sb-block-padding-right-lg: ' + blockPadding.lg.right + blockPadding.unit +';' : ''}
        ${blockPadding.lg.bottom ? '--sb-block-padding-bottom-lg: ' + blockPadding.lg.bottom + blockPadding.unit +';' : ''}
        ${blockPadding.lg.left ? '--sb-block-padding-left-lg: ' + blockPadding.lg.left + blockPadding.unit +';' : ''}
        ${tickerTitleTypography.family ? '--sb-ticker-title-typo-family: ' + tickerTitleTypography.family +';' : ''}
        ${tickerTitleTypography.weight ? '--sb-ticker-title-typo-weight: ' + tickerTitleTypography.weight.replace(/\D/g, '') +';' : ''}
        ${tickerTitleTypography.weight ? '--sb-ticker-title-typo-style: ' + tickerTitleTypography.weight.replace(/\d+/g, '') +';' : ''}
        ${tickerTitleTypography.textTransform ? '--sb-ticker-title-typo-tt: ' + tickerTitleTypography.textTransform +';' : ''}
        ${tickerTitleTypography.textDecoration ? '--sb-ticker-title-typo-td: ' + tickerTitleTypography.textDecoration +';' : ''}
        ${tickerTitleTypography.fontSize.sm ? '--sb-ticker-title-typo-fs-sm: ' + tickerTitleTypography.fontSize.sm + tickerTitleTypography.fontSize.unit +';' : ''}
        ${tickerTitleTypography.fontSize.md ? '--sb-ticker-title-typo-fs-md: ' + tickerTitleTypography.fontSize.md + tickerTitleTypography.fontSize.unit +';' : ''}
        ${tickerTitleTypography.fontSize.lg ? '--sb-ticker-title-typo-fs-lg: ' + tickerTitleTypography.fontSize.lg + tickerTitleTypography.fontSize.unit +';' : ''}
        ${tickerTitleTypography.letterSpacing.sm ? '--sb-ticker-title-typo-ls-sm: ' + tickerTitleTypography.letterSpacing.sm + tickerTitleTypography.letterSpacing.unit +';' : ''}
        ${tickerTitleTypography.letterSpacing.md ? '--sb-ticker-title-typo-ls-md: ' + tickerTitleTypography.letterSpacing.md + tickerTitleTypography.letterSpacing.unit +';' : ''}
        ${tickerTitleTypography.letterSpacing.lg ? '--sb-ticker-title-typo-ls-lg: ' + tickerTitleTypography.letterSpacing.lg + tickerTitleTypography.letterSpacing.unit +';' : ''}
        ${tickerTitleTypography.lineHeight.sm ? '--sb-ticker-title-typo-lh-sm: ' + tickerTitleTypography.lineHeight.sm + tickerTitleTypography.lineHeight.unit +';' : ''}
        ${tickerTitleTypography.lineHeight.md ? '--sb-ticker-title-typo-lh-md: ' + tickerTitleTypography.lineHeight.md + tickerTitleTypography.lineHeight.unit +';' : ''}
        ${tickerTitleTypography.lineHeight.lg ? '--sb-ticker-title-typo-lh-lg: ' + tickerTitleTypography.lineHeight.lg + tickerTitleTypography.lineHeight.unit +';' : ''}
        ${tickerTitleBgColor ? '--sb-ticker-title-bg-color: ' + tickerTitleBgColor +';' : ''}
        ${tickerTitleColor ? '--sb-ticker-title-color: ' + tickerTitleColor +';' : ''}
        ${tickerContentBgColor ? '--sb-ticker-content-bg-color: ' + tickerContentBgColor +';' : ''}
        ${tickerContentColor ? '--sb-ticker-content-color: ' + tickerContentColor +';' : ''}
        ${tickerContentHoverColor ? '--sb-ticker-content-hover-color: ' + tickerContentHoverColor +';' : ''}
        ${navNormalBgColor ? '--sb-nav-normal-bg-color: ' + navNormalBgColor +';' : ''}
        ${navIconNormalColor ? '--sb-nav-icon-normal-color: ' + navIconNormalColor +';' : ''}
        ${navHoverBgColor ? '--sb-nav-hover-bg-color: ' + navHoverBgColor +';' : ''}
        ${navIconHoverColor ? '--sb-nav-icon-hover-color: ' + navIconHoverColor +';' : ''}
        ${tickerContentTypography.family ? '--sb-ticker-content-typo-family: ' + tickerContentTypography.family +';' : ''}
        ${tickerContentTypography.weight ? '--sb-ticker-content-typo-weight: ' + tickerContentTypography.weight.replace(/\D/g, '') +';' : ''}
        ${tickerContentTypography.weight ? '--sb-ticker-content-typo-style: ' + tickerContentTypography.weight.replace(/\d+/g, '') +';' : ''}
        ${tickerContentTypography.textTransform ? '--sb-ticker-content-typo-tt: ' + tickerContentTypography.textTransform +';' : ''}
        ${tickerContentTypography.textDecoration ? '--sb-ticker-content-typo-td: ' + tickerContentTypography.textDecoration +';' : ''}
        ${tickerContentTypography.fontSize.sm ? '--sb-ticker-content-typo-fs-sm: ' + tickerContentTypography.fontSize.sm + tickerContentTypography.fontSize.unit +';' : ''}
        ${tickerContentTypography.fontSize.md ? '--sb-ticker-content-typo-fs-md: ' + tickerContentTypography.fontSize.md + tickerContentTypography.fontSize.unit +';' : ''}
        ${tickerContentTypography.fontSize.lg ? '--sb-ticker-content-typo-fs-lg: ' + tickerContentTypography.fontSize.lg + tickerContentTypography.fontSize.unit +';' : ''}
        ${tickerContentTypography.letterSpacing.sm ? '--sb-ticker-content-typo-ls-sm: ' + tickerContentTypography.letterSpacing.sm + tickerContentTypography.letterSpacing.unit +';' : ''}
        ${tickerContentTypography.letterSpacing.md ? '--sb-ticker-content-typo-ls-md: ' + tickerContentTypography.letterSpacing.md + tickerContentTypography.letterSpacing.unit +';' : ''}
        ${tickerContentTypography.letterSpacing.lg ? '--sb-ticker-content-typo-ls-lg: ' + tickerContentTypography.letterSpacing.lg + tickerContentTypography.letterSpacing.unit +';' : ''}
        ${tickerContentTypography.lineHeight.sm ? '--sb-ticker-content-typo-lh-sm: ' + tickerContentTypography.lineHeight.sm + tickerContentTypography.lineHeight.unit +';' : ''}
        ${tickerContentTypography.lineHeight.md ? '--sb-ticker-content-typo-lh-md: ' + tickerContentTypography.lineHeight.md + tickerContentTypography.lineHeight.unit +';' : ''}
        ${tickerContentTypography.lineHeight.lg ? '--sb-ticker-content-typo-lh-lg: ' + tickerContentTypography.lineHeight.lg + tickerContentTypography.lineHeight.unit +';' : ''}
    }`
    setAttributes({ style: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "") });

    const allTaxonomies = useSelect((select) => {
        var allTax = [];
        var selectTaxonomiesTypes = select('core').getTaxonomies();
        selectTaxonomiesTypes?.forEach((el)=>{
            if(el.visibility.show_in_nav_menus === true && el.types[0] == postsPostType){
            allTax.push({
                value: el.slug,
                label: el.name
            })}
        });
        return allTax;
    }, [postsPostType]);

    const taxTermSelected = (taxonomy) => {
        var termIDs = categories && categories[taxonomy] ? categories[taxonomy] : [];
        return termIDs;
    }

    const query = {
        per_page: noOfPosts,
        _embed: true,
        order,
        orderby: orderBy,
        offset: parseInt(offset ? offset : 0),
        exclude: excludePosts
    };
    allTaxonomies && allTaxonomies.map((tax)=>{
        let taxvalue = tax.value;
        if(taxvalue == 'category'){
            taxvalue = 'categories';
        }
        if(taxvalue == 'post_tag'){
            taxvalue = 'tags';
        }
        query[taxvalue] = taxTermSelected(tax.value);
    });

    const posts = useSelect((select) => {
        return select('core').getEntityRecords('postType', postsPostType, query);
    }, [order, orderBy, categories, postsPostType, offset, query, excludePosts]);

    const selectPosts = useSelect((select) => {
        return select('core').getEntityRecords('postType', postsPostType,{
        per_page: 10,
        _embed: true,
        order,
        orderby: orderBy,
        offset: parseInt(offset ? offset : 0),
        });
    }, [order, orderBy, categories, postsPostType, offset, excludePosts]);

    var allPostsSelect = [];
    selectPosts && selectPosts.map((post, index) => {
        allPostsSelect.push({
            value: post.id,
            label: post.title.rendered
        })
    })

    const allPostTypes = useSelect((select) => {
        let allPtypes = [];
        let selectPostTypes = select('core').getPostTypes();
        selectPostTypes?.forEach((el)=>{
            if(el.visibility.show_in_nav_menus === true){
            allPtypes.push({
                value: el.slug,
                label: el.name
            })}
        });
        return allPtypes;
    }, []);

    const allCats = useSelect((select) => {
        return select('core').getEntityRecords('taxonomy', 'category', {
            per_page: -1,
        });
    }, []);

    const catInner = (catId, index, primary) => {
        if(primary && index != 0){
            return
        }
        const obj = allCats && allCats.find(o => o.id === catId);
        return obj && (
            <li key={index}>
                <a class={`sb-primary-cat sb-category-${catId}`} href={`${obj.link}`}>
                    {obj.name}
                </a>
            </li>
        );
    }

    const imageSizes = useSelect( ( select ) => {
        return select( blockEditorStore ).getSettings().imageSizes;
    }, [] );

    const getImageSizeOptions = () => {
        const options = [];
        imageSizes?.forEach((el)=>{
            options.push({
                value: el.slug,
                label: el.name
            })
        });
        return options;
    };

    return (
        <>
            <style jsx>
                {style}
            </style>
            {tickerTitleTypography['family'] && (<GoogleFontLoad family={tickerTitleTypography['family']} weight={tickerTitleTypography['weight'].replace("italic", "i")}/>)}
            {tickerContentTypography['family'] && (<GoogleFontLoad family={tickerContentTypography['family']} weight={tickerContentTypography['weight'].replace("italic", "i")}/>)}
            <InspectorControls>
                <PanelTabs>
                    <div tabTitle={__("Layout", 'smart-blocks')}>
                        <PanelBody
                            title={ __( 'Ticker Block', 'smart-blocks' ) }
                            initialOpen={ false }
                            >
                            <TextControl
                                label={ __('Title', 'smart-blocks') }
                                value={ tickerTitle }
                                onChange={ ( tickerTitle ) => setAttributes( { tickerTitle } ) }
                            />
                            <ToggleControl
                                label={ __('Autoplay', 'smart-blocks') }
                                checked={ autoplay }
                                onChange={ ( autoplay ) => setAttributes( {autoplay} ) }
                            />
                            {autoplay && (
                                <CustomRangeControl
                                    label={ __('Ticker Pause Duration', 'smart-blocks') }
                                    value={ pause }
                                    onChange={ ( pause ) => setAttributes( {pause} ) }
                                    min={ 1 }
                                    max={ 20 }
                                />)
                            }
                        </PanelBody>
                        <PanelBody
                            title={ __( 'Content Filter', 'smart-blocks' ) }
                            initialOpen={ false }
                            >

                            <Select
                                label={ __( 'Source', 'smart-blocks' ) }
                                value={ postsPostType }
                                onChange={ ( postsPostType ) => setAttributes( { postsPostType } ) }
                                options={ allPostTypes }
                            />

                            <QueryTaxonomyControls
                                value={ categories }
                                postType={ postsPostType }
                                onChange={ ( categories ) => setAttributes( { categories } ) }
                            />

                            <TokenMultiSelectControl
                                label={ __('Exclude Posts', 'smart-blocks') }
                                options={ allPostsSelect }
                                value={ excludePosts }
                                onChange={ ( excludePosts ) => setAttributes( { excludePosts } ) }
                            />

                            <Select
                                label={ __( 'Order By', 'smart-blocks' ) }
                                value={ orderBy }
                                onChange={ ( orderBy ) => setAttributes( { orderBy } ) }
                                options={ [
                                    { value: 'date', label: __('Date', 'smart-blocks') },
                                    { value: 'modified', label: __('Last Modified Date', 'smart-blocks') },
                                    { value: 'rand', label: __('Rand', 'smart-blocks') },
                                    { value: 'comment_count', label: __('Comment Count', 'smart-blocks') },
                                    { value: 'title', label: __('Title', 'smart-blocks') },
                                    { value: 'author', label: __('Show Post Author', 'smart-blocks') }
                                ] }
                            />

                            <Select
                                label={ __( 'Order', 'smart-blocks' ) }
                                value={ order }
                                onChange={ ( order ) => setAttributes( { order } ) }
                                options={ [
                                    { value: 'desc', label: __('Descending', 'smart-blocks') },
                                    { value: 'asc', label: __('Ascending', 'smart-blocks') }
                                ] }
                            />

                            <CustomRangeControl
                                label={__('Offset', 'smart-blocks')}
                                value={ offset }
                                onChange={ ( offset ) => setAttributes( {offset} ) }
                                min={ 0 }
                                max={ 10 }
                            />

                            <CustomRangeControl
                                label={ __('No of Posts', 'smart-blocks')}
                                value={ noOfPosts }
                                onChange={ ( noOfPosts ) => setAttributes( {noOfPosts} ) }
                                min={ 0 }
                                max={ 20 }
                            />
                        </PanelBody>
                    </div>
                    <div tabTitle={__("Style", 'smart-blocks')}>
                        <PanelBody
                            title={__('Title', 'smart-blocks')}
                            initialOpen={ false }
                            >
                            <Typography
                                label={ __('Typography', 'smart-blocks') }
                                values={ tickerTitleTypography }
                                onChange={ ( tickerTitleTypography ) => setAttributes( {tickerTitleTypography} ) }
                                device={ device }
                                setDevice={ setDevice }/>
                            <Color
                                label={ __( 'Background Color', 'smart-blocks' ) }
                                enableAlpha
                                value={tickerTitleBgColor}
                                onChange={ ( tickerTitleBgColor ) => setAttributes( { tickerTitleBgColor } ) }
                            />
                            <Color
                                label={ __( 'Text Color', 'smart-blocks' ) }
                                enableAlpha
                                value={tickerTitleColor}
                                onChange={ ( tickerTitleColor ) => setAttributes( { tickerTitleColor } ) }
                            />
                        </PanelBody>
                        <PanelBody
                            title="Content"
                            initialOpen={ false }
                            >
                            <Typography
                                label={ __('Typography', 'smart-blocks') }
                                values={ tickerContentTypography }
                                onChange={ ( tickerContentTypography ) => setAttributes( {tickerContentTypography} ) }
                                device={ device }
                                setDevice={ setDevice }/>
                            <Color
                                label={ __( 'Background Color', 'smart-blocks' ) }
                                enableAlpha
                                value={tickerContentBgColor}
                                onChange={ ( tickerContentBgColor ) => setAttributes( { tickerContentBgColor } ) }
                            />
                            <Color
                                label={ __( 'Text Color', 'smart-blocks' ) }
                                enableAlpha
                                value={tickerContentColor}
                                onChange={ ( tickerContentColor ) => setAttributes( { tickerContentColor } ) }
                            />
                            <Color
                                label={ __( 'Text Color (Hover)', 'smart-blocks' ) }
                                enableAlpha
                                value={tickerContentHoverColor}
                                onChange={ ( tickerContentHoverColor ) => setAttributes( { tickerContentHoverColor } ) }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__('Navigation', 'smart-blocks')}
                            initialOpen={ false }
                            >
                            <Tabs>
                                <div tabTitle={__("Normal", 'smart-blocks')}>
                                    <Color
                                        label={ __( 'Background Color', 'smart-blocks' ) }
                                        enableAlpha
                                        value={navNormalBgColor}
                                        onChange={ ( navNormalBgColor ) => setAttributes( { navNormalBgColor } ) }
                                    />
                                    <Color
                                        label={ __( 'Icon Color', 'smart-blocks' ) }
                                        enableAlpha
                                        value={navIconNormalColor}
                                        onChange={ ( navIconNormalColor ) => setAttributes( { navIconNormalColor } ) }
                                    />
                                </div>
                                <div tabTitle={__("Hover", 'smart-blocks')}>
                                    <Color
                                        label={ __( 'Background Color(Hover)', 'smart-blocks' ) }
                                        enableAlpha
                                        value={navHoverBgColor}
                                        onChange={ ( navHoverBgColor ) => setAttributes( { navHoverBgColor } ) }
                                    />
                                    <Color
                                        label={ __( 'Text Color(Hover)', 'smart-blocks' ) }
                                        enableAlpha
                                        value={navIconHoverColor}
                                        onChange={ ( navIconHoverColor ) => setAttributes( { navIconHoverColor } ) }
                                    />
                                </div>
                            </Tabs>
                        </PanelBody>
                    </div>
                    <div tabTitle={__("Advanced", 'smart-blocks')}>
                        <PanelBody
                            title={__('Layout', 'smart-blocks')}
                            initialOpen={ false }
                            >
                            <Dimension
                                label={ __('Margin', 'smart-blocks') }
                                min="0"
                                max="100"
                                values={ blockMargin }
                                onChange={ ( blockMargin ) => setAttributes( {blockMargin} ) }
                                device={device}
                                setDevice={setDevice}
                            />
                            <Dimension
                                label={ __('Padding', 'smart-blocks') }
                                min="0"
                                max="100"
                                values={ blockPadding }
                                onChange={ ( blockPadding ) => setAttributes( {blockPadding} ) }
                                device={device}
                                setDevice={setDevice}
                            />
                        </PanelBody>

                        <PanelBody
                            title={__('Border', 'smart-blocks')}
                            initialOpen={ false }
                            >
                            <Tabs>
                                <div tabTitle={__("Normal", 'smart-blocks')}>
                                    <Border
                                        value={borderNormal}
                                        setValue={ ( borderNormal ) => setAttributes( {borderNormal} ) }
                                        />
                                    {borderNormal && (
                                        <Color
                                            label={ __( 'Border Color', 'smart-blocks' ) }
                                            enableAlpha
                                            value={borderNormalColor}
                                            onChange={ ( borderNormalColor ) => setAttributes( { borderNormalColor } ) }
                                            />
                                    )}
                                    <Dimension
                                        label={ __('Border Width', 'smart-blocks') }
                                        values={ borderNormalWidth }
                                        onChange={ ( borderNormalWidth ) => setAttributes( {borderNormalWidth} ) }
                                        units={ ['px', 'em'] }
                                        />
                                    <Dimension
                                        label={ __('Border Radius', 'smart-blocks') }
                                        values={ borderNormalRadius }
                                        onChange={ ( borderNormalRadius ) => setAttributes( {borderNormalRadius} ) }
                                        />
                                    <BoxShadow
                                        values={ borderNormalBoxShadow }
                                        onChange={ ( borderNormalBoxShadow ) => setAttributes( {borderNormalBoxShadow} ) }
                                        />
                                </div>
                                <div tabTitle={__("Hover", 'smart-blocks')}>
                                    <Border
                                        value={borderHover}
                                        setValue={ ( borderHover ) => setAttributes( {borderHover} ) }
                                        />
                                    {borderHover && (
                                        <Color
                                            label={ __( 'Border Color', 'smart-blocks' ) }
                                            enableAlpha
                                            value={borderHoverColor}
                                            onChange={ ( borderHoverColor ) => setAttributes( { borderHoverColor } ) }
                                            />
                                    )}
                                    <Dimension
                                        label={ __('Border Width', 'smart-blocks') }
                                        values={ borderHoverWidth }
                                        onChange={ ( borderHoverWidth ) => setAttributes( {borderHoverWidth} ) }
                                        units={ ['px', 'em'] }
                                        />
                                    <Dimension
                                        label={ __('Border Radius', 'smart-blocks') }
                                        values={ borderHoverRadius }
                                        onChange={ ( borderHoverRadius ) => setAttributes( {borderHoverRadius} ) }
                                        />
                                    <BoxShadow
                                        values={ borderHoverBoxShadow }
                                        onChange={ ( borderHoverBoxShadow ) => setAttributes( {borderHoverBoxShadow} ) }
                                        />
                                </div>
                            </Tabs>
                        </PanelBody>
                        <PanelBody
                            title={__('Background', 'smart-blocks')}
                            initialOpen={ false }
                            >
                            <Color
                                label={ __( 'Background Color', 'smart-blocks' ) }
                                enableAlpha
                                value={blockBgColor}
                                onChange={ ( blockBgColor ) => setAttributes( { blockBgColor } ) }
                            />
                        </PanelBody>
                    </div>
                </PanelTabs>
            </InspectorControls>
            <div id={id}>
                <div {...useBlockProps( {
                    className: "wp-block-smart-blocks sb-ticker"
                } )}>
                    
                    {tickerTitle &&(
                        <span className="sb-ticker-title">
                            {tickerTitle}
                        </span>
                    )}
                    <div className="sb-ticker-posts">    
                        {posts && (
                            <OwlCarousel
                                items={1}
                                margin={10}
                                loop={true}
                                mouseDrag={false}
                                autoplay={autoplay ? true : false}
                                autoplayTimeout={parseInt(pause)*1000}
                                nav={true}
                                dots={false}
                                navText={['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>']}
                                className="">
                                {posts.map((post, index) => (
                                    <a href={post.link} key={post.id}>
                                        {post.title.rendered ? (
                                            <RawHTML>
                                                {post.title.rendered}
                                            </RawHTML>
                                        ) : (
                                            __('(No title)', 'smart-blocks')
                                        )}
                                    </a>
                                ))}
                            </OwlCarousel>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

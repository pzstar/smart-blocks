import {__} from '@wordpress/i18n';
import {RawHTML, useState} from '@wordpress/element';
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import {format, dateI18n, getSettings} from '@wordpress/date';
import {
    useBlockProps,
    InspectorControls,
    RichText,
    store as blockEditorStore
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    Button
} from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import classnames from 'classnames';
import TypographyControl from '../../controls/typography';
import GoogleFontLoad from '../../utils/googlefontload';
import ColorControl from '../../controls/color';
import Tabs from '../../utils/tabs';
import SelectControl from '../../controls/select';
import DimensionControl from '../../controls/dimension';
import RangeSliderControl from '../../controls/rangeslider';
import OwlCarousel from 'react-owl-carousel';
import BorderControl from '../../controls/border';
import BoxShadowControl from '../../controls/boxshadow';
import ToggleControl from '../../controls/toggle';
import {responsiveTypographyVars, dimensionVars, boxShadowVars, responsiveDimensionVars} from '../../utils/helper';
import {LayoutIcon, StyleIcon, AdvancedIcon} from '../../utils/svgicons';
import GroupControlQuery from '../../controlgroup/query';
import {applyFilters} from '@wordpress/hooks';

export default function Edit(props) {
    const {attributes, setAttributes} = props;
    const [activeTab, setActiveTab] = useState('layout');
    const {
        id,
        sbStyle,
        order,
        orderBy,
        excludePosts,
        categories,

        tickerTitleTypographyFamily,
        tickerTitleTypographyWeight,
        tickerTitleTypographyTextTransform,
        tickerTitleTypographyTextDecoration,
        tickerTitleTypographyFontSizeSm,
        tickerTitleTypographyFontSizeMd,
        tickerTitleTypographyFontSize,
        tickerTitleTypographyFontSizeUnit,
        tickerTitleTypographyLetterSpacingSm,
        tickerTitleTypographyLetterSpacingMd,
        tickerTitleTypographyLetterSpacing,
        tickerTitleTypographyLetterSpacingUnit,
        tickerTitleTypographyLineHeightSm,
        tickerTitleTypographyLineHeightMd,
        tickerTitleTypographyLineHeight,
        tickerTitleTypographyLineHeightUnit,

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

        tickerContentTypographyFamily,
        tickerContentTypographyWeight,
        tickerContentTypographyTextTransform,
        tickerContentTypographyTextDecoration,
        tickerContentTypographyFontSizeSm,
        tickerContentTypographyFontSizeMd,
        tickerContentTypographyFontSize,
        tickerContentTypographyFontSizeUnit,
        tickerContentTypographyLetterSpacingSm,
        tickerContentTypographyLetterSpacingMd,
        tickerContentTypographyLetterSpacing,
        tickerContentTypographyLetterSpacingUnit,
        tickerContentTypographyLineHeightSm,
        tickerContentTypographyLineHeightMd,
        tickerContentTypographyLineHeight,
        tickerContentTypographyLineHeightUnit,

        navNormalBgColor,
        navIconNormalColor,
        navHoverBgColor,
        navIconHoverColor,
        blockMarginSmTop,
        blockMarginSmLeft,
        blockMarginSmRight,
        blockMarginSmBottom,
        blockMarginMdTop,
        blockMarginMdLeft,
        blockMarginMdRight,
        blockMarginMdBottom,
        blockMarginTop,
        blockMarginLeft,
        blockMarginRight,
        blockMarginBottom,
        blockMarginUnit,

        blockPaddingSmTop,
        blockPaddingSmLeft,
        blockPaddingSmRight,
        blockPaddingSmBottom,
        blockPaddingMdTop,
        blockPaddingMdLeft,
        blockPaddingMdRight,
        blockPaddingMdBottom,
        blockPaddingTop,
        blockPaddingLeft,
        blockPaddingRight,
        blockPaddingBottom,
        blockPaddingUnit,

        borderNormal,
        borderHover,
        borderNormalColor,
        borderHoverColor,

        borderNormalWidthTop,
        borderNormalWidthLeft,
        borderNormalWidthRight,
        borderNormalWidthBottom,
        borderNormalWidthUnit,

        borderHoverWidthTop,
        borderHoverWidthLeft,
        borderHoverWidthRight,
        borderHoverWidthBottom,
        borderHoverWidthUnit,

        borderNormalRadiusTop,
        borderNormalRadiusLeft,
        borderNormalRadiusRight,
        borderNormalRadiusBottom,
        borderNormalRadiusUnit,

        borderHoverRadiusTop,
        borderHoverRadiusLeft,
        borderHoverRadiusRight,
        borderHoverRadiusBottom,
        borderHoverRadiusUnit,

        borderNormalBoxShadowHorizontal,
        borderNormalBoxShadowVertical,
        borderNormalBoxShadowBlur,
        borderNormalBoxShadowSpread,
        borderNormalBoxShadowColor,
        borderNormalBoxShadowInset,

        borderHoverBoxShadowHorizontal,
        borderHoverBoxShadowVertical,
        borderHoverBoxShadowBlur,
        borderHoverBoxShadowSpread,
        borderHoverBoxShadowColor,
        borderHoverBoxShadowInset,
        blockBgColor
    } = attributes;

    setAttributes({id: useBlockProps()['id']});
    const stylesCSS = `#${id} {
        ${borderNormal ? '--sb-border-normal: ' + borderNormal + ';' : ''}
        ${borderHover ? '--sb-border-hover: ' + borderNormal + ';' : ''}
        ${borderNormalColor ? '--sb-border-normal-color: ' + borderNormalColor + ';' : ''}
        ${borderHoverColor ? '--sb-border-hover-color: ' + borderHoverColor + ';' : ''}

        ${dimensionVars('border-normal-width', borderNormalWidthTop, borderNormalWidthRight, borderNormalWidthBottom, borderNormalWidthLeft, borderNormalWidthUnit)}
        ${dimensionVars('border-hover-width', borderHoverWidthTop, borderHoverWidthRight, borderHoverWidthBottom, borderHoverWidthLeft, borderHoverWidthUnit)}
        ${dimensionVars('border-normal-radius', borderNormalRadiusTop, borderNormalRadiusRight, borderNormalRadiusBottom, borderNormalRadiusLeft, borderNormalRadiusUnit)}
        ${dimensionVars('border-hover-radius', borderHoverRadiusTop, borderHoverRadiusRight, borderHoverRadiusBottom, borderHoverRadiusLeft, borderHoverRadiusUnit)}

        ${boxShadowVars('border-normal-box-shadow', borderNormalBoxShadowHorizontal, borderNormalBoxShadowVertical, borderNormalBoxShadowBlur, borderNormalBoxShadowSpread, borderNormalBoxShadowColor, borderNormalBoxShadowInset, 'px')}
        ${boxShadowVars('border-hover-box-shadow', borderHoverBoxShadowHorizontal, borderHoverBoxShadowVertical, borderHoverBoxShadowBlur, borderHoverBoxShadowSpread, borderHoverBoxShadowColor, borderHoverBoxShadowInset, 'px')}

        ${blockBgColor ? '--sb-block-bg-color: ' + blockBgColor + ';' : ''}

        ${responsiveDimensionVars('block-margin', blockMarginTop, blockMarginRight, blockMarginBottom, blockMarginLeft,
        blockMarginSmTop, blockMarginSmRight, blockMarginSmBottom, blockMarginSmLeft,
        blockMarginMdTop, blockMarginMdRight, blockMarginMdBottom, blockMarginMdLeft, blockMarginUnit)}

        ${responsiveDimensionVars('block-padding', blockPaddingTop, blockPaddingRight, blockPaddingBottom, blockPaddingLeft,
            blockPaddingSmTop, blockPaddingSmRight, blockPaddingSmBottom, blockPaddingSmLeft,
            blockPaddingMdTop, blockPaddingMdRight, blockPaddingMdBottom, blockPaddingMdLeft, blockPaddingUnit)}

        ${blockBgColor ? '--sb-block-bg-color: ' + blockBgColor + ';' : ''}

        ${responsiveTypographyVars('ticker-title-typo', tickerTitleTypographyFamily, tickerTitleTypographyWeight, tickerTitleTypographyTextTransform, tickerTitleTypographyTextDecoration,
                tickerTitleTypographyFontSizeSm, tickerTitleTypographyFontSizeMd, tickerTitleTypographyFontSize, tickerTitleTypographyFontSizeUnit,
                tickerTitleTypographyLetterSpacingSm, tickerTitleTypographyLetterSpacingMd, tickerTitleTypographyLetterSpacing, tickerTitleTypographyLetterSpacingUnit,
                tickerTitleTypographyLineHeightSm, tickerTitleTypographyLineHeightMd, tickerTitleTypographyLineHeight, tickerTitleTypographyLineHeightUnit
            )}

        ${responsiveTypographyVars('ticker-content-typo', tickerContentTypographyFamily, tickerContentTypographyWeight, tickerContentTypographyTextTransform, tickerContentTypographyTextDecoration,
                tickerContentTypographyFontSizeSm, tickerContentTypographyFontSizeMd, tickerContentTypographyFontSize, tickerContentTypographyFontSizeUnit,
                tickerContentTypographyLetterSpacingSm, tickerContentTypographyLetterSpacingMd, tickerContentTypographyLetterSpacing, tickerContentTypographyLetterSpacingUnit,
                tickerContentTypographyLineHeightSm, tickerContentTypographyLineHeightMd, tickerContentTypographyLineHeight, tickerContentTypographyLineHeightUnit
            )}

        ${tickerTitleBgColor ? '--sb-ticker-title-bg-color: ' + tickerTitleBgColor + ';' : ''}
        ${tickerTitleColor ? '--sb-ticker-title-color: ' + tickerTitleColor + ';' : ''}
        ${tickerContentBgColor ? '--sb-ticker-content-bg-color: ' + tickerContentBgColor + ';' : ''}
        ${tickerContentColor ? '--sb-ticker-content-color: ' + tickerContentColor + ';' : ''}
        ${tickerContentHoverColor ? '--sb-ticker-content-hover-color: ' + tickerContentHoverColor + ';' : ''}
        ${navNormalBgColor ? '--sb-nav-normal-bg-color: ' + navNormalBgColor + ';' : ''}
        ${navIconNormalColor ? '--sb-nav-icon-normal-color: ' + navIconNormalColor + ';' : ''}
        ${navHoverBgColor ? '--sb-nav-hover-bg-color: ' + navHoverBgColor + ';' : ''}
        ${navIconHoverColor ? '--sb-nav-icon-hover-color: ' + navIconHoverColor + ';' : ''}
    }`
    setAttributes({sbStyle: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "")});

    const allTaxonomies = useSelect((select) => {
        var allTax = [];
        var selectTaxonomiesTypes = select('core').getTaxonomies();
        selectTaxonomiesTypes?.forEach((el) => {
            if (el.visibility.show_in_nav_menus === true && el.types[0] == postsPostType) {
                allTax.push({
                    value: el.slug,
                    label: el.name
                })
            }
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
    allTaxonomies && allTaxonomies.map((tax) => {
        let taxvalue = tax.value;
        if (taxvalue == 'category') {
            taxvalue = 'categories';
        }
        if (taxvalue == 'post_tag') {
            taxvalue = 'tags';
        }
        query[taxvalue] = taxTermSelected(tax.value);
    });

    const posts = useSelect((select) => {
        return select('core').getEntityRecords('postType', postsPostType, query);
    }, [order, orderBy, categories, postsPostType, offset, query, excludePosts]);

    const selectPosts = useSelect((select) => {
        return select('core').getEntityRecords('postType', postsPostType, {
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
        selectPostTypes?.forEach((el) => {
            if (el.visibility.show_in_nav_menus === true) {
                allPtypes.push({
                    value: el.slug,
                    label: el.name
                })
            }
        });
        return allPtypes;
    }, []);

    const allCats = useSelect((select) => {
        return select('core').getEntityRecords('taxonomy', 'category', {
            per_page: -1,
        });
    }, []);

    const catInner = (catId, index, primary) => {
        if (primary && index != 0) {
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

    const imageSizes = useSelect((select) => {
        return select(blockEditorStore).getSettings().imageSizes;
    }, []);

    const getImageSizeOptions = () => {
        const options = [];
        imageSizes?.forEach((el) => {
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
                {sbStyle}
            </style>
            {tickerTitleTypographyFamily && (tickerTitleTypographyFamily != 'Default') && (<GoogleFontLoad family={tickerTitleTypographyFamily} weight={tickerTitleTypographyWeight.replace("italic", "i")} />)}
            {tickerContentTypographyFamily && (tickerContentTypographyFamily != 'Default') && (<GoogleFontLoad family={tickerContentTypographyFamily} weight={tickerContentTypographyWeight.replace("italic", "i")} />)}
            <InspectorControls>
                <div className="sb-head-panel-tabs">
                    <div className="sb-panel-tabs-wrap">
                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'layout' === activeTab})}
                            onClick={() => setActiveTab('layout')}
                        >
                            <span className="dashicons">
                                <LayoutIcon />
                            </span>
                            {__('Layout', 'smart-blocks')}
                        </Button>

                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'style' === activeTab})}
                            onClick={() => setActiveTab('style')}
                        >
                            <span className="dashicons">
                                <StyleIcon />
                            </span>
                            {__('Style', 'smart-blocks')}
                        </Button>

                        <Button
                            className={classnames('sb-panel-tab', {'active-tab': 'advanced' === activeTab})}
                            onClick={() => setActiveTab('advanced')}
                        >
                            <span className="dashicons">
                                <AdvancedIcon />
                            </span>
                            {__('Advanced', 'smart-blocks')}
                        </Button>
                    </div>
                    <div className="sb-panel-tab-fields">
                        {'layout' === activeTab && (
                            <>
                                <PanelBody
                                    title={__('Ticker Block', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <TextControl
                                        label={__('Title', 'smart-blocks')}
                                        value={tickerTitle}
                                        onChange={(tickerTitle) => setAttributes({tickerTitle})}
                                    />
                                    <ToggleControl
                                        label={__('Autoplay', 'smart-blocks')}
                                        checked={autoplay}
                                        onChange={(autoplay) => setAttributes({autoplay})}
                                    />
                                    {autoplay && (
                                        <RangeSliderControl
                                            label={__('Ticker Pause Duration', 'smart-blocks')}
                                            value={pause}
                                            setValue={(pause) => setAttributes({pause})}
                                            min={1}
                                            max={20}
                                        />)
                                    }
                                </PanelBody>
                                <GroupControlQuery attributes={attributes} setAttributes={setAttributes} usePostNumber={!0} />
                            </>
                        ) || 'style' === activeTab && (
                            <>
                                <PanelBody
                                    title={__('Title', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <TypographyControl
                                        label={__('Typography', 'smart-blocks')}
                                        valueFamily={tickerTitleTypographyFamily}
                                        setValueFamily={value => setAttributes({tickerTitleTypographyFamily: value})}
                                        valueWeight={tickerTitleTypographyWeight}
                                        setValueWeight={value => setAttributes({tickerTitleTypographyWeight: value})}
                                        valueTextTransform={tickerTitleTypographyTextTransform}
                                        setValueTextTransform={value => setAttributes({tickerTitleTypographyTextTransform: value})}
                                        valueTextDecoration={tickerTitleTypographyTextDecoration}
                                        setValueTextDecoration={value => setAttributes({tickerTitleTypographyTextDecoration: value})}
                                        valueFontSizeSm={tickerTitleTypographyFontSizeSm}
                                        setValueFontSizeSm={value => setAttributes({tickerTitleTypographyFontSizeSm: value})}
                                        valueFontSizeMd={tickerTitleTypographyFontSizeMd}
                                        setValueFontSizeMd={value => setAttributes({tickerTitleTypographyFontSizeMd: value})}
                                        valueFontSize={tickerTitleTypographyFontSize}
                                        setValueFontSize={value => setAttributes({tickerTitleTypographyFontSize: value})}
                                        valueFontSizeUnit={tickerTitleTypographyFontSizeUnit}
                                        setValueFontSizeUnit={value => setAttributes({tickerTitleTypographyFontSizeUnit: value})}
                                        valueLetterSpacingSm={tickerTitleTypographyLetterSpacingSm}
                                        setValueLetterSpacingSm={value => setAttributes({tickerTitleTypographyLetterSpacingSm: value})}
                                        valueLetterSpacingMd={tickerTitleTypographyLetterSpacingMd}
                                        setValueLetterSpacingMd={value => setAttributes({tickerTitleTypographyLetterSpacingMd: value})}
                                        valueLetterSpacing={tickerTitleTypographyLetterSpacing}
                                        setValueLetterSpacing={value => setAttributes({tickerTitleTypographyLetterSpacing: value})}
                                        valueLetterSpacingUnit={tickerTitleTypographyLetterSpacingUnit}
                                        setValueLetterSpacingUnit={value => setAttributes({tickerTitleTypographyLetterSpacingUnit: value})}
                                        valueLineHeightSm={tickerTitleTypographyLineHeightSm}
                                        setValueLineHeightSm={value => setAttributes({tickerTitleTypographyLineHeightSm: value})}
                                        valueLineHeightMd={tickerTitleTypographyLineHeightMd}
                                        setValueLineHeightMd={value => setAttributes({tickerTitleTypographyLineHeightMd: value})}
                                        valueLineHeight={tickerTitleTypographyLineHeight}
                                        setValueLineHeight={value => setAttributes({tickerTitleTypographyLineHeight: value})}
                                        valueLineHeightUnit={tickerTitleTypographyLineHeightUnit}
                                        setValueLineHeightUnit={value => setAttributes({tickerTitleTypographyLineHeightUnit: value})}
                                    />
                                    <ColorControl
                                        label={__('Background Color', 'smart-blocks')}
                                        enableAlpha
                                        value={tickerTitleBgColor}
                                        setValue={(tickerTitleBgColor) => setAttributes({tickerTitleBgColor})}
                                    />
                                    <ColorControl
                                        label={__('Text Color', 'smart-blocks')}
                                        enableAlpha
                                        value={tickerTitleColor}
                                        setValue={(tickerTitleColor) => setAttributes({tickerTitleColor})}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title="Content"
                                    initialOpen={false}
                                >
                                    <TypographyControl
                                        label={__('Typography', 'smart-blocks')}
                                        valueFamily={tickerContentTypographyFamily}
                                        setValueFamily={value => setAttributes({tickerContentTypographyFamily: value})}
                                        valueWeight={tickerContentTypographyWeight}
                                        setValueWeight={value => setAttributes({tickerContentTypographyWeight: value})}
                                        valueTextTransform={tickerContentTypographyTextTransform}
                                        setValueTextTransform={value => setAttributes({tickerContentTypographyTextTransform: value})}
                                        valueTextDecoration={tickerContentTypographyTextDecoration}
                                        setValueTextDecoration={value => setAttributes({tickerContentTypographyTextDecoration: value})}
                                        valueFontSizeSm={tickerContentTypographyFontSizeSm}
                                        setValueFontSizeSm={value => setAttributes({tickerContentTypographyFontSizeSm: value})}
                                        valueFontSizeMd={tickerContentTypographyFontSizeMd}
                                        setValueFontSizeMd={value => setAttributes({tickerContentTypographyFontSizeMd: value})}
                                        valueFontSize={tickerContentTypographyFontSize}
                                        setValueFontSize={value => setAttributes({tickerContentTypographyFontSize: value})}
                                        valueFontSizeUnit={tickerContentTypographyFontSizeUnit}
                                        setValueFontSizeUnit={value => setAttributes({tickerContentTypographyFontSizeUnit: value})}
                                        valueLetterSpacingSm={tickerContentTypographyLetterSpacingSm}
                                        setValueLetterSpacingSm={value => setAttributes({tickerContentTypographyLetterSpacingSm: value})}
                                        valueLetterSpacingMd={tickerContentTypographyLetterSpacingMd}
                                        setValueLetterSpacingMd={value => setAttributes({tickerContentTypographyLetterSpacingMd: value})}
                                        valueLetterSpacing={tickerContentTypographyLetterSpacing}
                                        setValueLetterSpacing={value => setAttributes({tickerContentTypographyLetterSpacing: value})}
                                        valueLetterSpacingUnit={tickerContentTypographyLetterSpacingUnit}
                                        setValueLetterSpacingUnit={value => setAttributes({tickerContentTypographyLetterSpacingUnit: value})}
                                        valueLineHeightSm={tickerContentTypographyLineHeightSm}
                                        setValueLineHeightSm={value => setAttributes({tickerContentTypographyLineHeightSm: value})}
                                        valueLineHeightMd={tickerContentTypographyLineHeightMd}
                                        setValueLineHeightMd={value => setAttributes({tickerContentTypographyLineHeightMd: value})}
                                        valueLineHeight={tickerContentTypographyLineHeight}
                                        setValueLineHeight={value => setAttributes({tickerContentTypographyLineHeight: value})}
                                        valueLineHeightUnit={tickerContentTypographyLineHeightUnit}
                                        setValueLineHeightUnit={value => setAttributes({tickerContentTypographyLineHeightUnit: value})}
                                    />
                                    <ColorControl
                                        label={__('Background Color', 'smart-blocks')}
                                        enableAlpha
                                        value={tickerContentBgColor}
                                        setValue={(tickerContentBgColor) => setAttributes({tickerContentBgColor})}
                                    />
                                    <ColorControl
                                        label={__('Text Color', 'smart-blocks')}
                                        enableAlpha
                                        value={tickerContentColor}
                                        setValue={(tickerContentColor) => setAttributes({tickerContentColor})}
                                    />
                                    <ColorControl
                                        label={__('Text Color (Hover)', 'smart-blocks')}
                                        enableAlpha
                                        value={tickerContentHoverColor}
                                        setValue={(tickerContentHoverColor) => setAttributes({tickerContentHoverColor})}
                                    />
                                </PanelBody>
                                <PanelBody
                                    title={__('Navigation', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Tabs>
                                        <div tabTitle={__("Normal", 'smart-blocks')}>
                                            <ColorControl
                                                label={__('Background Color', 'smart-blocks')}
                                                enableAlpha
                                                value={navNormalBgColor}
                                                setValue={(navNormalBgColor) => setAttributes({navNormalBgColor})}
                                            />
                                            <ColorControl
                                                label={__('Icon Color', 'smart-blocks')}
                                                enableAlpha
                                                value={navIconNormalColor}
                                                setValue={(navIconNormalColor) => setAttributes({navIconNormalColor})}
                                            />
                                        </div>
                                        <div tabTitle={__("Hover", 'smart-blocks')}>
                                            <ColorControl
                                                label={__('Background Color(Hover)', 'smart-blocks')}
                                                enableAlpha
                                                value={navHoverBgColor}
                                                setValue={(navHoverBgColor) => setAttributes({navHoverBgColor})}
                                            />
                                            <ColorControl
                                                label={__('Text Color(Hover)', 'smart-blocks')}
                                                enableAlpha
                                                value={navIconHoverColor}
                                                setValue={(navIconHoverColor) => setAttributes({navIconHoverColor})}
                                            />
                                        </div>
                                    </Tabs>
                                </PanelBody>
                            </>
                        ) || 'advanced' === activeTab && (
                            <>
                                <PanelBody
                                    title={__('Spacing', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <DimensionControl
                                        label={__('Margin', 'smart-blocks')}
                                        min="0"
                                        max="100"
                                        dimensionTop={blockMarginTop}
                                        setDimensionTop={value => setAttributes({blockMarginTop: value})}
                                        dimensionMdTop={blockMarginMdTop}
                                        setDimensionMdTop={value => setAttributes({blockMarginMdTop: value})}
                                        dimensionSmTop={blockMarginSmTop}
                                        setDimensionSmTop={value => setAttributes({blockMarginSmTop: value})}

                                        dimensionLeft={blockMarginLeft}
                                        setDimensionLeft={value => setAttributes({blockMarginLeft: value})}
                                        dimensionMdLeft={blockMarginMdLeft}
                                        setDimensionMdLeft={value => setAttributes({blockMarginMdLeft: value})}
                                        dimensionSmLeft={blockMarginSmLeft}
                                        setDimensionSmLeft={value => setAttributes({blockMarginSmLeft: value})}

                                        dimensionRight={blockMarginRight}
                                        setDimensionRight={value => setAttributes({blockMarginRight: value})}
                                        dimensionMdRight={blockMarginMdRight}
                                        setDimensionMdRight={value => setAttributes({blockMarginMdRight: value})}
                                        dimensionSmRight={blockMarginSmRight}
                                        setDimensionSmRight={value => setAttributes({blockMarginSmRight: value})}

                                        dimensionBottom={blockMarginBottom}
                                        setDimensionBottom={value => setAttributes({blockMarginBottom: value})}
                                        dimensionMdBottom={blockMarginMdBottom}
                                        setDimensionMdBottom={value => setAttributes({blockMarginMdBottom: value})}
                                        dimensionSmBottom={blockMarginSmBottom}
                                        setDimensionSmBottom={value => setAttributes({blockMarginSmBottom: value})}

                                        unit={blockMarginUnit}
                                        setUnit={value => setAttributes({blockMarginUnit: value})}
                                        responsive={!0}
                                    />
                                    <DimensionControl
                                        label={__('Padding', 'smart-blocks')}
                                        min="0"
                                        max="100"
                                        dimensionTop={blockPaddingTop}
                                        setDimensionTop={value => setAttributes({blockPaddingTop: value})}
                                        dimensionMdTop={blockPaddingMdTop}
                                        setDimensionMdTop={value => setAttributes({blockPaddingMdTop: value})}
                                        dimensionSmTop={blockPaddingSmTop}
                                        setDimensionSmTop={value => setAttributes({blockPaddingSmTop: value})}

                                        dimensionLeft={blockPaddingLeft}
                                        setDimensionLeft={value => setAttributes({blockPaddingLeft: value})}
                                        dimensionMdLeft={blockPaddingMdLeft}
                                        setDimensionMdLeft={value => setAttributes({blockPaddingMdLeft: value})}
                                        dimensionSmLeft={blockPaddingSmLeft}
                                        setDimensionSmLeft={value => setAttributes({blockPaddingSmLeft: value})}

                                        dimensionRight={blockPaddingRight}
                                        setDimensionRight={value => setAttributes({blockPaddingRight: value})}
                                        dimensionMdRight={blockPaddingMdRight}
                                        setDimensionMdRight={value => setAttributes({blockPaddingMdRight: value})}
                                        dimensionSmRight={blockPaddingSmRight}
                                        setDimensionSmRight={value => setAttributes({blockPaddingSmRight: value})}

                                        dimensionBottom={blockPaddingBottom}
                                        setDimensionBottom={value => setAttributes({blockPaddingBottom: value})}
                                        dimensionMdBottom={blockPaddingMdBottom}
                                        setDimensionMdBottom={value => setAttributes({blockPaddingMdBottom: value})}
                                        dimensionSmBottom={blockPaddingSmBottom}
                                        setDimensionSmBottom={value => setAttributes({blockPaddingSmBottom: value})}

                                        unit={blockPaddingUnit}
                                        setUnit={value => setAttributes({blockPaddingUnit: value})}
                                        responsive={!0}
                                    />
                                </PanelBody>

                                <PanelBody
                                    title={__('Border', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <Tabs>
                                        <div tabTitle={__("Normal", 'smart-blocks')}>
                                            <BorderControl
                                                value={borderNormal}
                                                setValue={(borderNormal) => setAttributes({borderNormal})}
                                            />
                                            {borderNormal && (
                                                <ColorControl
                                                    label={__('Border Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={borderNormalColor}
                                                    setValue={(borderNormalColor) => setAttributes({borderNormalColor})}
                                                />
                                            )}
                                            <DimensionControl
                                                label={__('Border Width', 'smart-blocks')}
                                                dimensionTop={borderNormalWidthTop}
                                                setDimensionTop={value => setAttributes({borderNormalWidthTop: value})}

                                                dimensionLeft={borderNormalWidthLeft}
                                                setDimensionLeft={value => setAttributes({borderNormalWidthLeft: value})}

                                                dimensionRight={borderNormalWidthRight}
                                                setDimensionRight={value => setAttributes({borderNormalWidthRight: value})}

                                                dimensionBottom={borderNormalWidthBottom}
                                                setDimensionBottom={value => setAttributes({borderNormalWidthBottom: value})}

                                                unit={borderNormalWidthUnit}
                                                setUnit={value => setAttributes({borderNormalWidthUnit: value})}
                                                units={['px', 'em']}
                                            />
                                            <DimensionControl
                                                label={__('Border Radius', 'smart-blocks')}
                                                dimensionTop={borderNormalRadiusTop}
                                                setDimensionTop={value => setAttributes({borderNormalRadiusTop: value})}

                                                dimensionLeft={borderNormalRadiusLeft}
                                                setDimensionLeft={value => setAttributes({borderNormalRadiusLeft: value})}

                                                dimensionRight={borderNormalRadiusRight}
                                                setDimensionRight={value => setAttributes({borderNormalRadiusRight: value})}

                                                dimensionBottom={borderNormalRadiusBottom}
                                                setDimensionBottom={value => setAttributes({borderNormalRadiusBottom: value})}

                                                unit={borderNormalRadiusUnit}
                                                setUnit={value => setAttributes({borderNormalRadiusUnit: value})}
                                            />
                                            <BoxShadowControl
                                                valueHorizontal={borderNormalBoxShadowHorizontal}
                                                setValueHorizontal={(borderNormalBoxShadowHorizontal) => setAttributes({borderNormalBoxShadowHorizontal})}
                                                valueVertical={borderNormalBoxShadowVertical}
                                                setValueVertical={(borderNormalBoxShadowVertical) => setAttributes({borderNormalBoxShadowVertical})}
                                                valueBlur={borderNormalBoxShadowBlur}
                                                setValueBlur={(borderNormalBoxShadowBlur) => setAttributes({borderNormalBoxShadowBlur})}
                                                valueSpread={borderNormalBoxShadowSpread}
                                                setValueSpread={(borderNormalBoxShadowSpread) => setAttributes({borderNormalBoxShadowSpread})}
                                                valueColor={borderNormalBoxShadowColor}
                                                setValueColor={(borderNormalBoxShadowColor) => setAttributes({borderNormalBoxShadowColor})}
                                                valueInset={borderNormalBoxShadowInset}
                                                setValueInset={(borderNormalBoxShadowInset) => setAttributes({borderNormalBoxShadowInset})}
                                            />
                                        </div>
                                        <div tabTitle={__("Hover", 'smart-blocks')}>
                                            <BorderControl
                                                value={borderHover}
                                                setValue={(borderHover) => setAttributes({borderHover})}
                                            />
                                            {borderHover && (
                                                <ColorControl
                                                    label={__('Border Color', 'smart-blocks')}
                                                    enableAlpha
                                                    value={borderHoverColor}
                                                    setValue={(borderHoverColor) => setAttributes({borderHoverColor})}
                                                />
                                            )}
                                            <DimensionControl
                                                label={__('Border Width', 'smart-blocks')}
                                                dimensionTop={borderHoverWidthTop}
                                                setDimensionTop={value => setAttributes({borderHoverWidthTop: value})}

                                                dimensionLeft={borderHoverWidthLeft}
                                                setDimensionLeft={value => setAttributes({borderHoverWidthLeft: value})}

                                                dimensionRight={borderHoverWidthRight}
                                                setDimensionRight={value => setAttributes({borderHoverWidthRight: value})}

                                                dimensionBottom={borderHoverWidthBottom}
                                                setDimensionBottom={value => setAttributes({borderHoverWidthBottom: value})}

                                                unit={borderHoverWidthUnit}
                                                setUnit={value => setAttributes({borderHoverWidthUnit: value})}
                                                units={['px', 'em']}
                                            />
                                            <DimensionControl
                                                label={__('Border Radius', 'smart-blocks')}
                                                dimensionTop={borderHoverRadiusTop}
                                                setDimensionTop={value => setAttributes({borderHoverRadiusTop: value})}

                                                dimensionLeft={borderHoverRadiusLeft}
                                                setDimensionLeft={value => setAttributes({borderHoverRadiusLeft: value})}

                                                dimensionRight={borderHoverRadiusRight}
                                                setDimensionRight={value => setAttributes({borderHoverRadiusRight: value})}

                                                dimensionBottom={borderHoverRadiusBottom}
                                                setDimensionBottom={value => setAttributes({borderHoverRadiusBottom: value})}

                                                unit={borderHoverRadiusUnit}
                                                setUnit={value => setAttributes({borderHoverRadiusUnit: value})}
                                            />
                                            <BoxShadowControl
                                                valueHorizontal={borderHoverBoxShadowHorizontal}
                                                setValueHorizontal={(borderHoverBoxShadowHorizontal) => setAttributes({borderHoverBoxShadowHorizontal})}
                                                valueVertical={borderHoverBoxShadowVertical}
                                                setValueVertical={(borderHoverBoxShadowVertical) => setAttributes({borderHoverBoxShadowVertical})}
                                                valueBlur={borderHoverBoxShadowBlur}
                                                setValueBlur={(borderHoverBoxShadowBlur) => setAttributes({borderHoverBoxShadowBlur})}
                                                valueSpread={borderHoverBoxShadowSpread}
                                                setValueSpread={(borderHoverBoxShadowSpread) => setAttributes({borderHoverBoxShadowSpread})}
                                                valueColor={borderHoverBoxShadowColor}
                                                setValueColor={(borderHoverBoxShadowColor) => setAttributes({borderHoverBoxShadowColor})}
                                                valueInset={borderHoverBoxShadowInset}
                                                setValueInset={(borderHoverBoxShadowInset) => setAttributes({borderHoverBoxShadowInset})}
                                            />
                                        </div>
                                    </Tabs>
                                </PanelBody>
                                <PanelBody
                                    title={__('Background', 'smart-blocks')}
                                    initialOpen={false}
                                >
                                    <ColorControl
                                        label={__('Background Color', 'smart-blocks')}
                                        enableAlpha
                                        value={blockBgColor}
                                        setValue={(blockBgColor) => setAttributes({blockBgColor})}
                                    />
                                </PanelBody>

                                {applyFilters('smartblocks.advancedBlocks', '', props)}
                                {applyFilters('smartblocks.blockTools', '', props)}
                            </>
                        )}
                    </div>
                </div>
            </InspectorControls>
            <div id={id}>
                <div {...useBlockProps({
                    className: "wp-block-smart-blocks sb-ticker"
                })}>

                    {tickerTitle && (
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
                                autoplayTimeout={parseInt(pause) * 1000}
                                nav={true}
                                dots={false}
                                navText={['<i class="mdi-chevron-left"></i>', '<i class="mdi-chevron-right"></i>']}
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

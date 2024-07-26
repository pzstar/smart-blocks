import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import SelectControl from '../controls/select';
import MultiSelectControl from '../controls/multiselect';
import RangeSliderControl from '../controls/rangeslider';

const GroupControlQuery = ({attributes, setAttributes, usePostNumber}) => {
    const {
        postsPostType,
        excludePosts,
        orderBy,
        order,
        offset,
        categories
    } = attributes;

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

    const allTaxTerms = useSelect((select) => {
        let selectTerms = [];
        allTaxonomies && allTaxonomies.map(function (tax, i) {
            selectTerms[tax.value] = select('core').getEntityRecords('taxonomy', tax.value, {
                per_page: -1,
            });
        });
        return selectTerms;
    }, [allTaxonomies]);

    const termSuggestions = {};

    const indentArray = (parentId, terms, childCount = -1) => {
        var options = [];
        var i;
        var loopTerms = [];
        if (terms && terms.length) {
            if (typeof terms[0].parent !== "undefined") {
                for (i= 0; i<terms.length; i++) {
                    if (terms[i].parent == parentId) {
                        loopTerms = [...loopTerms, terms[i]];
                    }
                }

                if (loopTerms.length) {
                    childCount++;

                    if (loopTerms) {
                        loopTerms.map((term) => {
                            let termName = '';
                            i = 0;
                            while (i < childCount) {
                                termName += '- ';
                                i++;
                            }
                            termName += term.name.replace("-", " ");
                            options.push({
                                value: term.id,
                                label: termName + ' (' + term.count + ')'
                            });
                            let childOptions = indentArray(term.id, terms, childCount);

                            if (childOptions.length) {
                                options = [...options, ...childOptions];
                            }
                        });
                    }
                }
            } else {
                terms.map((term) => {
                    options.push({
                        value: term.id,
                        label: term.name + ' (' + term.count + ')'
                    });
                });
            }
        }
        return options;
    }

    const termOptions = (taxonomy) => {
        let options = [];
        if(allTaxTerms[taxonomy]) {
            options = indentArray(0, allTaxTerms[taxonomy]);
        }
        return options;
    }

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

    return (
        <PanelBody
            title={__('Content Filter', 'smart-blocks')}
            initialOpen={false}
        >
            <SelectControl
                label={__('Source', 'smart-blocks')}
                value={postsPostType}
                onChange={value => setAttributes({postsPostType: value})}
                options={allPostTypes}
            />

            {allTaxonomies && allTaxonomies.map((tax, i) => {
                const selectedValue = categories ? (categories[tax.value] ?? []) : [];
                return (
                    <MultiSelectControl
                        label={tax.label}
                        options={termOptions(tax.value)}
                        value={selectedValue}
                        onChange={value => setAttributes({categories: {...categories, [tax.value]: value}})}
                        key={i}
                    />
                );
            }
            )}

            <MultiSelectControl
                label={__('Exclude Posts', 'smart-blocks')}
                options={allPostsSelect}
                value={excludePosts}
                onChange={value => setAttributes({excludePosts: value})}
            />

            <SelectControl
                label={__('Order By', 'smart-blocks')}
                value={orderBy}
                onChange={value => setAttributes({orderBy: value})}
                options={[
                    {value: 'date', label: __('Date', 'smart-blocks')},
                    {value: 'modified', label: __('Last Modified Date', 'smart-blocks')},
                    {value: 'rand', label: __('Rand', 'smart-blocks')},
                    {value: 'comment_count', label: __('Comment Count', 'smart-blocks')},
                    {value: 'title', label: __('Title', 'smart-blocks')},
                    {value: 'author', label: __('Show Post Author', 'smart-blocks')}
                ]}
            />

            <SelectControl
                label={__('Order', 'smart-blocks')}
                value={order}
                onChange={value => setAttributes({order: value})}
                options={[
                    {value: 'desc', label: __('Descending', 'smart-blocks')},
                    {value: 'asc', label: __('Ascending', 'smart-blocks')}
                ]}
            />

            <RangeSliderControl
                label={__('Offset', 'smart-blocks')}
                value={offset}
                setValue={value => setAttributes({offset: value})}
                min={0}
                max={10}
            />


            {usePostNumber && (<RangeSliderControl
                label={__('No of Posts', 'smart-blocks')}
                value={attributes.noOfPosts}
                setValue={value => setAttributes({noOfPosts: value})}
                min={0}
                max={20}
            />)}
        </PanelBody>
    );
}

export default GroupControlQuery;
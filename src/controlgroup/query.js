import {__} from '@wordpress/i18n';
import {PanelBody} from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import SelectControl from '../controls/select';
import MultipleSelectControl from '../controls/multipleselect';
import RangeSliderControl from '../controls/rangeslider';
import {applyFilters} from '@wordpress/hooks';

const GroupControlQuery = (props) => {
    const {
        attributes,
        setAttributes,
        usePostNumber,
        optChange = () => { }
    } = props;
    const {
        postsPostType,
        excludePosts,
        orderBy,
        order,
        offset,
        categories,
    } = attributes;

    const {allTaxonomies, allPostsSelect, allPostTypes, allTaxTerms} = useSelect(select => {
        let allTax = [];
        let selectTaxonomiesTypes = select('core').getTaxonomies();
        selectTaxonomiesTypes?.forEach((el) => {
            if (el.visibility.show_in_nav_menus === true && el.types[0] == postsPostType) {
                allTax.push({
                    value: el.slug,
                    label: el.name
                })
            }
        });

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

        let selectTerms = [];
        allTax && allTax.map(function (tax, i) {
            selectTerms[tax.value] = select('core').getEntityRecords('taxonomy', tax.value, {
                per_page: -1,
            });
        });

        let selectPosts = select('core').getEntityRecords('postType', postsPostType, {
            per_page: 10,
            _embed: true,
            order,
            orderby: orderBy,
            offset: parseInt(offset ? offset : 0),
        });

        let allPostsSelect = [];
        selectPosts && selectPosts.map((post, index) => {
            allPostsSelect.push({
                value: post.id,
                label: post.title.rendered
            })
        })

        return {
            allTaxonomies: allTax,
            allPostsSelect: allPostsSelect,
            allPostTypes: allPtypes,
            allTaxTerms: selectTerms
        };
    }, [postsPostType, order, orderBy, categories, offset, excludePosts]);

    const indentArray = (parentId, terms, childCount = -1) => {
        var options = [];
        var i;
        var loopTerms = [];
        if (terms && terms.length) {
            if (typeof terms[0].parent !== "undefined") {
                for (i = 0; i < terms.length; i++) {
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
        if (allTaxTerms[taxonomy]) {
            options = indentArray(0, allTaxTerms[taxonomy]);
        }
        return options;
    }


    return (
        <PanelBody
            title={__('Content Filter', 'smart-blocks')}
            initialOpen={false}
        >
            <SelectControl
                label={__('Source', 'smart-blocks')}
                value={postsPostType}
                onChange={value => {
                    setAttributes({postsPostType: value});
                    optChange();
                }}
                options={allPostTypes}
            />

            {allTaxonomies && allTaxonomies.map((tax, i) => {
                const selectedValue = categories ? (categories[tax.value] ?? []) : [];
                return (
                    <MultipleSelectControl
                        label={tax.label}
                        options={termOptions(tax.value)}
                        value={selectedValue}
                        setValue={value => {
                            setAttributes({categories: {...categories, [tax.value]: value}})
                            optChange();
                        }}
                        key={i}
                    />
                );
            }
            )}

            <MultipleSelectControl
                label={__('Exclude Posts', 'smart-blocks')}
                options={allPostsSelect}
                value={excludePosts}
                setValue={value => {
                    setAttributes({excludePosts: value});
                    optChange();
                }}
            />

            <SelectControl
                label={__('Order By', 'smart-blocks')}
                value={orderBy}
                onChange={value => {
                    setAttributes({orderBy: value});
                    optChange();
                }}
                options={[
                    {value: 'date', label: esc_html__('Date', 'smart-blocks')},
                    {value: 'modified', label: esc_html__('Last Modified Date', 'smart-blocks')},
                    {value: 'rand', label: esc_html__('Rand', 'smart-blocks')},
                    {value: 'comment_count', label: esc_html__('Comment Count', 'smart-blocks')},
                    {value: 'title', label: esc_html__('Title', 'smart-blocks')},
                    {value: 'author', label: esc_html__('Show Post Author', 'smart-blocks')}
                ]}
            />

            <SelectControl
                label={__('Order', 'smart-blocks')}
                value={order}
                onChange={value => {
                    setAttributes({order: value});
                    optChange();
                }}
                options={[
                    {value: 'desc', label: esc_html__('Descending', 'smart-blocks')},
                    {value: 'asc', label: esc_html__('Ascending', 'smart-blocks')}
                ]}
            />

            <RangeSliderControl
                label={__('Offset', 'smart-blocks')}
                value={offset}
                setValue={value => {
                    setAttributes({offset: value});
                    optChange();
                }}
                min={0}
                max={10}
            />


            {usePostNumber && (<RangeSliderControl
                label={__('No of Posts', 'smart-blocks')}
                value={attributes.noOfPosts}
                setValue={value => {
                    setAttributes({noOfPosts: value});
                    optChange();
                }}
                min={0}
                max={20}
            />)}


            {applyFilters('smartblocks.queryFilter', '', props)}
        </PanelBody>
    );
}

export default GroupControlQuery;
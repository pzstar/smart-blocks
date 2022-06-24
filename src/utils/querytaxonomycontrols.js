import { useSelect } from '@wordpress/data';
import TokenMultiSelectControl from './token-multiselect-control';
const QueryTaxonomyControls = ({postType, value, onChange}) => {
	const allTaxonomies = useSelect((select) => {
        var allTax = [];
        var selectTaxonomiesTypes = select('core').getTaxonomies();
        selectTaxonomiesTypes?.forEach((el)=>{
            if(el.visibility.show_in_nav_menus === true && el.types[0] == postType){
            allTax.push({
                value: el.slug,
                label: el.name
            })}
        });
        return allTax;
    }, [postType]);


    const allTaxTerms = useSelect((select) => {
		let selectTerms = [];
        allTaxonomies && allTaxonomies.map(function(tax, i){
            selectTerms[tax.value] = select('core').getEntityRecords('taxonomy', tax.value, {
                per_page: -1,
            });
        });
        return selectTerms;
    }, [allTaxonomies]);

    const termSuggestions = {};

    const termOptions = (taxonomy) =>{
    	let options = [];
    	allTaxTerms[taxonomy] && allTaxTerms[taxonomy].map((term)=> {
			options.push({
				value:term.id,
				label:term.name});
		});
    	return options;
    }

	return <>
		{allTaxonomies && allTaxonomies.map((tax, i)=>{
			const selectedValue = value ? value[tax.value] ? value[tax.value] : [] : [];
			return <div key={i}>
				<TokenMultiSelectControl
					label={ tax.label }
					options={termOptions(tax.value)}
					value={selectedValue}
					onChange={(e) => { onChange({...value, [tax.value] : e})}}
				/>
			</div>
			}
		)}
	</>
}
export default QueryTaxonomyControls;
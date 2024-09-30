import {__} from '@wordpress/i18n';
import Select, {components} from "react-select";
import {
    SortableContainer,
    SortableElement,
    sortableHandle
} from "react-sortable-hoc";
function arrayMove(array, from, to) {
    array = array.slice();
    array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
    return array;
}

const SortableMultiValue = SortableElement((props) => {
    // this prevents the menu from being opened/closed when the user clicks
    // on a value to begin dragging it. ideally, detecting a click (instead of
    // a drag) would still focus the control and toggle the menu, but that
    // requires some magic with refs that are out of scope for this example
    const onMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const innerProps = {...props.innerProps, onMouseDown};
    return <components.MultiValue {...props} innerProps={innerProps} />;
});

const SortableMultiValueLabel = sortableHandle((props) => (
    <components.MultiValueLabel {...props} />
));

const SortableSelect = SortableContainer(Select);

const MultipleSelectControl = ({label, options, value, setValue}) => {
    var selectedVals = [];
    value && value.map((val) => {
        let foundVal = options.find(option => option.value == val);
        foundVal && selectedVals.push(foundVal);
    })
    const onSortEnd = ({oldIndex, newIndex}) => {
        const newValue = arrayMove(selectedVals, oldIndex, newIndex);
        let valArr = [];
        newValue.map((innerval, i) => {
            valArr.push(innerval.value)
        })
        setValue(valArr);
    };
    return <>
        <div className="sb-field sb-multiple-select">
            {label && (<label className="sb-label">{label}</label>)}
            <div class="sb-input-fields">
                <div class="sb-popup-select">
                    <SortableSelect
                        useDragHandle={!0}
                        axis="xy"
                        onSortEnd={onSortEnd}
                        getHelperDimensions={({node}) => node.getBoundingClientRect()}
                        isMulti
                        options={options}
                        value={selectedVals}
                        onChange={val => {
                            let valArr = [];
                            val.map((innerval, i) => {
                                valArr.push(innerval.value)
                            })
                            setValue(valArr);
                        }}
                        components={{
                            MultiValue: SortableMultiValue,
                            MultiValueLabel: SortableMultiValueLabel
                        }}
                        closeMenuOnSelect={false}
                        className="sb-select-container"
                        classNamePrefix="sb-select"
                    />
                </div>
            </div>
        </div>
    </>;
}

export default MultipleSelectControl;
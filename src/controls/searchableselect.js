import { useEffect, useRef,useState } from '@wordpress/element';

const SearchableSelectControl = ({options, optLabel, optValue, value, setValue}) => {
	const [query, setQuery] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const inputRef = useRef(null);

	useEffect(() => {
		document.addEventListener("click", toggle);
		return () => document.removeEventListener("click", toggle);
	}, []);

	const selectOption = (option) => {
		setQuery(() => "");
		setValue(option[optValue]);
		setIsOpen((isOpen) => !isOpen);
	};

	function toggle(e) {
	    inputRef.current.value = "";
		setIsOpen(e && e.target === inputRef.current);
	}

	const getDisplayValue = () => {
		if (query && isOpen) {
			return query;
		}
		if (value) {
			let opt = options.find((option) => option[optValue] == value);
			return opt ? opt[optLabel] : '';
		}
		return "";
	};

	const filter = (options) => {
		return options.filter(
			(option) => option[optLabel].toLowerCase().indexOf(query.toLowerCase()) > -1
		);
	};

	return (
		<div className="sb-dropdown">
			<div className="control">
				<div className="selected-value">
					<input
						ref={inputRef}
						type="text"
						value={getDisplayValue()}
						placeholder={getDisplayValue()}
						onChange={(e) => {
							setQuery(e.target.value);
						}}
						onClick={toggle}
					/>
				</div>
				<div className={`arrow ${isOpen ? "open" : ""}`}></div>
			</div>

			<div className={`options ${isOpen ? "open" : ""}`}>
				{filter(options).map((option, index) => {
					return (
						<div
							onClick={() => selectOption(option)}
							className={`option ${option[optValue] === value ? "selected" : ""}`}
							key={`${optValue}-${index}`}
						>
						{option[optLabel]}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SearchableSelectControl;

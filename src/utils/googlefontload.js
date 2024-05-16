const GoogleFontLoad = ({ family, weight }) => {
    const familyweight = (weight && (weight.length > 0) && weight != 'inherit') ? ':' + weight : null;
    return family && family != 'inherit' ? <link rel="stylesheet" href={`https://fonts.googleapis.com/css?family=${family}${familyweight ? familyweight : ''}`} /> : '';
};

export default GoogleFontLoad;
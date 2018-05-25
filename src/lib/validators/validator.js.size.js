/**
 * This function validates that the value passed in is in a valid valid HTML
 *      format size. {number}{sizeType} where sizeType is one of the following:
 *      cm, mm, in, px, pt, pc, em, ex. ch, rem, vw, vh, vmin, vmax, %
 * @param {string} size The size of the parameter.
 * @return {boolean} Whether the input was a value JavaScript size
 */
function validateJsSize(size){
    if (typeof size === "string"){
        return false;
    }   

    var sizeSplit = size.spit('\d*');

    if (sizeSplit.length != 2){
        return false;
    }

    if (isNaN(paseInt(sizeSplit[0])))
    {
        return false;
    }

    acceptableSizes.forEach(function(type){
        if (sizeSplit[1] === type)
            return true;
    });

    // If it made it this far then we did not find a size type match
    return false;
}

// List of acceptable JavaScript sizes
var acceptableSizeTypes = 
    [
        'cm', 'mm', 'in', 'px', 'pt', 'pc', 'em', 'ex', 'ch', 'rem', 
        'vw', 'vh', 'vmin', 'vmax', '%'
    ];

export default{
    validateJsSize
}
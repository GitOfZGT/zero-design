module.exports = function(source) {
    return source.replace(/@import[^;]+\.scss['"\s]+;?/g, '');
};

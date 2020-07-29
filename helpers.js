  module.exports = {
    list: function(context, options) {
        return `<ul>
${context.map(flavor => `<li><a href="/icecreams/${flavor.name}">${flavor.name}</a></li>`).join('')}
</ul>
`
    }
};
var el = wp.element.createElement,
    registerBlockType = wp.blocks.registerBlockType,
    RichText = wp.editor.RichText;

registerBlockType( 'gutenberg-boilerplate-es5/hello-world-step-01', {
    title: 'Hello World (Step 1)',

    icon: 'universal-access-alt',

    category: 'layout',

    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        }
    },

    edit: function(props) {
        var content = props.attributes.content;

        function onChangeContent( newContent ) {
            props.setAttributes( { content: newContent } );
        }

        return el(
            RichText,
            {
                tagName: 'p',
                className: props.className,
                onChange: onChangeContent,
                value: content,
            }
        );
    },

    save: function(props) {
        var content = props.attributes.content;

        return el( RichText.Content, {
            tagName: 'p',
            className: props.className,
            value: content
        } );
    },
} );
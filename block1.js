wp.blocks.registerBlockType( 'gutenberg-boilerplate-es5/hello-world-step-01', {
    title: 'Hello World (Step 4)',

    icon: 'universal-access-alt',

    category: 'layout',

    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        alignment: {
            type: 'string',
        },
    },

    edit: function(props) {
        var content = props.attributes.content,
            alignment = props.attributes.alignment;

        function onChangeContent( newContent ) {
            props.setAttributes( { content: newContent } );
        }

        function onChangeAlignment( newAlignment ) {
            props.setAttributes( { alignment: newAlignment } );
        }

        return (
            wp.element.createElement(
                wp.element.Fragment,
                null,
                wp.element.createElement(
                    wp.editor.BlockControls,
                    null,
                    wp.element.createElement(
                        wp.editor.AlignmentToolbar,
                        {
                            value: alignment,
                            onChange: onChangeAlignment,
                        }
                    )
                ),
                wp.element.createElement(
                    wp.editor.RichText,
                    {
                        key: 'editable',
                        tagName: 'p',
                        className: props.className,
                        style: { textAlign: alignment },
                        onChange: onChangeContent,
                        value: content,
                    }
                )
            )
        );
    },

    save: function(props) {
        var content = props.attributes.content,
            alignment = props.attributes.alignment;

        return wp.element.createElement( wp.editor.RichText.Content, {
            tagName: 'p',
            className: props.className,
            style: { textAlign: alignment },
            value: content
        } );
    },
} );
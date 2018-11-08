var el = wp.element.createElement,
    Fragment = wp.element.Fragment,
    registerBlockType = wp.blocks.registerBlockType,
    RichText = wp.editor.RichText,
    BlockControls = wp.editor.BlockControls,
    AlignmentToolbar = wp.editor.AlignmentToolbar;

registerBlockType( 'gutenberg-boilerplate-es5/hello-world-step-01', {
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
            el(
                Fragment,
                null,
                el(
                    BlockControls,
                    null,
                    el(
                        AlignmentToolbar,
                        {
                            value: alignment,
                            onChange: onChangeAlignment,
                        }
                    )
                ),
                el(
                    RichText,
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

        return el( RichText.Content, {
            tagName: 'p',
            className: props.className,
            style: { textAlign: alignment },
            value: content
        } );
    },
} );
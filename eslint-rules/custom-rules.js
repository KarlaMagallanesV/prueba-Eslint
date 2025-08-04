export const rules = {
    // 1. Regla: Prohibir el uso de console.log
    'no-console-log': {
        create(context) {
            return {
                CallExpression(node) {
                    if (
                        node.callee?.object?.name === 'console' &&
                        node.callee?.property?.name === 'log'
                    ) {
                        context.report({
                            node,
                            message: 'Evita usar console.log en producción.',
                        });
                    }
                },
            };
        },
    },

    // 2. Regla: Usar const si no se reasigna
    'prefer-const-strict': {
        create(context) {
            return {
                VariableDeclaration(node) {
                    if (node.kind === 'let') {
                        const allInitialized = node.declarations.every(d => d.init != null);
                        if (allInitialized) {
                            context.report({
                                node,
                                message: 'Usa const si la variable no se reasigna.',
                            });
                        }
                    }
                },
            };
        },
    },

    // 3. Regla: TODO debe tener autor
    'require-todo-author': {
        create(context) {
            return {
                Program() {
                    const comments = context.getSourceCode().getAllComments();
                    comments.forEach(comment => {
                        if (
                            comment.value.includes('TODO') &&
                            !/@\w+/.test(comment.value)
                        ) {
                            context.report({
                                loc: comment.loc,
                                message: 'TODO debe incluir el nombre del autor. Ejemplo: // TODO @karla: revisar esto',
                            });
                        }
                    });
                },
            };
        },
    },
};

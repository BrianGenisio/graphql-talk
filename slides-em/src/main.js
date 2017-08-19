const React = require("react");
const ReactDOM = require("react-dom");
const SimpleMarkdown = require("simple-markdown");
const {StyleSheet, css} = require("aphrodite");
const hljs = require("highlightjs");

const styles = StyleSheet.create({
    h1: {
        fontSize: "8vh",
        fontWeight: "normal",
        display: "block",
        margin: 0,
        color: "white",
    },

    h2: {
        margin: 0,
        marginTop: "2vh",
        fontSize: "4vh",
        fontWeight: "normal",
        textTransform: "uppercase",
        display: "block",
        color: "#BABEC2",
        height: 0,
    },

    h3: {
        position: "absolute",
        top: "10vh",
        fontSize: "4vh",
        textTransform: "uppercase",
        color: "#999",
    },

    slide: {
        boxSizing: "border-box",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "white",
        padding: "10vh",
    },

    slidePlain: {
        paddingLeft: "12vh",
        borderLeft: "2vh solid #11accd",
    },

    slideMain: {
        alignItems: "flex-end",
        backgroundColor: "#314453",
    },

    slideClosing: {
        backgroundColor: "#314453",
    },

    slideSection: {
        alignItems: "flex-end",
        backgroundColor: "#11accd",
    },

    slideSubsection: {
        alignItems: "flex-end",
        backgroundColor: "#007D96",
        borderRight: "2vh solid #11accd",
        paddingRight: "8vh",
    },

    slideNum: {
        position: "absolute",
        left: "5vh",
        bottom: "5vh",
        color: "#BABEC2",
        fontSize: "2vh",
    },

    confidential: {
        position: "absolute",
        bottom: "5vh",
        color: "#BABEC2",
        fontSize: "2vh",
    },

    logoWrap: {
        height: 0,
    },

    logo: {
        height: "7vh",
        position: "absolute",
        top: "10vh",
        right: "10vh",
    },

    strong: {
        fontWeight: "bold",
    },

    list: {
        color: "#11accd",
        fontSize: "6vh",
        fontWeight: 200,
        margin: 0,
        paddingLeft: "6vh",
    },

    unorderedList: {
        listStyleType: "disc",
    },

    nestedList: {
        marginLeft: "-1vh",
    },

    nestedOrderedList: {
        listStyleType: "lower-latin",
    },

    listElement: {
        ":nth-child(n+1)": {
            marginTop: "3vh",
        },
    },

    paragraph: {
        fontWeight: 200,
        color: "#11accd",
        fontSize: "8vh",
        lineHeight: 1.3,
        margin: 0,
    },

    listParagraph: {
        fontSize: "6vh",
    },

    imageParagraph: {
        width: "100%",
        textAlign: "center",
    },

    code: {
        fontSize: "5vh",
    },
});

class HighlightedCode extends React.Component {
    highlight(element) {
        if (element) {
            hljs.highlightBlock(element);
        }
    }

    render() {
        const className = this.props.lang
            ? `${this.props.lang} ${css(styles.code)}`
            : css(styles.code);

        return <pre>
            <code className={className} ref={e => this.highlight(e)}>
                {this.props.children}
            </code>
        </pre>;
    }
}

const rules = {
    ...SimpleMarkdown.defaultRules,

    list: {
        ...SimpleMarkdown.defaultRules.list,

        react: (node, output, state) => {
            const ListKind = node.ordered ? "ol" : "ul";

            const innerState = {
                ...state,
                listDepth: state.listDepth ? state.listDepth + 1 : 1,
            };

            return <ListKind
                className={css(
                    styles.list,
                    !node.ordered && styles.unorderedList,
                    state.listDepth && styles.nestedList,
                    node.ordered && state.listDepth && styles.nestedOrderedList
                )}
                key={state.key}
                start={node.start}
            >
                {node.items.map((item, i) => <li
                    className={css(styles.listElement)}
                    key={i}
                >
                    {output(item, innerState)}
                </li>)}
            </ListKind>;
        },
    },

    strong: {
        ...SimpleMarkdown.defaultRules.strong,

        react: (node, output, state) => {
            return <strong key={state.key} className={css(styles.strong)}>
                {output(node.content, state)}
            </strong>;
        },
    },

    codeBlock: {
        ...SimpleMarkdown.defaultRules.codeBlock,

        react: (node, output, state) => {
            return <HighlightedCode lang={node.lang} key={state.key}>
                {node.content}
            </HighlightedCode>;
        },
    },

    heading: {
        ...SimpleMarkdown.defaultRules.heading,

        react: (node, output, state) => {
            if (node.level === 1) {
                return <h1 className={css(styles.h1)} key={state.key}>
                    {output(node.content, state)}
                </h1>;
            } else if (node.level === 2) {
                return <h2 className={css(styles.h2)} key={state.key}>
                    {output(node.content, state)}
                </h2>;
            } else if (node.level === 3) {
                return <h3 className={css(styles.h3)} key={state.key}>
                    {output(node.content, state)}
                </h3>;
            } else {
                throw new Error("unknown heading h" + node.level);
            }
        },
    },

    logo: {
        order: SimpleMarkdown.defaultRules.image.order,
        match: function(source) {
            return /^&logo&/.exec(source);
        },
        parse: function(capture, parse, state) {
            return {};
        },
        react: function(node, output, state) {
            const url = "https://phabricator-files.khanacademy.org/file/data/" +
                        "f3eyumu5iin2ktifvysd/PHID-FILE-ei34bs6s4mowmbh52wiy/" +
                        "preview-KA_logo_white_transparent.png";

            return <div key={state.key} className={css(styles.logoWrap)}>
                <img
                    className={css(styles.logo)}
                    src={url}
                />
            </div>;
        },
    },

    slide: {
        order: SimpleMarkdown.defaultRules.heading.order - 1,

        match: function(source) {
            return /^~~~([a-z]*)\n([\s\S]+?)(?=(~~~|$))/.exec(source);
        },

        parse: function(capture, parse, state) {
            state.slideCount = state.slideCount ? state.slideCount + 1 : 1;

            return {
                kind: capture[1],
                content: parse(capture[2] + "\n\n", state),
                slideNum: state.slideCount,
            };
        },

        react: function(node, output, state) {
            const main = node.kind === "main";
            const closing = node.kind === "closing";
            const section = node.kind === "s";
            const subsection = node.kind === "ss";

            const plain = !main && !closing && !section && !subsection;

            return <div
                key={state.key}
                className={css(
                    styles.slide,
                    main && styles.slideMain,
                    closing && styles.slideClosing,
                    section && styles.slideSection,
                    subsection && styles.slideSubsection,
                    plain && styles.slidePlain
                )}
            >
                {output(node.content, {...state, slideKind: node.kind})}
                {plain && <div className={css(styles.slideNum)}>{node.slideNum}</div>}
                {plain && <div className={css(styles.confidential)}>
                    <strong>Confidential</strong> &mdash;{" "}
                    Do not share without permission from Khan Academy
                </div>}
            </div>;
        },
    },

    paragraph: {
        ...SimpleMarkdown.defaultRules.paragraph,

        react: function(node, output, state) {
            if (node.content.length === 1 && node.content[0].type === "logo") {
                return output(node.content, state);
            }

            const hasImage = node.content.length === 1 && node.content[0].type === "image";

            return <p
                key={state.key}
                className={css(
                    styles.paragraph,
                    state.listDepth && styles.listParagraph,
                    hasImage && styles.imageParagraph
                )}
            >
                {output(node.content, state)}
            </p>;
        },
    },
};

const parser = SimpleMarkdown.parserFor(rules);
const output = SimpleMarkdown.reactFor(SimpleMarkdown.ruleOutput(rules, 'react'));

const preso = require("./preso.html") + "\n\n";

const SlidePresenter = React.createClass({
    propTypes: {
        slides: React.PropTypes.arrayOf(React.PropTypes.node.isRequired).isRequired,
    },

    getInitialState() {
        return {
            slide: 0,
        };
    },

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp);
    },

    onKeyUp(e) {
        if (e.shiftKey || e.ctrlKey || e.altKey) {
            return;
        }

        if (e.keyCode === 39) {
            this.setState({
                slide: Math.min(this.state.slide + 1, this.props.slides.length - 1),
            });
        } else if (e.keyCode === 37) {
            this.setState({
                slide: Math.max(this.state.slide - 1, 0),
            });
        }
    },

    render() {
        return this.props.slides[this.state.slide];
    },
});

ReactDOM.render(
    <SlidePresenter slides={output(parser(preso))} />,
    document.querySelector("#main"));

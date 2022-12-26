import { Text, TextProps } from "@go1d/go1d";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  text: string;
  props?: any;
}

export const MarkdownText: FC<Props & TextProps> = ({ text, ...props }) => {
  return (
    <Text {...props} css={styles}>
      <ReactMarkdown className="markdown-body">{text}</ReactMarkdown>
    </Text>
  );
};

const styles = {
  "@media (prefers-color-scheme: dark)": {
    ".markdown-body": {
      colorScheme: "dark",
      "--color-prettylights-syntax-comment": "#8b949e",
      "--color-prettylights-syntax-constant": "#79c0ff",
      "--color-prettylights-syntax-entity": "#d2a8ff",
      "--color-prettylights-syntax-storage-modifier-import": "#c9d1d9",
      "--color-prettylights-syntax-entity-tag": "#7ee787",
      "--color-prettylights-syntax-keyword": "#ff7b72",
      "--color-prettylights-syntax-string": "#a5d6ff",
      "--color-prettylights-syntax-variable": "#ffa657",
      "--color-prettylights-syntax-brackethighlighter-unmatched": "#f85149",
      "--color-prettylights-syntax-invalid-illegal-text": "#f0f6fc",
      "--color-prettylights-syntax-invalid-illegal-bg": "#8e1519",
      "--color-prettylights-syntax-carriage-return-text": "#f0f6fc",
      "--color-prettylights-syntax-carriage-return-bg": "#b62324",
      "--color-prettylights-syntax-string-regexp": "#7ee787",
      "--color-prettylights-syntax-markup-list": "#f2cc60",
      "--color-prettylights-syntax-markup-heading": "#1f6feb",
      "--color-prettylights-syntax-markup-italic": "#c9d1d9",
      "--color-prettylights-syntax-markup-bold": "#c9d1d9",
      "--color-prettylights-syntax-markup-deleted-text": "#ffdcd7",
      "--color-prettylights-syntax-markup-deleted-bg": "#67060c",
      "--color-prettylights-syntax-markup-inserted-text": "#aff5b4",
      "--color-prettylights-syntax-markup-inserted-bg": "#033a16",
      "--color-prettylights-syntax-markup-changed-text": "#ffdfb6",
      "--color-prettylights-syntax-markup-changed-bg": "#5a1e02",
      "--color-prettylights-syntax-markup-ignored-text": "#c9d1d9",
      "--color-prettylights-syntax-markup-ignored-bg": "#1158c7",
      "--color-prettylights-syntax-meta-diff-range": "#d2a8ff",
      "--color-prettylights-syntax-brackethighlighter-angle": "#8b949e",
      "--color-prettylights-syntax-sublimelinter-gutter-mark": "#484f58",
      "--color-prettylights-syntax-constant-other-reference-link": "#a5d6ff",
      "--color-fg-default": "#c9d1d9",
      "--color-fg-muted": "#8b949e",
      "--color-fg-subtle": "#484f58",
      "--color-canvas-default": "#0d1117",
      "--color-canvas-subtle": "#161b22",
      "--color-border-default": "#30363d",
      "--color-border-muted": "#21262d",
      "--color-neutral-muted": "rgba(110, 118, 129, 0.4)",
      "--color-accent-fg": "#58a6ff",
      "--color-accent-emphasis": "#1f6feb",
      "--color-attention-subtle": "rgba(187, 128, 9, 0.15)",
      "--color-danger-fg": "#f85149",
    },
  },
  "@media (prefers-color-scheme: light)": {
    ".markdown-body": {
      colorScheme: "light",
      "--color-prettylights-syntax-comment": "#6e7781",
      "--color-prettylights-syntax-constant": "#0550ae",
      "--color-prettylights-syntax-entity": "#8250df",
      "--color-prettylights-syntax-storage-modifier-import": "#24292f",
      "--color-prettylights-syntax-entity-tag": "#116329",
      "--color-prettylights-syntax-keyword": "#cf222e",
      "--color-prettylights-syntax-string": "#0a3069",
      "--color-prettylights-syntax-variable": "#953800",
      "--color-prettylights-syntax-brackethighlighter-unmatched": "#82071e",
      "--color-prettylights-syntax-invalid-illegal-text": "#f6f8fa",
      "--color-prettylights-syntax-invalid-illegal-bg": "#82071e",
      "--color-prettylights-syntax-carriage-return-text": "#f6f8fa",
      "--color-prettylights-syntax-carriage-return-bg": "#cf222e",
      "--color-prettylights-syntax-string-regexp": "#116329",
      "--color-prettylights-syntax-markup-list": "#3b2300",
      "--color-prettylights-syntax-markup-heading": "#0550ae",
      "--color-prettylights-syntax-markup-italic": "#24292f",
      "--color-prettylights-syntax-markup-bold": "#24292f",
      "--color-prettylights-syntax-markup-deleted-text": "#82071e",
      "--color-prettylights-syntax-markup-deleted-bg": "#ffebe9",
      "--color-prettylights-syntax-markup-inserted-text": "#116329",
      "--color-prettylights-syntax-markup-inserted-bg": "#dafbe1",
      "--color-prettylights-syntax-markup-changed-text": "#953800",
      "--color-prettylights-syntax-markup-changed-bg": "#ffd8b5",
      "--color-prettylights-syntax-markup-ignored-text": "#eaeef2",
      "--color-prettylights-syntax-markup-ignored-bg": "#0550ae",
      "--color-prettylights-syntax-meta-diff-range": "#8250df",
      "--color-prettylights-syntax-brackethighlighter-angle": "#57606a",
      "--color-prettylights-syntax-sublimelinter-gutter-mark": "#8c959f",
      "--color-prettylights-syntax-constant-other-reference-link": "#0a3069",
      "--color-fg-default": "#24292f",
      "--color-fg-muted": "#57606a",
      "--color-fg-subtle": "#6e7781",
      "--color-canvas-default": "#ffffff",
      "--color-canvas-subtle": "#f6f8fa",
      "--color-border-default": "#d0d7de",
      "--color-border-muted": "hsla(210, 18%, 87%, 1)",
      "--color-neutral-muted": "rgba(175, 184, 193, 0.2)",
      "--color-accent-fg": "#0969da",
      "--color-accent-emphasis": "#0969da",
      "--color-attention-subtle": "#fff8c5",
      "--color-danger-fg": "#cf222e",
    },
  },
  ".markdown-body": {
    msTextSizeAdjust: "100%",
    WebkitTextSizeAdjust: "100%",
    margin: "0",
    color: "var(--color-fg-default)",
    backgroundColor: "var(--color-canvas-default)",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,\n    sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    fontSize: "14px",
    lineHeight: 1.5,
    wordWrap: "break-word",
  },
  ".markdown-body .octicon": {
    display: "inline-block",
    fill: "currentColor",
    verticalAlign: "text-bottom",
    overflow: "visible !important",
  },
  ".markdown-body h1:hover .anchor .octicon-link:before,\n.markdown-body h2:hover .anchor .octicon-link:before,\n.markdown-body h3:hover .anchor .octicon-link:before,\n.markdown-body h4:hover .anchor .octicon-link:before,\n.markdown-body h5:hover .anchor .octicon-link:before,\n.markdown-body h6:hover .anchor .octicon-link:before":
    {
      width: "16px",
      height: "16px",
      content: '" "',
      display: "inline-block",
      backgroundColor: "currentColor",
      WebkitMaskImage:
        "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\")",
      maskImage:
        "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\")",
    },
  ".markdown-body details,\n.markdown-body figcaption,\n.markdown-body figure":
    {
      display: "block",
    },
  ".markdown-body summary": { display: "list-item" },
  ".markdown-body [hidden]": { display: "none !important" },
  ".markdown-body a": {
    backgroundColor: "transparent",
    color: "var(--color-accent-fg)",
    textDecoration: "none",
  },
  ".markdown-body a:active,\n.markdown-body a:hover": { outlineWidth: "0" },
  ".markdown-body abbr[title]": {
    borderBottom: "none",
    textDecoration: "underline dotted",
  },
  ".markdown-body b,\n.markdown-body strong": { fontWeight: 600 },
  ".markdown-body dfn": { fontStyle: "italic" },
  ".markdown-body h1": {
    margin: "0.67em 0",
    fontWeight: 600,
    paddingBottom: "0.3em",
    fontSize: "2em",
    borderBottom: "1px solid var(--color-border-muted)",
  },
  ".markdown-body mark": {
    backgroundColor: "var(--color-attention-subtle)",
    color: "var(--color-text-primary)",
  },
  ".markdown-body small": { fontSize: "90%" },
  ".markdown-body sub,\n.markdown-body sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },
  ".markdown-body sub": { bottom: "-0.25em" },
  ".markdown-body sup": { top: "-0.5em" },
  ".markdown-body img": {
    borderStyle: "none",
    maxWidth: "100%",
    boxSizing: "content-box",
    backgroundColor: "var(--color-canvas-default)",
  },
  ".markdown-body code,\n.markdown-body kbd,\n.markdown-body pre,\n.markdown-body samp":
    {
      fontFamily: "monospace, monospace",
      fontSize: "1em",
    },
  ".markdown-body figure": { margin: "1em 40px" },
  ".markdown-body hr": {
    boxSizing: "content-box",
    overflow: "hidden",
    background: "transparent",
    borderBottom: "1px solid var(--color-border-muted)",
    height: "0.25em",
    padding: "0",
    margin: "24px 0",
    backgroundColor: "var(--color-border-default)",
    border: "0",
  },
  ".markdown-body input": {
    font: "inherit",
    margin: "0",
    overflow: "visible",
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
  },
  '.markdown-body [type="button"],\n.markdown-body [type="reset"],\n.markdown-body [type="submit"]':
    {
      WebkitAppearance: "button",
    },
  '.markdown-body [type="button"]::-moz-focus-inner,\n.markdown-body [type="reset"]::-moz-focus-inner,\n.markdown-body [type="submit"]::-moz-focus-inner':
    {
      borderStyle: "none",
      padding: "0",
    },
  '.markdown-body [type="button"]:-moz-focusring,\n.markdown-body [type="reset"]:-moz-focusring,\n.markdown-body [type="submit"]:-moz-focusring':
    {
      outline: "1px dotted ButtonText",
    },
  '.markdown-body [type="checkbox"],\n.markdown-body [type="radio"]': {
    boxSizing: "border-box",
    padding: "0",
  },
  '.markdown-body [type="number"]::-webkit-inner-spin-button,\n.markdown-body [type="number"]::-webkit-outer-spin-button':
    {
      height: "auto",
    },
  '.markdown-body [type="search"]': {
    WebkitAppearance: "textfield",
    outlineOffset: "-2px",
  },
  '.markdown-body [type="search"]::-webkit-search-cancel-button,\n.markdown-body [type="search"]::-webkit-search-decoration':
    {
      WebkitAppearance: "none",
    },
  ".markdown-body ::-webkit-input-placeholder": {
    color: "inherit",
    opacity: 0.54,
  },
  ".markdown-body ::-webkit-file-upload-button": {
    WebkitAppearance: "button",
    font: "inherit",
  },
  ".markdown-body a:hover": { textDecoration: "underline" },
  ".markdown-body hr::before": { display: "table", content: '""' },
  ".markdown-body hr::after": {
    display: "table",
    clear: "both",
    content: '""',
  },
  ".markdown-body table": {
    borderSpacing: "0",
    borderCollapse: "collapse",
    display: "block",
    width: "max-content",
    maxWidth: "100%",
    overflow: "auto",
  },
  ".markdown-body td,\n.markdown-body th": { padding: "0" },
  ".markdown-body details summary": { cursor: "pointer" },
  ".markdown-body details:not([open]) > *:not(summary)": {
    display: "none !important",
  },
  ".markdown-body kbd": {
    display: "inline-block",
    padding: "3px 5px",
    font: "11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,\n    Liberation Mono, monospace",
    lineHeight: "10px",
    color: "var(--color-fg-default)",
    verticalAlign: "middle",
    backgroundColor: "var(--color-canvas-subtle)",
    border: "solid 1px var(--color-neutral-muted)",
    borderBottomColor: "var(--color-neutral-muted)",
    borderRadius: "6px",
    boxShadow: "inset 0 -1px 0 var(--color-neutral-muted)",
  },
  ".markdown-body h1,\n.markdown-body h2,\n.markdown-body h3,\n.markdown-body h4,\n.markdown-body h5,\n.markdown-body h6":
    {
      marginTop: "24px",
      marginBottom: "16px",
      fontWeight: 600,
      lineHeight: 1.25,
    },
  ".markdown-body h2": {
    fontWeight: 600,
    paddingBottom: "0.3em",
    fontSize: "1.5em",
    borderBottom: "1px solid var(--color-border-muted)",
  },
  ".markdown-body h3": { fontWeight: 600, fontSize: "1.25em" },
  ".markdown-body h4": { fontWeight: 600, fontSize: "1em" },
  ".markdown-body h5": { fontWeight: 600, fontSize: "0.875em" },
  ".markdown-body h6": {
    fontWeight: 600,
    fontSize: "0.85em",
    color: "var(--color-fg-muted)",
  },
  ".markdown-body p": { marginTop: "0", marginBottom: "10px" },
  ".markdown-body blockquote": {
    margin: "0",
    padding: "0 1em",
    color: "var(--color-fg-muted)",
    borderLeft: "0.25em solid var(--color-border-default)",
  },
  ".markdown-body ul,\n.markdown-body ol": {
    marginTop: "0",
    marginBottom: "0",
    paddingLeft: "2em",
  },
  ".markdown-body ol ol,\n.markdown-body ul ol": {
    listStyleType: "lower-roman",
  },
  ".markdown-body ul ul ol,\n.markdown-body ul ol ol,\n.markdown-body ol ul ol,\n.markdown-body ol ol ol":
    {
      listStyleType: "lower-alpha",
    },
  ".markdown-body dd": { marginLeft: "0" },
  ".markdown-body tt,\n.markdown-body code": {
    fontFamily:
      "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,\n    Liberation Mono, monospace",
    fontSize: "12px",
  },
  ".markdown-body pre": {
    marginTop: "0",
    marginBottom: "0",
    fontFamily:
      "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,\n    Liberation Mono, monospace",
    fontSize: "12px",
    wordWrap: "normal",
  },
  ".markdown-body ::placeholder": {
    color: "var(--color-fg-subtle)",
    opacity: 1,
  },
  ".markdown-body input::-webkit-outer-spin-button,\n.markdown-body input::-webkit-inner-spin-button":
    {
      margin: "0",
      WebkitAppearance: "none",
      appearance: "none",
    },
  ".markdown-body .pl-c": { color: "var(--color-prettylights-syntax-comment)" },
  ".markdown-body .pl-c1,\n.markdown-body .pl-s .pl-v": {
    color: "var(--color-prettylights-syntax-constant)",
  },
  ".markdown-body .pl-e,\n.markdown-body .pl-en": {
    color: "var(--color-prettylights-syntax-entity)",
  },
  ".markdown-body .pl-smi,\n.markdown-body .pl-s .pl-s1": {
    color: "var(--color-prettylights-syntax-storage-modifier-import)",
  },
  ".markdown-body .pl-ent": {
    color: "var(--color-prettylights-syntax-entity-tag)",
  },
  ".markdown-body .pl-k": { color: "var(--color-prettylights-syntax-keyword)" },
  ".markdown-body .pl-s,\n.markdown-body .pl-pds,\n.markdown-body .pl-s .pl-pse .pl-s1,\n.markdown-body .pl-sr,\n.markdown-body .pl-sr .pl-cce,\n.markdown-body .pl-sr .pl-sre,\n.markdown-body .pl-sr .pl-sra":
    {
      color: "var(--color-prettylights-syntax-string)",
    },
  ".markdown-body .pl-v,\n.markdown-body .pl-smw": {
    color: "var(--color-prettylights-syntax-variable)",
  },
  ".markdown-body .pl-bu": {
    color: "var(--color-prettylights-syntax-brackethighlighter-unmatched)",
  },
  ".markdown-body .pl-ii": {
    color: "var(--color-prettylights-syntax-invalid-illegal-text)",
    backgroundColor: "var(--color-prettylights-syntax-invalid-illegal-bg)",
  },
  ".markdown-body .pl-c2": {
    color: "var(--color-prettylights-syntax-carriage-return-text)",
    backgroundColor: "var(--color-prettylights-syntax-carriage-return-bg)",
  },
  ".markdown-body .pl-sr .pl-cce": {
    fontWeight: "bold",
    color: "var(--color-prettylights-syntax-string-regexp)",
  },
  ".markdown-body .pl-ml": {
    color: "var(--color-prettylights-syntax-markup-list)",
  },
  ".markdown-body .pl-mh,\n.markdown-body .pl-mh .pl-en,\n.markdown-body .pl-ms":
    {
      fontWeight: "bold",
      color: "var(--color-prettylights-syntax-markup-heading)",
    },
  ".markdown-body .pl-mi": {
    fontStyle: "italic",
    color: "var(--color-prettylights-syntax-markup-italic)",
  },
  ".markdown-body .pl-mb": {
    fontWeight: "bold",
    color: "var(--color-prettylights-syntax-markup-bold)",
  },
  ".markdown-body .pl-md": {
    color: "var(--color-prettylights-syntax-markup-deleted-text)",
    backgroundColor: "var(--color-prettylights-syntax-markup-deleted-bg)",
  },
  ".markdown-body .pl-mi1": {
    color: "var(--color-prettylights-syntax-markup-inserted-text)",
    backgroundColor: "var(--color-prettylights-syntax-markup-inserted-bg)",
  },
  ".markdown-body .pl-mc": {
    color: "var(--color-prettylights-syntax-markup-changed-text)",
    backgroundColor: "var(--color-prettylights-syntax-markup-changed-bg)",
  },
  ".markdown-body .pl-mi2": {
    color: "var(--color-prettylights-syntax-markup-ignored-text)",
    backgroundColor: "var(--color-prettylights-syntax-markup-ignored-bg)",
  },
  ".markdown-body .pl-mdr": {
    fontWeight: "bold",
    color: "var(--color-prettylights-syntax-meta-diff-range)",
  },
  ".markdown-body .pl-ba": {
    color: "var(--color-prettylights-syntax-brackethighlighter-angle)",
  },
  ".markdown-body .pl-sg": {
    color: "var(--color-prettylights-syntax-sublimelinter-gutter-mark)",
  },
  ".markdown-body .pl-corl": {
    textDecoration: "underline",
    color: "var(--color-prettylights-syntax-constant-other-reference-link)",
  },
  ".markdown-body [data-catalyst]": { display: "block" },
  ".markdown-body g-emoji": {
    fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: "1em",
    fontStyle: "normal !important",
    fontWeight: 400,
    lineHeight: 1,
    verticalAlign: "-0.075em",
  },
  ".markdown-body g-emoji img": { width: "1em", height: "1em" },
  ".markdown-body::before": { display: "table", content: '""' },
  ".markdown-body::after": { display: "table", clear: "both", content: '""' },
  ".markdown-body > *:first-child": { marginTop: "0 !important" },
  ".markdown-body > *:last-child": { marginBottom: "0 !important" },
  ".markdown-body a:not([href])": { color: "inherit", textDecoration: "none" },
  ".markdown-body .absent": { color: "var(--color-danger-fg)" },
  ".markdown-body .anchor": {
    cssFloat: "left",
    paddingRight: "4px",
    marginLeft: "-20px",
    lineHeight: 1,
  },
  ".markdown-body .anchor:focus": { outline: "none" },
  ".markdown-body p,\n.markdown-body blockquote,\n.markdown-body ul,\n.markdown-body ol,\n.markdown-body dl,\n.markdown-body table,\n.markdown-body pre,\n.markdown-body details":
    {
      marginTop: "0",
      marginBottom: "16px",
    },
  ".markdown-body blockquote > :first-child": { marginTop: "0" },
  ".markdown-body blockquote > :last-child": { marginBottom: "0" },
  ".markdown-body sup > a::before": { content: '"["' },
  ".markdown-body sup > a::after": { content: '"]"' },
  ".markdown-body h1 .octicon-link,\n.markdown-body h2 .octicon-link,\n.markdown-body h3 .octicon-link,\n.markdown-body h4 .octicon-link,\n.markdown-body h5 .octicon-link,\n.markdown-body h6 .octicon-link":
    {
      color: "var(--color-fg-default)",
      verticalAlign: "middle",
      visibility: "hidden",
    },
  ".markdown-body h1:hover .anchor,\n.markdown-body h2:hover .anchor,\n.markdown-body h3:hover .anchor,\n.markdown-body h4:hover .anchor,\n.markdown-body h5:hover .anchor,\n.markdown-body h6:hover .anchor":
    {
      textDecoration: "none",
    },
  ".markdown-body h1:hover .anchor .octicon-link,\n.markdown-body h2:hover .anchor .octicon-link,\n.markdown-body h3:hover .anchor .octicon-link,\n.markdown-body h4:hover .anchor .octicon-link,\n.markdown-body h5:hover .anchor .octicon-link,\n.markdown-body h6:hover .anchor .octicon-link":
    {
      visibility: "visible",
    },
  ".markdown-body h1 tt,\n.markdown-body h1 code,\n.markdown-body h2 tt,\n.markdown-body h2 code,\n.markdown-body h3 tt,\n.markdown-body h3 code,\n.markdown-body h4 tt,\n.markdown-body h4 code,\n.markdown-body h5 tt,\n.markdown-body h5 code,\n.markdown-body h6 tt,\n.markdown-body h6 code":
    {
      padding: "0 0.2em",
      fontSize: "inherit",
    },
  ".markdown-body ul.no-list,\n.markdown-body ol.no-list": {
    padding: "0",
    listStyleType: "none",
  },
  '.markdown-body ol[type="1"]': { listStyleType: "decimal" },
  '.markdown-body ol[type="a"]': { listStyleType: "lower-alpha" },
  '.markdown-body ol[type="i"]': { listStyleType: "lower-roman" },
  ".markdown-body div > ol:not([type])": { listStyleType: "decimal" },
  ".markdown-body ul ul,\n.markdown-body ul ol,\n.markdown-body ol ol,\n.markdown-body ol ul":
    {
      marginTop: "0",
      marginBottom: "0",
    },
  ".markdown-body li > p": { marginTop: "16px" },
  ".markdown-body li + li": { marginTop: "0.25em" },
  ".markdown-body dl": { padding: "0" },
  ".markdown-body dl dt": {
    padding: "0",
    marginTop: "16px",
    fontSize: "1em",
    fontStyle: "italic",
    fontWeight: 600,
  },
  ".markdown-body dl dd": { padding: "0 16px", marginBottom: "16px" },
  ".markdown-body table th": { fontWeight: 600 },
  ".markdown-body table th,\n.markdown-body table td": {
    padding: "6px 13px",
    border: "1px solid var(--color-border-default)",
  },
  ".markdown-body table tr": {
    backgroundColor: "var(--color-canvas-default)",
    borderTop: "1px solid var(--color-border-muted)",
  },
  ".markdown-body table tr:nth-child(2n)": {
    backgroundColor: "var(--color-canvas-subtle)",
  },
  ".markdown-body table img": { backgroundColor: "transparent" },
  '.markdown-body img[align="right"]': { paddingLeft: "20px" },
  '.markdown-body img[align="left"]': { paddingRight: "20px" },
  ".markdown-body .emoji": {
    maxWidth: "none",
    verticalAlign: "text-top",
    backgroundColor: "transparent",
  },
  ".markdown-body span.frame": { display: "block", overflow: "hidden" },
  ".markdown-body span.frame > span": {
    display: "block",
    cssFloat: "left",
    width: "auto",
    padding: "7px",
    margin: "13px 0 0",
    overflow: "hidden",
    border: "1px solid var(--color-border-default)",
  },
  ".markdown-body span.frame span img": { display: "block", cssFloat: "left" },
  ".markdown-body span.frame span span": {
    display: "block",
    padding: "5px 0 0",
    clear: "both",
    color: "var(--color-fg-default)",
  },
  ".markdown-body span.align-center": {
    display: "block",
    overflow: "hidden",
    clear: "both",
  },
  ".markdown-body span.align-center > span": {
    display: "block",
    margin: "13px auto 0",
    overflow: "hidden",
    textAlign: "center",
  },
  ".markdown-body span.align-center span img": {
    margin: "0 auto",
    textAlign: "center",
  },
  ".markdown-body span.align-right": {
    display: "block",
    overflow: "hidden",
    clear: "both",
  },
  ".markdown-body span.align-right > span": {
    display: "block",
    margin: "13px 0 0",
    overflow: "hidden",
    textAlign: "right",
  },
  ".markdown-body span.align-right span img": {
    margin: "0",
    textAlign: "right",
  },
  ".markdown-body span.float-left": {
    display: "block",
    cssFloat: "left",
    marginRight: "13px",
    overflow: "hidden",
  },
  ".markdown-body span.float-left span": { margin: "13px 0 0" },
  ".markdown-body span.float-right": {
    display: "block",
    cssFloat: "right",
    marginLeft: "13px",
    overflow: "hidden",
  },
  ".markdown-body span.float-right > span": {
    display: "block",
    margin: "13px auto 0",
    overflow: "hidden",
    textAlign: "right",
  },
  ".markdown-body code,\n.markdown-body tt": {
    padding: "0.2em 0.4em",
    margin: "0",
    fontSize: "85%",
    backgroundColor: "var(--color-neutral-muted)",
    borderRadius: "6px",
  },
  ".markdown-body code br,\n.markdown-body tt br": { display: "none" },
  ".markdown-body del code": { textDecoration: "inherit" },
  ".markdown-body pre code": { fontSize: "100%" },
  ".markdown-body pre > code": {
    padding: "0",
    margin: "0",
    wordBreak: "normal",
    whiteSpace: "pre",
    background: "transparent",
    border: "0",
  },
  ".markdown-body .highlight": { marginBottom: "16px" },
  ".markdown-body .highlight pre": { marginBottom: "0", wordBreak: "normal" },
  ".markdown-body .highlight pre,\n.markdown-body pre": {
    padding: "16px",
    overflow: "auto",
    fontSize: "85%",
    lineHeight: 1.45,
    backgroundColor: "var(--color-canvas-subtle)",
    borderRadius: "6px",
  },
  ".markdown-body pre code,\n.markdown-body pre tt": {
    display: "inline",
    maxWidth: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    lineHeight: "inherit",
    wordWrap: "normal",
    backgroundColor: "transparent",
    border: "0",
  },
  ".markdown-body .csv-data td,\n.markdown-body .csv-data th": {
    padding: "5px",
    overflow: "hidden",
    fontSize: "12px",
    lineHeight: 1,
    textAlign: "left",
    whiteSpace: "nowrap",
  },
  ".markdown-body .csv-data .blob-num": {
    padding: "10px 8px 9px",
    textAlign: "right",
    background: "var(--color-canvas-default)",
    border: "0",
  },
  ".markdown-body .csv-data tr": { borderTop: "0" },
  ".markdown-body .csv-data th": {
    fontWeight: 600,
    background: "var(--color-canvas-subtle)",
    borderTop: "0",
  },
  ".markdown-body .footnotes": {
    fontSize: "12px",
    color: "var(--color-fg-muted)",
    borderTop: "1px solid var(--color-border-default)",
  },
  ".markdown-body .footnotes ol": { paddingLeft: "16px" },
  ".markdown-body .footnotes li": { position: "relative" },
  ".markdown-body .footnotes li:target::before": {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    bottom: "-8px",
    left: "-24px",
    pointerEvents: "none",
    content: '""',
    border: "2px solid var(--color-accent-emphasis)",
    borderRadius: "6px",
  },
  ".markdown-body .footnotes li:target": { color: "var(--color-fg-default)" },
  ".markdown-body .footnotes .data-footnote-backref g-emoji": {
    fontFamily: "monospace",
  },
  ".markdown-body .task-list-item": { listStyleType: "none" },
  ".markdown-body .task-list-item label": { fontWeight: 400 },
  ".markdown-body .task-list-item.enabled label": { cursor: "pointer" },
  ".markdown-body .task-list-item + .task-list-item": { marginTop: "3px" },
  ".markdown-body .task-list-item .handle": { display: "none" },
  ".markdown-body .task-list-item-checkbox": {
    margin: "0 0.2em 0.25em -1.6em",
    verticalAlign: "middle",
  },
  ".markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox": {
    margin: "0 -1.6em 0.25em 0.2em",
  },
  ".markdown-body ::-webkit-calendar-picker-indicator": {
    filter: "invert(50%)",
  },
};

import{A as App$2,g as getUrlParam}from"./index.840bce56.js";import{r as react,R as React,a as ReactDOM}from"./vendor.6df73f0c.js";import{A as AppContent}from"./Text.1c56e9a7.js";import{e as entry}from"./components.js";var App$1="";function App(){var t,r;const e=react.exports.useContext(AppContent);if(!((t=e==null?void 0:e.page)==null?void 0:t.data))return null;const a=e.resolveComponent("page");return React.createElement(a,{config:(r=e==null?void 0:e.page)==null?void 0:r.data})}const getLocalConfig=()=>{const configStr=localStorage.getItem("magicUiConfig");if(!configStr)return[];try{return[eval(`(${configStr})`)]}catch(e){return[]}},app=new App$2({config:((getUrlParam("localPreview")?getLocalConfig():window.magicUiConfig)||[])[0]||{},curPage:getUrlParam("page")});Object.keys(entry.components).forEach(e=>app.registerComponent(e,entry.components[e]));ReactDOM.render(React.createElement(React.StrictMode,null,React.createElement(AppContent.Provider,{value:app},React.createElement(App,null))),document.getElementById("root"));
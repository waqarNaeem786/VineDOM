const vineDom = (tags, ...childeren)=>{
    const element = document.createElement(tags);
    childeren.forEach((child) => {
	element.append(child)
    })
    
    element.att = ((name, attriubute)=>{
	element.setAttribute(name, attriubute);
	return element
    })
    return element;
}

const val = vineDom("div",vineDom("h1","wasup baby").att("class","second")).att("class","first")
const root = document.getElementById("root");
root.append(val)



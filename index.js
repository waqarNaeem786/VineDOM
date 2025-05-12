//Dom renderer

function component(){
    return(
	`<div class="first"><h1>hellow</h1></div>`
    )

}

function extractor(){    
    const tags = component().match(/(?<=<)\w+(?=[ >])/gm);
    const text = component().match(/(?<=>)([^<]+)(?=<)/gm);
    const att = {};
    const attReg = /(\w+)="([^"]*)"/gm;
    let match;
    while((match = attReg.exec(component())) !== null){
	att[match[1]] = match[2];
    }
    return {tags, text, att};
}

// virtual dom for the data representation
function treedom(){
    const {tags, text, att} = extractor();
    return(
	type: tags,
	text: text,
	attributes: att
    )
}

const root = document.getElementById("root");
root.append(renderer());

